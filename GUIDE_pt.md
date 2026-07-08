# Guia: Skills Codex personalizados

> Aprenda a criar, adaptar e instalar fluxos de trabalho SKILL.md para OpenAI Codex.

[← Voltar à lista de skills](README_pt.md) · [Lista de skills →](README_pt.md#todos-os-skills)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Current-brightgreen)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Índice

- [O que é um skill Codex?](#what-is-a-skill)
- [Estrutura de arquivos e SKILL.md](#file-structure)
- [Caminhos de instalação](#installation-paths)
- [Escrever gatilhos (name e description)](#writing-triggers)
- [Criar um skill do zero](#create-from-scratch)
- [Adaptar um skill existente](#adapt-existing)
- [Checklist de qualidade e segurança](#quality-security)
- [Teste e depuração](#test-and-debug)
- [Publicar e compartilhar](#publish-and-share)
- [Apêndice: modelo, FAQ e links](#appendix)

> Caminhos e comandos deste guia foram verificados com openai/skills e fluxos comuns do Codex; podem mudar conforme as ferramentas evoluem.

## O que é um skill Codex?

<a id="what-is-a-skill"></a>

Um skill Codex é uma pasta com SKILL.md e scripts, referências e recursos opcionais. Quando a tarefa corresponde, o Codex lê frontmatter YAML e corpo.

- Use quando um fluxo se repete entre sessões (deploy, exportar PDF, verificação de marca).
- Perguntas pontuais: prompts; convenções do editor: regras Cursor.
- Skills compartilhados via Git e instalados em $CODEX_HOME/skills ou .codex/skills do projeto.

## Estrutura de arquivos e SKILL.md

<a id="file-structure"></a>

Cada skill é um diretório. SKILL.md é obrigatório; scripts/, references/ e assets/ opcionais.

- Frontmatter YAML: name (kebab-case) e description (frase gatilho).
- Corpo: quando usar, passos, segurança e links para references/.
- scripts/ opcional para helpers shell ou Python.

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

## Caminhos de instalação

<a id="installation-paths"></a>

O Codex descobre skills em diretórios globais e locais do projeto. O Cursor usa .cursor/skills para agentes IDE.

| Local | Escopo | Melhor para |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Global do usuário | Skills pessoais reutilizáveis |
| .codex/skills (raiz do projeto) | Local do projeto | Fluxos de deploy/compliance do repositório |
| .cursor/skills (Cursor IDE) | Agente Cursor | Fluxos IDE; adapte nome/gatilhos ao portar para Codex |

## Escrever gatilhos (name e description)

<a id="writing-triggers"></a>

O Codex carrega o skill quando a tarefa corresponde semanticamente a description. Escreva gatilhos WHEN com frases, tipos de arquivo e fluxos.

- Bom: "Faça deploy em staging quando pedirem ship, release ou CI frontend."
- Ruim: "Skill para deploy e DevOps." (vago demais).
- name em kebab-case, estável, igual ao nome da pasta.

## Criar um skill do zero

<a id="create-from-scratch"></a>

Passos para transformar fluxo repetível da equipe em skill Codex instalado.

**Step 1. Escolha um fluxo repetível**

Exemplo: checklist de release Next.js.

**Step 2. Rascunhe a frase gatilho**

Liste frases do usuário e sinais do repo.

**Step 3. Escreva seções do SKILL.md**

Inclua quando usar, passos, verificação e limites.

**Step 4. Adicione scripts ou referências**

SKILL.md ~500 linhas; docs longos em references/.

**Step 5. Crie pasta e instale**

Pessoal: ~/.codex/skills; repo: .codex/skills.

**Step 6. Teste com prompt realista**

Peça ao Codex o fluxo e confirme o carregamento.

**Step 7. Commit e compartilhe**

Versione no Git; publique ou envie ao awesome_codex_skills.

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

## Adaptar um skill existente

<a id="adapt-existing"></a>

Faça fork do GitHub, OrangeBot, SkillsCat ou SkillsMP e adapte ao Codex.

**Step 1. Localize o SKILL.md fonte**

Abra o repositório e leia frontmatter, scripts e licença.

**Step 2. Auditoria de segurança**

Verifique shell, rede, API keys, browser, gravações.

**Step 3. Reescreva description para seus gatilhos**

Mantenha passos upstream, alinhe frases da equipe.

**Step 4. Instale localmente e teste regressão**

Verifique carregamento com prompts positivos/negativos.

## Checklist de qualidade e segurança

<a id="quality-security"></a>

> **Aviso:** Skills com shell, browser ou APIs pagas podem causar perda de dados ou custos. Revise scripts antes da produção.

- Documente API keys; nunca commite segredos.
- Priorize somente leitura salvo pedido explícito.
- Adicione avisos para saúde, finanças e jurídico.
- SKILL.md focado; linke referências longas.

## Teste e depuração

<a id="test-and-debug"></a>

Verifique se o Codex carrega o skill nos prompts corretos e ignora nos demais.

- Teste positivo: frases literais de description.
- Teste negativo: tarefas não relacionadas sem bleed.
- Se não carregar, amplie gatilhos ou divida.

## Publicar e compartilhar

<a id="publish-and-share"></a>

Compartilhe via Git, diretórios públicos ou envio ao awesome_codex_skills.

- Push no GitHub com LICENSE, README, path SKILL.md.
- Liste em OrangeBot, SkillsCat, SkillsMP, SkillMD.ai se elegível.
- Envie ao awesome_codex_skills via Issue com evidências.

## Apêndice: modelo, FAQ e links

<a id="appendix"></a>

Modelo mínimo de SKILL.md para copiar em pasta nova:

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

- FAQ: não carrega? → Reescreva description com WHEN.
- FAQ: skills Cursor no Codex? → Sim, adapte paths/gatilhos.
- Referências: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Gerado a partir de data/custom-skill-guide.json. Execute npm run generate:guide:all
