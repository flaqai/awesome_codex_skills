import { readmeAllSectionTitle } from "./readme-section-anchors.mjs";

export const projectTimeZone = "Asia/Shanghai";

export function currentDateInTimeZone(timeZone = projectTimeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;
  return `${year}-${month}-${day}`;
}

export const languages = [
  { code: "en", file: "README.md", guideFile: "GUIDE.md", label: "English", current: "Current" },
  { code: "zh", file: "README_zh.md", guideFile: "GUIDE_zh.md", label: "简体中文", current: "当前" },
  { code: "tw", file: "README_tw.md", guideFile: "GUIDE_tw.md", label: "繁體中文", current: "目前" },
  { code: "ja", file: "README_ja.md", guideFile: "GUIDE_ja.md", label: "日本語", current: "Current" },
  { code: "ko", file: "README_ko.md", guideFile: "GUIDE_ko.md", label: "한국어", current: "Current" },
  { code: "th", file: "README_th.md", guideFile: "GUIDE_th.md", label: "ไทย", current: "Current" },
  { code: "vi", file: "README_vi.md", guideFile: "GUIDE_vi.md", label: "Tiếng Việt", current: "Current" },
  { code: "id", file: "README_id.md", guideFile: "GUIDE_id.md", label: "Bahasa Indonesia", current: "Current" },
  { code: "es", file: "README_es.md", guideFile: "GUIDE_es.md", label: "Español", current: "Current" },
  { code: "fr", file: "README_fr.md", guideFile: "GUIDE_fr.md", label: "Français", current: "Current" },
  { code: "de", file: "README_de.md", guideFile: "GUIDE_de.md", label: "Deutsch", current: "Current" },
  { code: "it", file: "README_it.md", guideFile: "GUIDE_it.md", label: "Italiano", current: "Current" },
  { code: "pt", file: "README_pt.md", guideFile: "GUIDE_pt.md", label: "Português", current: "Current" },
  { code: "ru", file: "README_ru.md", guideFile: "GUIDE_ru.md", label: "Русский", current: "Current" },
  { code: "ar", file: "README_ar.md", guideFile: "GUIDE_ar.md", label: "العربية", current: "Current" }
];

export function localized(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.en ?? value.zh ?? "";
}

export function anchor(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}\s-]/gu, "")
    .trim()
    .replace(/ /g, "-");
}

export function languageSwitcher(activeCode, mode = "readme") {
  return languages
    .map((lang) => {
      const label = encodeURIComponent(lang.label).replace(/-/g, "--");
      const badgeText = lang.code === activeCode ? lang.current : "View";
      const color = lang.code === activeCode ? "brightgreen" : "lightgrey";
      const target = mode === "guide" ? lang.guideFile : lang.file;
      return `[![${lang.label}](https://img.shields.io/badge/${label}-${encodeURIComponent(badgeText)}-${color})](${target})`;
    })
    .join(" ");
}

export function crossLinks(lang, t) {
  const readme = lang.file;
  const allSection = readmeAllSectionTitle(lang.code);
  return `[← ${t.backToReadme}](${readme}) · [${t.skillList} →](${readme}#${anchor(allSection)})`;
}
