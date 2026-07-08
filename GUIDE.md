# Guide: Custom Codex Skills

> Learn how to create, adapt, and install SKILL.md workflows for OpenAI Codex.

[← Back to Skill List](README.md) · [Skill List →](README.md#all-skills)

---

[![English](https://img.shields.io/badge/English-Current-brightgreen)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Table of Contents

- [What is a Codex Skill?](#what-is-a-skill)
- [File Structure and SKILL.md](#file-structure)
- [Installation Paths](#installation-paths)
- [Writing Triggers (name and description)](#writing-triggers)
- [Create a Skill from Scratch](#create-from-scratch)
- [Adapt an Existing Skill](#adapt-existing)
- [Quality and Security Checklist](#quality-security)
- [Test and Debug](#test-and-debug)
- [Publish and Share](#publish-and-share)
- [Appendix: Template, FAQ, and Links](#appendix)

> Paths and commands in this guide were verified against openai/skills and common Codex workflows. They may change as tooling evolves.

## What is a Codex Skill?

<a id="what-is-a-skill"></a>

A Codex skill is a folder containing SKILL.md plus optional scripts, references, and assets. Codex reads the YAML frontmatter and body when a task matches the skill's description, giving the agent durable, reusable instructions instead of one-off prompts.

- Use a skill when a workflow repeats across sessions (deploy, PDF export, brand checks).
- Use prompts for one-off questions; use Cursor rules for editor-wide conventions.
- Skills travel with teams via Git and install into $CODEX_HOME/skills or project .codex/skills.

## File Structure and SKILL.md

<a id="file-structure"></a>

Every skill is a directory. SKILL.md is required; scripts/, references/, and assets/ are optional companions that keep the main file focused.

- YAML frontmatter: name (kebab-case) and description (trigger sentence for Codex).
- Body: headings for when to use, workflow steps, safety notes, and links to references/.
- Optional scripts/ for repeatable shell or Python helpers Codex can invoke.

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

## Installation Paths

<a id="installation-paths"></a>

Codex discovers skills from user-global and project-local directories. Cursor uses a parallel .cursor/skills path for IDE agents.

| Location | Scope | Best for |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | User-global | Personal skills you reuse everywhere |
| .codex/skills (project root) | Project-local | Repo-specific deploy or compliance workflows |
| .cursor/skills (Cursor IDE) | Cursor agent | IDE workflows; adapt naming/triggers for Codex if porting |

## Writing Triggers (name and description)

<a id="writing-triggers"></a>

Codex loads a skill when the user task semantically matches the description field. Write triggers as WHEN clauses with user phrases, file types, and workflows—not feature lists.

- Good: "Deploy to staging when the user asks to ship, release, or run CI for frontend apps."
- Bad: "A skill for deployment and DevOps tasks." (too vague—Codex may load it everywhere or nowhere).
- name must be kebab-case, stable, and match the folder name (my-deploy-skill).

## Create a Skill from Scratch

<a id="create-from-scratch"></a>

Follow these steps to turn a repeatable team workflow into an installed Codex skill.

**Step 1. Pick one repeatable workflow**

Example: release checklist for a Next.js app.

**Step 2. Draft the trigger sentence**

List exact user phrases and repo signals that should activate the skill.

**Step 3. Write SKILL.md sections**

Include when to use, ordered steps, verification, and safety boundaries.

**Step 4. Add optional scripts or references**

Keep SKILL.md under ~500 lines; move long docs to references/.

**Step 5. Create the folder and install**

Use ~/.codex/skills for personal skills or .codex/skills for repo-specific ones.

**Step 6. Test with a realistic prompt**

Ask Codex to perform the workflow and confirm it loads your skill.

**Step 7. Commit and share**

Version the skill in Git; publish or submit to awesome_codex_skills.

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

## Adapt an Existing Skill

<a id="adapt-existing"></a>

Fork skills from GitHub (openai/skills), OrangeBot, SkillsCat, or SkillsMP, then audit and adapt them for your Codex environment.

**Step 1. Locate the source SKILL.md**

Open the linked repo path and read frontmatter, scripts, and license.

**Step 2. Run a security audit**

Check for shell commands, network calls, API keys, browser control, and file writes.

**Step 3. Rewrite the description for your triggers**

Keep upstream workflow steps but align user phrases with your team vocabulary.

**Step 4. Install locally and regression-test**

Verify the skill loads on positive and negative prompts.

## Quality and Security Checklist

<a id="quality-security"></a>

> **Warning:** Skills that run shell commands, control browsers, or call paid APIs can cause data loss or unexpected charges. Review every script before preinstalling in production.

- Document required API keys and never commit secrets.
- Prefer read-only operations unless the user explicitly requests writes.
- Add disclaimers for healthcare, finance, and legal advice domains.
- Keep SKILL.md focused; link long references instead of inlining.

## Test and Debug

<a id="test-and-debug"></a>

Validate that Codex loads your skill on intended prompts and ignores it otherwise.

- Positive test: use phrases from your description verbatim.
- Negative test: ask unrelated tasks and confirm no skill bleed.
- If Codex never loads the skill, broaden triggers or split into smaller skills.

## Publish and Share

<a id="publish-and-share"></a>

Share skills via Git, public directories, or by submitting to the awesome_codex_skills list.

- Push to GitHub with LICENSE, README, and reachable SKILL.md path.
- List on OrangeBot, SkillsCat, SkillsMP, or SkillMD.ai when eligible.
- Submit to awesome_codex_skills via the GitHub Issue template with popularity evidence.

## Appendix: Template, FAQ, and Links

<a id="appendix"></a>

Minimal SKILL.md template you can copy into a new skill folder:

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

- FAQ: Why is my skill not loading? → Rewrite description with explicit WHEN triggers.
- FAQ: Can I use Cursor skills in Codex? → Yes, adapt paths and triggers; test in Codex.
- Official references: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs skill.

---

> Generated from data/custom-skill-guide.json. Run npm run generate:guide:all
