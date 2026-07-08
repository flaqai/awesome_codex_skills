# Leitfaden: Eigene Codex-Skills

> Lernen Sie, SKILL.md-Workflows für OpenAI Codex zu erstellen, anzupassen und zu installieren.

[← Zurück zur Skill-Liste](README_de.md) · [Skill-Liste →](README_de.md#alle-skills)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Current-brightgreen)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Inhaltsverzeichnis

- [Was ist ein Codex-Skill?](#what-is-a-skill)
- [Dateistruktur und SKILL.md](#file-structure)
- [Installationspfade](#installation-paths)
- [Trigger schreiben (name und description)](#writing-triggers)
- [Skill von Grund auf erstellen](#create-from-scratch)
- [Bestehenden Skill anpassen](#adapt-existing)
- [Qualitäts- und Sicherheits-Checkliste](#quality-security)
- [Testen und Debuggen](#test-and-debug)
- [Veröffentlichen und teilen](#publish-and-share)
- [Anhang: Vorlage, FAQ und Links](#appendix)

> Pfade und Befehle in diesem Leitfaden wurden anhand von openai/skills und gängigen Codex-Workflows geprüft; sie können sich mit der Tool-Entwicklung ändern.

## Was ist ein Codex-Skill?

<a id="what-is-a-skill"></a>

Ein Codex-Skill ist ein Ordner mit SKILL.md sowie optionalen Skripten, Referenzen und Assets. Bei passender Aufgabe liest Codex YAML-Frontmatter und Inhalt.

- Nutzen, wenn ein Workflow über Sitzungen hinweg wiederkehrt (Deploy, PDF-Export, Markenprüfung).
- Einmalige Fragen: Prompts; Editor-weite Konventionen: Cursor-Regeln.
- Skills werden per Git geteilt und in $CODEX_HOME/skills oder Projekt-.codex/skills installiert.

## Dateistruktur und SKILL.md

<a id="file-structure"></a>

Jeder Skill ist ein Verzeichnis. SKILL.md ist Pflicht; scripts/, references/ und assets/ optional.

- YAML-Frontmatter: name (kebab-case) und description (Trigger-Satz).
- Inhalt: Wann nutzen, Workflow-Schritte, Sicherheit, references/-Links.
- Optionale scripts/ für wiederholbare Shell-/Python-Helfer.

```markdown
---
name: my-deploy-skill
description: Deploy the app to staging when the user asks to ship, release, or deploy. Use when working with CI/CD or release workflows.
---

# Deploy to Staging

## When to use
- User mentions deploy, release, ship, or staging
- Working in repos with GitHub Actions or Vercel

## Steps
1. Confirm target environment
2. Run tests
3. Trigger deployment pipeline
```

## Installationspfade

<a id="installation-paths"></a>

Codex findet Skills in benutzerweiten und projektlokalen Verzeichnissen. Cursor nutzt .cursor/skills für IDE-Agenten.

| Speicherort | Geltungsbereich | Am besten für |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Benutzerweit | Persönliche Skills überall |
| .codex/skills (Projektroot) | Projektlokal | Repo-spezifische Deploy-/Compliance-Workflows |
| .cursor/skills (Cursor IDE) | Cursor-Agent | IDE-Workflows; Name/Trigger für Codex anpassen |

## Trigger schreiben (name und description)

<a id="writing-triggers"></a>

Codex lädt den Skill bei semantischer Übereinstimmung mit description. Trigger als WHEN mit Nutzerphrasen, Dateitypen und Workflows.

- Gut: "Bei ship, release oder Frontend-CI nach staging deployen."
- Schlecht: "Skill für Deployment und DevOps." (zu vage).
- name in kebab-case, stabil, gleich Ordnername.

## Skill von Grund auf erstellen

<a id="create-from-scratch"></a>

Schritte, um wiederholbare Team-Workflows in installierte Codex-Skills zu verwandeln.

**Step 1. Einen wiederholbaren Workflow wählen**

Beispiel: Release-Checkliste für Next.js.

**Step 2. Trigger-Satz entwerfen**

Nutzerphrasen und Repo-Signale auflisten.

**Step 3. SKILL.md-Abschnitte schreiben**

Wann nutzen, Schritte, Verifikation, Sicherheitsgrenzen.

**Step 4. Optionale Skripte/Referenzen hinzufügen**

SKILL.md ~500 Zeilen; lange Docs nach references/.

**Step 5. Ordner anlegen und installieren**

Persönlich: ~/.codex/skills; Repo: .codex/skills.

**Step 6. Mit realistischem Prompt testen**

Codex Workflow ausführen lassen und Skill-Laden prüfen.

**Step 7. Committen und teilen**

In Git versionieren; veröffentlichen oder an awesome_codex_skills senden.

```bash
# Create a local skill folder
mkdir -p ~/.codex/skills/my-deploy-skill
cd ~/.codex/skills/my-deploy-skill

# Write SKILL.md (edit with your editor)
cat > SKILL.md << 'EOF'
---
name: my-deploy-skill
description: Deploy the app when the user asks to ship or release.
---
# My Deploy Skill
...
EOF

# Option A: copy into $CODEX_HOME/skills (default ~/.codex/skills)
cp -r . "$CODEX_HOME/skills/my-deploy-skill"

# Option B: install from a GitHub repo (when available)
npx skills add owner/repo/my-deploy-skill

# Option C: project-scoped skill
mkdir -p .codex/skills/my-deploy-skill
cp SKILL.md .codex/skills/my-deploy-skill/
```

## Bestehenden Skill anpassen

<a id="adapt-existing"></a>

Forke von GitHub, OrangeBot, SkillsCat oder SkillsMP und für Codex auditieren/anpassen.

**Step 1. Quell-SKILL.md finden**

Verlinktes Repo öffnen: Frontmatter, Skripte, Lizenz.

**Step 2. Sicherheitsaudit**

Shell, Netzwerk, API-Keys, Browser, Schreibzugriffe prüfen.

**Step 3. description für eigene Trigger umschreiben**

Upstream-Schritte behalten, Nutzerphrasen anpassen.

**Step 4. Lokal installieren und Regressionstest**

Laden bei positiven/negativen Prompts prüfen.

## Qualitäts- und Sicherheits-Checkliste

<a id="quality-security"></a>

> **Warnung:** Skills mit Shell/Browser/kostenpflichtigen APIs können Datenverlust/Kosten verursachen. Skripte vor Prod prüfen.

- API-Keys dokumentieren; keine Secrets committen.
- Read-only bevorzugen ohne explizite Schreibbitte.
- Disclaimer für Gesundheit/Finanzen/Recht.
- SKILL.md fokussiert; lange Referenzen verlinken.

## Testen und Debuggen

<a id="test-and-debug"></a>

Prüfen Sie, ob Codex den Skill bei passenden Prompts lädt und sonst ignoriert.

- Positivtest: Phrasen aus description wörtlich.
- Negativtest: unrelated tasks ohne Skill-Bleed.
- Bei keinem Laden Trigger erweitern oder splitten.

## Veröffentlichen und teilen

<a id="publish-and-share"></a>

Teilen via Git, öffentliche Verzeichnisse oder awesome_codex_skills.

- Auf GitHub mit LICENSE, README, SKILL.md-Pfad.
- Bei Eignung auf OrangeBot, SkillsCat, SkillsMP, SkillMD.ai listen.
- Über GitHub Issue an awesome_codex_skills mit Popularitätsnachweis.

## Anhang: Vorlage, FAQ und Links

<a id="appendix"></a>

Minimale SKILL.md-Vorlage zum Kopieren in einen neuen Ordner:

```markdown
---
name: example-skill
description: >
  Short trigger sentence describing WHEN Codex should load this skill.
  Mention user phrases, file types, and workflows explicitly.
---

# Example Skill

## Overview
Explain what this skill helps Codex do and what it should not do.

## When to use
- Trigger phrase or scenario 1
- Trigger phrase or scenario 2

## Workflow
1. Step one with concrete commands or checks
2. Step two with expected outputs
3. Step three with rollback or verification

## References
- Link to internal docs or `references/guide.md` in this folder

## Safety
- Never expose secrets in logs
- Ask before destructive shell commands
```

- FAQ: Lädt nicht? → description mit WHEN neu schreiben.
- FAQ: Cursor-Skills in Codex? → Ja, Pfade/Trigger anpassen.
- Offizielle Referenzen: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Erzeugt aus data/custom-skill-guide.json. Führen Sie npm run generate:guide:all aus
