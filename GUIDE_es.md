# Guía: Skills personalizados de Codex

> Aprende a crear, adaptar e instalar flujos de trabajo SKILL.md para OpenAI Codex.

[← Volver a la lista de skills](README_es.md) · [Lista de skills →](README_es.md#todos-los-skills)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Current-brightgreen)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Tabla de contenidos

- [¿Qué es un skill de Codex?](#what-is-a-skill)
- [Estructura de archivos y SKILL.md](#file-structure)
- [Rutas de instalación](#installation-paths)
- [Escribir disparadores (name y description)](#writing-triggers)
- [Crear un skill desde cero](#create-from-scratch)
- [Adaptar un skill existente](#adapt-existing)
- [Lista de calidad y seguridad](#quality-security)
- [Pruebas y depuración](#test-and-debug)
- [Publicar y compartir](#publish-and-share)
- [Apéndice: plantilla, FAQ y enlaces](#appendix)

> Las rutas y comandos de esta guía se verificaron con openai/skills y flujos comunes de Codex; pueden cambiar a medida que evolucionen las herramientas.

## ¿Qué es un skill de Codex?

<a id="what-is-a-skill"></a>

Un skill de Codex es una carpeta con SKILL.md y scripts, referencias y recursos opcionales. Cuando la tarea coincide, Codex lee el frontmatter YAML y el cuerpo para instrucciones reutilizables.

- Úsalo cuando un flujo se repite entre sesiones (deploy, exportar PDF, revisión de marca).
- Preguntas puntuales: prompts; convenciones del editor: reglas de Cursor.
- Los skills se comparten por Git e instalan en $CODEX_HOME/skills o .codex/skills del proyecto.

## Estructura de archivos y SKILL.md

<a id="file-structure"></a>

Cada skill es un directorio. SKILL.md es obligatorio; scripts/, references/ y assets/ son opcionales.

- Frontmatter YAML: name (kebab-case) y description (frase disparadora).
- Cuerpo: cuándo usar, pasos, seguridad y enlaces a references/.
- scripts/ opcional para helpers shell o Python invocables.

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

## Rutas de instalación

<a id="installation-paths"></a>

Codex descubre skills en directorios globales y locales del proyecto. Cursor usa .cursor/skills para agentes IDE.

| Ubicación | Alcance | Ideal para |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Global del usuario | Skills personales reutilizables |
| .codex/skills (raíz del proyecto) | Local del proyecto | Flujos de deploy o cumplimiento del repo |
| .cursor/skills (Cursor IDE) | Agente Cursor | Flujos IDE; adapta nombre/disparadores al portar a Codex |

## Escribir disparadores (name y description)

<a id="writing-triggers"></a>

Codex carga el skill cuando la tarea coincide semánticamente con description. Escribe disparadores como WHEN con frases, tipos de archivo y flujos.

- Bueno: "Despliega a staging cuando pidan ship, release o CI frontend."
- Malo: "Skill para deploy y DevOps." (demasiado vago).
- name en kebab-case, estable y igual al nombre de carpeta.

## Crear un skill desde cero

<a id="create-from-scratch"></a>

Pasos para convertir un flujo repetible del equipo en un skill instalado.

**Step 1. Elige un flujo repetible**

Ejemplo: checklist de release para Next.js.

**Step 2. Redacta la frase disparadora**

Lista frases de usuario y señales del repo que activan el skill.

**Step 3. Escribe secciones de SKILL.md**

Incluye cuándo usar, pasos, verificación y límites de seguridad.

**Step 4. Añade scripts o referencias opcionales**

SKILL.md ~500 líneas; docs largos en references/.

**Step 5. Crea carpeta e instala**

Personal: ~/.codex/skills; repo: .codex/skills.

**Step 6. Prueba con un prompt realista**

Pide a Codex el flujo y confirma que carga el skill.

**Step 7. Commit y comparte**

Versiona en Git; publica o envía a awesome_codex_skills.

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

## Adaptar un skill existente

<a id="adapt-existing"></a>

Haz fork desde GitHub, OrangeBot, SkillsCat o SkillsMP y audita para tu entorno Codex.

**Step 1. Localiza el SKILL.md fuente**

Abre el repo enlazado y revisa frontmatter, scripts y licencia.

**Step 2. Auditoría de seguridad**

Revisa shell, red, API keys, navegador y escrituras.

**Step 3. Reescribe description para tus disparadores**

Conserva pasos upstream y alinea frases del equipo.

**Step 4. Instala localmente y prueba regresión**

Verifica carga con prompts positivos y negativos.

## Lista de calidad y seguridad

<a id="quality-security"></a>

> **Advertencia:** Skills con shell, navegador o APIs de pago pueden causar pérdida de datos o cargos. Revisa scripts antes de producción.

- Documenta API keys; nunca subas secretos.
- Prioriza solo lectura salvo petición explícita.
- Añade descargos para salud, finanzas y legal.
- SKILL.md conciso; enlaza referencias largas.

## Pruebas y depuración

<a id="test-and-debug"></a>

Verifica que Codex carga el skill en prompts previstos y lo ignora en otros casos.

- Prueba positiva: frases literales de description.
- Prueba negativa: tareas no relacionadas sin bleed.
- Si no carga, amplía disparadores o divide skills.

## Publicar y compartir

<a id="publish-and-share"></a>

Comparte vía Git, directorios públicos o enviando a awesome_codex_skills.

- Sube a GitHub con LICENSE, README y ruta SKILL.md.
- Publica en OrangeBot, SkillsCat, SkillsMP o SkillMD.ai si aplica.
- Envía a awesome_codex_skills vía Issue con evidencia de popularidad.

## Apéndice: plantilla, FAQ y enlaces

<a id="appendix"></a>

Plantilla mínima de SKILL.md para copiar en una carpeta nueva:

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

- FAQ: ¿No carga? → Reescribe description con WHEN.
- FAQ: ¿Skills de Cursor en Codex? → Sí, adapta rutas/disparadores.
- Referencias: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Generado desde data/custom-skill-guide.json. Ejecuta npm run generate:guide:all
