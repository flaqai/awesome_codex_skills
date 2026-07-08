# 指南：自定义 Codex 技能

> 学习如何为 OpenAI Codex 创建、改编并安装 SKILL.md 工作流。

[← 返回技能列表](README_zh.md) · [技能列表 →](README_zh.md#全部-skill)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-%E5%BD%93%E5%89%8D-brightgreen)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## 目录

- [什么是 Codex 技能？](#what-is-a-skill)
- [文件结构与 SKILL.md](#file-structure)
- [安装路径](#installation-paths)
- [编写触发器（name 与 description）](#writing-triggers)
- [从零创建技能](#create-from-scratch)
- [改造现有技能](#adapt-existing)
- [质量与安全清单](#quality-security)
- [测试与调试](#test-and-debug)
- [发布与分享](#publish-and-share)
- [附录：模板、FAQ 与链接](#appendix)

> 本指南中的路径与命令已对照 openai/skills 及常见 Codex 工作流验证，可能随工具更新而变化。

## 什么是 Codex 技能？

<a id="what-is-a-skill"></a>

Codex 技能是一个包含 SKILL.md 及可选脚本、参考资料和资源的文件夹。当任务与技能描述匹配时，Codex 会读取 YAML 前置元数据和正文，为 Agent 提供可复用的持久指令，而非一次性提示。

- 当某工作流在多次会话中重复出现时使用技能（如部署、PDF 导出、品牌检查）。
- 一次性问题用提示；编辑器全局约定用 Cursor 规则。
- 技能可通过 Git 在团队间共享，并安装到 $CODEX_HOME/skills 或项目 .codex/skills。

## 文件结构与 SKILL.md

<a id="file-structure"></a>

每个技能是一个目录。SKILL.md 为必需；scripts/、references/ 和 assets/ 为可选配套，使主文件保持精简。

- YAML 前置元数据：name（kebab-case）和 description（Codex 触发句）。
- 正文：包含何时使用、工作流步骤、安全说明及 references/ 链接等标题。
- 可选 scripts/ 存放 Codex 可调用的可重复 shell 或 Python 辅助脚本。

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

## 安装路径

<a id="installation-paths"></a>

Codex 从用户全局和项目本地目录发现技能。Cursor 为 IDE Agent 使用平行的 .cursor/skills 路径。

| 位置 | 作用域 | 最适合 |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | 用户全局 | 随处复用的个人技能 |
| .codex/skills（项目根目录） | 项目本地 | 仓库特定的部署或合规工作流 |
| .cursor/skills（Cursor IDE） | Cursor Agent | IDE 工作流；移植时需调整命名/触发器以适配 Codex |

## 编写触发器（name 与 description）

<a id="writing-triggers"></a>

当用户任务在语义上与 description 匹配时，Codex 会加载技能。触发器应写为 WHEN 从句，包含用户短语、文件类型和工作流，而非功能列表。

- 好："当用户要求发布、上线或为前端应用运行 CI 时部署到 staging。"
- 差："用于部署和 DevOps 任务的技能。"（过于模糊，Codex 可能到处加载或从不加载）。
- name 必须为 kebab-case、稳定且与文件夹名一致（my-deploy-skill）。

## 从零创建技能

<a id="create-from-scratch"></a>

按以下步骤将可重复的团队工作流转化为已安装的 Codex 技能。

**Step 1. 选定一个可重复工作流**

示例：Next.js 应用的发布检查清单。

**Step 2. 起草触发句**

列出应激活技能的确切用户短语和仓库信号。

**Step 3. 编写 SKILL.md 各节**

包含何时使用、有序步骤、验证方式和安全边界。

**Step 4. 添加可选脚本或参考资料**

保持 SKILL.md 在约 500 行以内；长文档移至 references/。

**Step 5. 创建文件夹并安装**

个人技能用 ~/.codex/skills，仓库专用用 .codex/skills。

**Step 6. 用真实提示测试**

让 Codex 执行工作流并确认加载了你的技能。

**Step 7. 提交并分享**

用 Git 版本管理；发布或提交到 awesome_codex_skills。

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

## 改造现有技能

<a id="adapt-existing"></a>

从 GitHub（openai/skills）、OrangeBot、SkillsCat 或 SkillsMP fork 技能，然后审计并适配到你的 Codex 环境。

**Step 1. 定位源 SKILL.md**

打开链接仓库路径，阅读 frontmatter、脚本和许可证。

**Step 2. 进行安全审计**

检查 shell 命令、网络调用、API Key、浏览器控制和文件写入。

**Step 3. 为你的触发器重写 description**

保留上游工作流步骤，但将用户短语与团队用语对齐。

**Step 4. 本地安装并回归测试**

验证技能在正向和负向提示下是否正确加载。

## 质量与安全清单

<a id="quality-security"></a>

> **警告:** 运行 shell 命令、控制浏览器或调用付费 API 的技能可能导致数据丢失或意外费用。生产环境预装前务必审查每个脚本。

- 记录所需 API Key，切勿提交密钥。
- 除非用户明确要求，否则优先只读操作。
- 医疗、金融和法律建议领域需添加免责声明。
- 保持 SKILL.md 精简；长内容用链接而非内联。

## 测试与调试

<a id="test-and-debug"></a>

验证 Codex 在预期提示下加载技能，在其他情况下忽略它。

- 正向测试：逐字使用 description 中的短语。
- 负向测试：提出无关任务，确认无技能泄漏。
- 若 Codex 从不加载，扩大触发器或拆分为更小技能。

## 发布与分享

<a id="publish-and-share"></a>

通过 Git、公开目录或提交到 awesome_codex_skills 列表分享技能。

- 推送到 GitHub，含 LICENSE、README 和可访问的 SKILL.md 路径。
- 符合条件时可收录到 OrangeBot、SkillsCat、SkillsMP 或 SkillMD.ai。
- 通过 GitHub Issue 模板提交到 awesome_codex_skills，并提供热度依据。

## 附录：模板、FAQ 与链接

<a id="appendix"></a>

可复制到新技能文件夹的最小 SKILL.md 模板：

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

- FAQ：技能为何不加载？→ 用明确的 WHEN 触发器重写 description。
- FAQ：Cursor 技能可用于 Codex 吗？→ 可以，适配路径和触发器并在 Codex 测试。
- 官方参考：github.com/openai/skills、OrangeBot Skill Creator、OpenAI Docs skill。

---

> 由 data/custom-skill-guide.json 生成。运行 npm run generate:guide:all
