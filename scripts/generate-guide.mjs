import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  anchor,
  crossLinks,
  languageSwitcher,
  languages,
  localized
} from "./languages.mjs";

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), "..");
const dataPath = path.join(rootDir, "data", "custom-skill-guide.json");

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
}

function strings(lang, data) {
  return data.ui[lang] ?? data.ui.en;
}

function renderBlock(block, lang) {
  const lines = [];
  switch (block.type) {
    case "paragraph":
      lines.push(localized(block.text, lang), "");
      break;
    case "list":
      for (const item of block.items) {
        lines.push(`- ${localized(item, lang)}`);
      }
      lines.push("");
      break;
    case "steps":
      block.steps.forEach((step, index) => {
        lines.push(`**Step ${index + 1}. ${localized(step.title, lang)}**`, "");
        lines.push(localized(step.body, lang), "");
      });
      break;
    case "code":
      lines.push(`\`\`\`${block.language ?? ""}`, block.content.trimEnd(), "```", "");
      break;
    case "callout": {
      const label = localized(block.label, lang) || "Note";
      lines.push(`> **${label}:** ${localized(block.text, lang)}`, "");
      break;
    }
    case "table": {
      const headers = block.headers.map((h) => localized(h, lang));
      lines.push(`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`);
      for (const row of block.rows) {
        lines.push(`| ${row.map((cell) => localized(cell, lang)).join(" | ")} |`);
      }
      lines.push("");
      break;
    }
    default:
      throw new Error(`Unknown block type: ${block.type}`);
  }
  return lines;
}

function renderGuide(data, langCode) {
  const lang = languages.find((item) => item.code === langCode);
  const t = strings(langCode, data);
  const tocItems = data.sections.map((section) => ({
    title: localized(section.title, langCode),
    id: section.id
  }));

  const lines = [
    `# ${t.title}`,
    "",
    `> ${t.subtitle}`,
    "",
    crossLinks(lang, t),
    "",
    "---",
    "",
    languageSwitcher(langCode, "guide"),
    "",
    "---",
    "",
    `## ${t.toc}`,
    ""
  ];

  for (const item of tocItems) {
    lines.push(`- [${item.title}](#${item.id})`);
  }

  lines.push("", `> ${t.verificationNote}`, "");

  for (const section of data.sections) {
    const title = localized(section.title, langCode);
    lines.push(`## ${title}`, "", `<a id="${section.id}"></a>`, "");
    for (const block of section.blocks) {
      lines.push(...renderBlock(block, langCode));
    }
  }

  lines.push(
    "---",
    "",
    `> ${t.generatedNote}`,
    ""
  );

  return lines.join("\n");
}

function validateData(data) {
  const codes = languages.map((l) => l.code);
  for (const section of data.sections) {
    for (const code of codes) {
      if (!section.title[code]) {
        throw new Error(`Missing section title "${section.id}" for language "${code}"`);
      }
    }
    for (const block of section.blocks) {
      if (block.type === "code") continue;
      if (block.type === "steps") {
        for (const step of block.steps) {
          for (const code of codes) {
            if (!step.title[code] || !step.body[code]) {
              throw new Error(`Missing step translation in "${section.id}" for "${code}"`);
            }
          }
        }
      } else if (block.type === "table") {
        for (const h of block.headers) {
          for (const code of codes) {
            if (!h[code]) throw new Error(`Missing table header in "${section.id}" for "${code}"`);
          }
        }
        for (const row of block.rows) {
          for (const cell of row) {
            for (const code of codes) {
              if (!cell[code]) throw new Error(`Missing table cell in "${section.id}" for "${code}"`);
            }
          }
        }
      } else if (block.type === "list") {
        for (const item of block.items) {
          for (const code of codes) {
            if (!item[code]) throw new Error(`Missing list item in "${section.id}" for "${code}"`);
          }
        }
      } else if (block.text) {
        for (const code of codes) {
          if (!block.text[code]) {
            throw new Error(`Missing block text in "${section.id}" for "${code}"`);
          }
        }
      }
    }
  }
}

function targetLanguages() {
  if (process.argv.includes("--all") || process.argv.includes("--check")) {
    return languages.map((lang) => lang.code);
  }
  return ["en", "zh"];
}

function writeGuides({ check = false } = {}) {
  const data = readData();
  validateData(data);
  const targets = targetLanguages();
  let changed = false;

  for (const code of targets) {
    const lang = languages.find((item) => item.code === code);
    const output = renderGuide(data, code);
    const outPath = path.join(rootDir, lang.guideFile);
    const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : "";
    if (check) {
      if (existing !== output) {
        console.error(`${lang.guideFile} is out of date. Run npm run generate:all.`);
        changed = true;
      }
    } else {
      fs.writeFileSync(outPath, output, "utf8");
      console.log(`Generated ${lang.guideFile}`);
    }
  }

  if (changed) process.exit(1);
}

writeGuides({ check: process.argv.includes("--check") });
