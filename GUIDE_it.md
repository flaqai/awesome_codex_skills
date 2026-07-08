# Guida: Skill Codex personalizzate

> Impara a creare, adattare e installare workflow SKILL.md per OpenAI Codex.

[← Torna all'elenco skill](README_it.md) · [Elenco skill →](README_it.md#tutti-gli-skill)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-Current-brightgreen)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Indice

- [Cos'è una skill Codex?](#what-is-a-skill)
- [Struttura file e SKILL.md](#file-structure)
- [Percorsi di installazione](#installation-paths)
- [Scrivere trigger (name e description)](#writing-triggers)
- [Creare una skill da zero](#create-from-scratch)
- [Adattare una skill esistente](#adapt-existing)
- [Checklist qualità e sicurezza](#quality-security)
- [Test e debug](#test-and-debug)
- [Pubblicare e condividere](#publish-and-share)
- [Appendice: template, FAQ e link](#appendix)

> Percorsi e comandi in questa guida sono stati verificati con openai/skills e workflow Codex comuni; possono cambiare con l'evoluzione degli strumenti.

## Cos'è una skill Codex?

<a id="what-is-a-skill"></a>

Una skill Codex è una cartella con SKILL.md e script, riferimenti e asset opzionali. Quando l'attività corrisponde, Codex legge frontmatter YAML e corpo.

- Usala quando un workflow si ripete tra sessioni (deploy, export PDF, controllo brand).
- Domande una tantum: prompt; convenzioni editor: regole Cursor.
- Le skill si condividono via Git e si installano in $CODEX_HOME/skills o .codex/skills di progetto.

## Struttura file e SKILL.md

<a id="file-structure"></a>

Ogni skill è una directory. SKILL.md è obbligatorio; scripts/, references/ e assets/ opzionali.

- Frontmatter YAML: name (kebab-case) e description (frase trigger).
- Corpo: quando usare, passi, sicurezza e link a references/.
- scripts/ opzionale per helper shell/Python invocabili.

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

## Percorsi di installazione

<a id="installation-paths"></a>

Codex scopre skill da directory globali e locali di progetto. Cursor usa .cursor/skills per agent IDE.

| Percorso | Ambito | Ideale per |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Globale utente | Skill personali riutilizzabili |
| .codex/skills (root progetto) | Locale progetto | Workflow deploy/compliance del repo |
| .cursor/skills (Cursor IDE) | Agent Cursor | Workflow IDE; adatta nome/trigger per Codex |

## Scrivere trigger (name e description)

<a id="writing-triggers"></a>

Codex carica la skill quando l'attività corrisponde semanticamente a description. Scrivi trigger WHEN con frasi, tipi file e workflow.

- Buono: "Deploy su staging quando chiedono ship, release o CI frontend."
- Cattivo: "Skill per deploy e DevOps." (troppo vago).
- name in kebab-case, stabile, uguale alla cartella.

## Creare una skill da zero

<a id="create-from-scratch"></a>

Passi per trasformare un workflow di team ripetibile in skill Codex installata.

**Step 1. Scegli un workflow ripetibile**

Esempio: checklist release Next.js.

**Step 2. Bozza la frase trigger**

Elenca frasi utente e segnali repo che attivano la skill.

**Step 3. Scrivi sezioni SKILL.md**

Includi quando usare, passi, verifica e limiti di sicurezza.

**Step 4. Aggiungi script o riferimenti opzionali**

SKILL.md ~500 righe; documenti lunghi in references/.

**Step 5. Crea cartella e installa**

Personale: ~/.codex/skills; repo: .codex/skills.

**Step 6. Testa con prompt realistico**

Chiedi a Codex il workflow e verifica il caricamento.

**Step 7. Commit e condividi**

Versiona in Git; pubblica o invia a awesome_codex_skills.

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

## Adattare una skill esistente

<a id="adapt-existing"></a>

Fai fork da GitHub, OrangeBot, SkillsCat o SkillsMP e adatta per Codex.

**Step 1. Trova SKILL.md sorgente**

Apri repo collegato: frontmatter, script, licenza.

**Step 2. Audit di sicurezza**

Controlla shell, rete, API key, browser, scritture.

**Step 3. Riscrivi description per i tuoi trigger**

Mantieni passi upstream, allinea frasi del team.

**Step 4. Installa localmente e test di regressione**

Verifica caricamento con prompt positivi/negativi.

## Checklist qualità e sicurezza

<a id="quality-security"></a>

> **Avviso:** Skill con shell, browser o API a pagamento possono causare perdite o costi. Rivedi script prima della prod.

- Documenta API key; non committare segreti.
- Preferisci read-only salvo richiesta esplicita.
- Disclaimer per sanità/finanza/legale.
- SKILL.md conciso; linka riferimenti lunghi.

## Test e debug

<a id="test-and-debug"></a>

Verifica che Codex carichi la skill sui prompt previsti e la ignori altrimenti.

- Test positivo: frasi esatte da description.
- Test negativo: task non correlati senza bleed.
- Se non carica, amplia trigger o dividi skill.

## Pubblicare e condividere

<a id="publish-and-share"></a>

Condividi via Git, directory pubbliche o invio a awesome_codex_skills.

- Push su GitHub con LICENSE, README, path SKILL.md.
- Elenca su OrangeBot, SkillsCat, SkillsMP, SkillMD.ai se idoneo.
- Invia a awesome_codex_skills via Issue GitHub con prove.

## Appendice: template, FAQ e link

<a id="appendix"></a>

Template SKILL.md minimale da copiare in una nuova cartella:

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

- FAQ: non carica? → Riscrivi description con WHEN.
- FAQ: skill Cursor in Codex? → Sì, adatta path/trigger.
- Riferimenti: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Generato da data/custom-skill-guide.json. Esegui npm run generate:guide:all
