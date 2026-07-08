# Guide : Skills Codex personnalisés

> Apprenez à créer, adapter et installer des workflows SKILL.md pour OpenAI Codex.

[← Retour à la liste des skills](README_fr.md) · [Liste des skills →](README_fr.md#tous-les-skills)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Current-brightgreen)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Table des matières

- [Qu'est-ce qu'un skill Codex ?](#what-is-a-skill)
- [Structure des fichiers et SKILL.md](#file-structure)
- [Chemins d'installation](#installation-paths)
- [Rédiger les déclencheurs (name et description)](#writing-triggers)
- [Créer un skill from scratch](#create-from-scratch)
- [Adapter un skill existant](#adapt-existing)
- [Liste qualité et sécurité](#quality-security)
- [Tests et débogage](#test-and-debug)
- [Publier et partager](#publish-and-share)
- [Annexe : modèle, FAQ et liens](#appendix)

> Les chemins et commandes de ce guide ont été vérifiés avec openai/skills et les workflows Codex courants ; ils peuvent évoluer avec les outils.

## Qu'est-ce qu'un skill Codex ?

<a id="what-is-a-skill"></a>

Un skill Codex est un dossier contenant SKILL.md plus scripts, références et ressources optionnels. Quand la tâche correspond, Codex lit le frontmatter YAML et le corps.

- À utiliser quand un workflow se répète entre sessions (déploiement, export PDF, contrôle de marque).
- Questions ponctuelles : prompts ; conventions éditeur : règles Cursor.
- Les skills se partagent via Git et s'installent dans $CODEX_HOME/skills ou .codex/skills du projet.

## Structure des fichiers et SKILL.md

<a id="file-structure"></a>

Chaque skill est un dossier. SKILL.md est requis ; scripts/, references/ et assets/ sont optionnels.

- Frontmatter YAML : name (kebab-case) et description (phrase déclencheuse).
- Corps : quand utiliser, étapes, sécurité et liens references/.
- scripts/ optionnel pour helpers shell ou Python invocables.

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

## Chemins d'installation

<a id="installation-paths"></a>

Codex découvre les skills dans des dossiers globaux et locaux au projet. Cursor utilise .cursor/skills pour les agents IDE.

| Emplacement | Portée | Idéal pour |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Global utilisateur | Skills personnels réutilisables |
| .codex/skills (racine projet) | Local au projet | Workflows deploy/conformité du dépôt |
| .cursor/skills (Cursor IDE) | Agent Cursor | Workflows IDE ; adapter nom/déclencheurs pour Codex |

## Rédiger les déclencheurs (name et description)

<a id="writing-triggers"></a>

Codex charge le skill quand la tâche correspond sémantiquement à description. Rédigez des WHEN avec phrases, types de fichiers et workflows.

- Bon : « Déployer en staging quand l'utilisateur demande ship, release ou CI frontend. »
- Mauvais : « Skill pour déploiement et DevOps » (trop vague).
- name en kebab-case, stable et identique au dossier.

## Créer un skill from scratch

<a id="create-from-scratch"></a>

Étapes pour transformer un workflow d'équipe répétitif en skill installé.

**Step 1. Choisir un workflow répétitif**

Exemple : checklist de release Next.js.

**Step 2. Rédiger la phrase déclencheuse**

Lister phrases utilisateur et signaux repo qui activent le skill.

**Step 3. Rédiger les sections SKILL.md**

Inclure quand utiliser, étapes, vérification et limites de sécurité.

**Step 4. Ajouter scripts ou références optionnels**

SKILL.md ~500 lignes ; docs longs dans references/.

**Step 5. Créer le dossier et installer**

Perso : ~/.codex/skills ; repo : .codex/skills.

**Step 6. Tester avec un prompt réaliste**

Demander à Codex le workflow et confirmer le chargement.

**Step 7. Committer et partager**

Versionner dans Git ; publier ou soumettre à awesome_codex_skills.

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

## Adapter un skill existant

<a id="adapt-existing"></a>

Forkez depuis GitHub, OrangeBot, SkillsCat ou SkillsMP puis auditez pour Codex.

**Step 1. Localiser le SKILL.md source**

Ouvrir le dépôt lié et lire frontmatter, scripts et licence.

**Step 2. Audit de sécurité**

Vérifier shell, réseau, clés API, navigateur, écritures.

**Step 3. Réécrire description pour vos déclencheurs**

Garder les étapes upstream et aligner le vocabulaire.

**Step 4. Installer localement et tester régression**

Vérifier le chargement avec prompts positifs/négatifs.

## Liste qualité et sécurité

<a id="quality-security"></a>

> **Avertissement:** Les skills shell/navigateur/API payantes peuvent entraîner perte de données ou frais. Revoyez les scripts avant prod.

- Documenter les clés API ; ne jamais committer de secrets.
- Privilégier lecture seule sauf demande explicite.
- Ajouter des avertissements santé/finance/juridique.
- SKILL.md concis ; lier les longues références.

## Tests et débogage

<a id="test-and-debug"></a>

Vérifiez que Codex charge le skill sur les prompts prévus et l'ignore sinon.

- Test positif : phrases exactes de description.
- Test négatif : tâches non liées sans fuite de skill.
- Si pas de chargement, élargir triggers ou diviser.

## Publier et partager

<a id="publish-and-share"></a>

Partagez via Git, annuaires publics ou soumission à awesome_codex_skills.

- Pousser sur GitHub avec LICENSE, README et chemin SKILL.md.
- Référencer sur OrangeBot, SkillsCat, SkillsMP ou SkillMD.ai.
- Soumettre à awesome_codex_skills via Issue GitHub avec preuves.

## Annexe : modèle, FAQ et liens

<a id="appendix"></a>

Modèle SKILL.md minimal à copier dans un nouveau dossier :

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

- FAQ : ne charge pas ? → Réécrire description avec WHEN.
- FAQ : skills Cursor dans Codex ? → Oui, adapter chemins/triggers.
- Références : github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Généré depuis data/custom-skill-guide.json. Exécutez npm run generate:guide:all
