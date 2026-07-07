# Contributing to Awesome Codex Skills

Thank you for your interest in contributing! This guide explains how to submit a skill and what we look for.

## How to Submit

We accept contributions via GitHub Issues only, to ensure consistent formatting and quality control.

1. Click [**Submit a Skill**](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml)
2. Fill in the structured form
3. Submit your issue
4. We review within 48 hours
5. If approved, we update `data/skills.json` and regenerate READMEs

## Required Information

| Field | Description |
|---|---|
| Skill Name | Short, descriptive name (max 60 chars) |
| URL | Direct link to the skill page or repo |
| Category | One of the 8 predefined categories |
| Source Platform | Where the skill is hosted (e.g., OrangeBot, GitHub) |
| Description | One sentence explaining what the skill does |
| Tags | 2–3 keywords |
| Popularity Evidence | Install count, stars, forks, or official status |

## Quality Standards

We accept skills that are:

- Reachable (link returns 200, not a legacy error page)
- Useful for Codex or adaptable into a Codex workflow
- Clearly described with a specific use case
- Backed by usage evidence (installs, stars, official endorsement)

We reject:

- Broken or unreachable links
- Spam or purely promotional content
- Duplicates of existing entries
- Skills with no evidence of usage or quality

## Risk Labeling

If a skill involves any of the following, it must be noted:

- External API key requirements
- Browser control or command execution
- Healthcare, finance, or legal domains
- Cost-incurring services

## JSON Format

Each skill in `data/skills.json` follows this structure:

```json
{
  "name": "Skill Name",
  "url": "https://...",
  "source": "Platform Name",
  "category": "category-id",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "popularity": {
    "en": "English popularity description",
    "zh": "中文热度说明"
  },
  "description": {
    "en": "English description",
    "zh": "中文描述"
  },
  "notes": {
    "en": "Optional notes",
    "zh": "可选备注"
  }
}
```

Maintainers may mark selected skills as `featured` during review.

## Local Development

```bash
# Verify README is in sync with data
npm run check:readme

# Regenerate READMEs after editing skills.json
npm run generate:readme
```

Requires Node.js 18+. No external dependencies to install.

## Questions?

Open an issue or start a discussion — we're happy to help.
