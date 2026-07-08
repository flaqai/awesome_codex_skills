# Руководство: пользовательские навыки Codex

> Узнайте, как создавать, адаптировать и устанавливать рабочие процессы SKILL.md для OpenAI Codex.

[← Назад к списку навыков](README_ru.md) · [Список навыков →](README_ru.md#все-skills)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Current-brightgreen)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Содержание

- [Что такое навык Codex?](#what-is-a-skill)
- [Структура файлов и SKILL.md](#file-structure)
- [Пути установки](#installation-paths)
- [Написание триггеров (name и description)](#writing-triggers)
- [Создать навык с нуля](#create-from-scratch)
- [Адаптировать существующий навык](#adapt-existing)
- [Чеклист качества и безопасности](#quality-security)
- [Тестирование и отладка](#test-and-debug)
- [Публикация и распространение](#publish-and-share)
- [Приложение: шаблон, FAQ и ссылки](#appendix)

> Пути и команды в этом руководстве проверены по openai/skills и типичным рабочим процессам Codex; они могут меняться по мере развития инструментов.

## Что такое навык Codex?

<a id="what-is-a-skill"></a>

Навык Codex — папка с SKILL.md и необязательными скриптами, справочниками и ресурсами. При совпадении задачи Codex читает YAML frontmatter и текст.

- Используйте, когда процесс повторяется между сессиями (деплой, экспорт PDF, проверка бренда).
- Разовые вопросы — промпты; соглашения редактора — правила Cursor.
- Навыки распространяются через Git и устанавливаются в $CODEX_HOME/skills или .codex/skills проекта.

## Структура файлов и SKILL.md

<a id="file-structure"></a>

Каждый навык — каталог. SKILL.md обязателен; scripts/, references/ и assets/ опциональны.

- YAML frontmatter: name (kebab-case) и description (триггерная фраза).
- Тело: когда использовать, шаги, безопасность, ссылки на references/.
- Опциональный scripts/ для shell/Python, которые вызывает Codex.

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

## Пути установки

<a id="installation-paths"></a>

Codex находит навыки в глобальных и локальных каталогах проекта. Cursor использует .cursor/skills для IDE-агентов.

| Расположение | Область | Лучше всего для |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Глобально для пользователя | Личные навыки для всех проектов |
| .codex/skills (корень проекта) | Локально в проекте | Деплой и compliance для конкретного репо |
| .cursor/skills (Cursor IDE) | Агент Cursor | IDE-процессы; при переносе в Codex настройте имя/триггеры |

## Написание триггеров (name и description)

<a id="writing-triggers"></a>

Codex загружает навык при семантическом совпадении с description. Пишите триггеры как WHEN с фразами, типами файлов и процессами.

- Хорошо: «Деплой в staging при запросе ship, release или CI фронтенда.»
- Плохо: «Навык для деплоя и DevOps.» (слишком расплывчато).
- name в kebab-case, стабильный, совпадает с папкой.

## Создать навык с нуля

<a id="create-from-scratch"></a>

Шаги превращения повторяемого командного процесса в установленный навык Codex.

**Step 1. Выберите повторяемый процесс**

Пример: чеклист релиза Next.js.

**Step 2. Напишите триггерную фразу**

Перечислите фразы пользователя и сигналы репо.

**Step 3. Напишите разделы SKILL.md**

Включите когда использовать, шаги, проверку и границы безопасности.

**Step 4. Добавьте скрипты или справочники**

SKILL.md ~500 строк; длинные docs в references/.

**Step 5. Создайте папку и установите**

Личные: ~/.codex/skills; репо: .codex/skills.

**Step 6. Проверьте реалистичным промптом**

Попросите Codex выполнить процесс и проверьте загрузку.

**Step 7. Закоммитьте и поделитесь**

Версионируйте в Git; опубликуйте или отправьте в awesome_codex_skills.

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

## Адаптировать существующий навык

<a id="adapt-existing"></a>

Форкните с GitHub, OrangeBot, SkillsCat или SkillsMP и адаптируйте под Codex.

**Step 1. Найдите исходный SKILL.md**

Откройте репозиторий: frontmatter, scripts, license.

**Step 2. Проверка безопасности**

Проверьте shell, сеть, API keys, браузер, запись файлов.

**Step 3. Перепишите description под ваши триггеры**

Сохраните шаги upstream, подстройте фразы команды.

**Step 4. Установите локально и регрессионный тест**

Проверьте загрузку на позитивных/негативных промптах.

## Чеклист качества и безопасности

<a id="quality-security"></a>

> **Предупреждение:** Навыки с shell, браузером или платными API могут привести к потере данных или счетам. Проверьте скрипты.

- Документируйте API keys; не коммитьте секреты.
- Предпочитайте read-only без явной просьбы писать.
- Дисклеймеры для медицины, финансов, права.
- SKILL.md компактный; длинные refs — ссылками.

## Тестирование и отладка

<a id="test-and-debug"></a>

Проверьте, что Codex загружает навык на нужных промптах и игнорирует иначе.

- Позитивный тест: фразы из description дословно.
- Негативный test: несвязанные задачи без bleed.
- Если не загружается — расширьте триггеры или разделите.

## Публикация и распространение

<a id="publish-and-share"></a>

Делитесь через Git, каталоги или отправку в awesome_codex_skills.

- Push на GitHub с LICENSE, README, путём SKILL.md.
- Разместите на OrangeBot, SkillsCat, SkillsMP, SkillMD.ai.
- Отправьте в awesome_codex_skills через Issue с доказательствами популярности.

## Приложение: шаблон, FAQ и ссылки

<a id="appendix"></a>

Минимальный шаблон SKILL.md для новой папки:

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

- FAQ: не загружается? → Перепишите description с WHEN.
- FAQ: Cursor skills в Codex? → Да, адаптируйте paths/triggers.
- Ссылки: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Сгенерировано из data/custom-skill-guide.json. Запустите npm run generate:guide:all
