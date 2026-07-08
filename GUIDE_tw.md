# 指南：自訂 Codex 技能

> 學習如何為 OpenAI Codex 建立、改編並安裝 SKILL.md 工作流程。

[← 返回技能列表](README_tw.md) · [技能列表 →](README_tw.md#全部-skill)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-%E7%9B%AE%E5%89%8D-brightgreen)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## 目錄

- [什麼是 Codex 技能？](#what-is-a-skill)
- [檔案結構與 SKILL.md](#file-structure)
- [安裝路徑](#installation-paths)
- [撰寫觸發器（name 與 description）](#writing-triggers)
- [從零建立技能](#create-from-scratch)
- [改造現有技能](#adapt-existing)
- [品質與安全清單](#quality-security)
- [測試與除錯](#test-and-debug)
- [發布與分享](#publish-and-share)
- [附錄：模板、FAQ 與連結](#appendix)

> 本指南中的路徑與指令已對照 openai/skills 及常見 Codex 工作流程驗證，可能隨工具更新而變更。

## 什麼是 Codex 技能？

<a id="what-is-a-skill"></a>

Codex 技能是一個包含 SKILL.md 及可選腳本、參考資料和資源的資料夾。當任務與技能描述相符時，Codex 會讀取 YAML 前置中繼資料和正文，為 Agent 提供可重複使用的持久指令，而非一次性提示。

- 當某工作流程在多個工作階段中重複出現時使用技能（如部署、PDF 匯出、品牌檢查）。
- 一次性問題用提示；編輯器全域慣例用 Cursor 規則。
- 技能可透過 Git 在團隊間共享，並安裝到 $CODEX_HOME/skills 或專案 .codex/skills。

## 檔案結構與 SKILL.md

<a id="file-structure"></a>

每個技能是一個目錄。SKILL.md 為必需；scripts/、references/ 和 assets/ 為可選配套，使主檔保持精簡。

- YAML 前置中繼資料：name（kebab-case）和 description（Codex 觸發句）。
- 正文：包含何時使用、工作流程步驟、安全說明及 references/ 連結等標題。
- 可選 scripts/ 存放 Codex 可呼叫的可重複 shell 或 Python 輔助腳本。

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

## 安裝路徑

<a id="installation-paths"></a>

Codex 從使用者全域和專案本機目錄發現技能。Cursor 為 IDE Agent 使用平行的 .cursor/skills 路徑。

| 位置 | 作用域 | 最適合 |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | 使用者全域 | 到處重複使用的個人技能 |
| .codex/skills（專案根目錄） | 專案本機 | 儲存庫特定的部署或合規工作流程 |
| .cursor/skills（Cursor IDE） | Cursor Agent | IDE 工作流程；移植時需調整命名/觸發器以適配 Codex |

## 撰寫觸發器（name 與 description）

<a id="writing-triggers"></a>

當使用者任務在語意上與 description 相符時，Codex 會載入技能。觸發器應寫成 WHEN 子句，包含使用者片語、檔案類型和工作流程，而非功能列表。

- 好："當使用者要求發布、上線或為前端應用執行 CI 時部署到 staging。"
- 差："用於部署和 DevOps 任務的技能。"（過於模糊，Codex 可能到處載入或從不載入）。
- name 必須為 kebab-case、穩定且與資料夾名稱一致（my-deploy-skill）。

## 從零建立技能

<a id="create-from-scratch"></a>

依下列步驟將可重複的團隊工作流程轉為已安裝的 Codex 技能。

**Step 1. 選定一個可重複工作流程**

範例：Next.js 應用的發布檢查清單。

**Step 2. 起草觸發句**

列出應啟動技能的确切使用者片語和儲存庫信號。

**Step 3. 撰寫 SKILL.md 各節**

包含何時使用、有序步驟、驗證方式和安全邊界。

**Step 4. 新增可選腳本或參考資料**

保持 SKILL.md 在約 500 行以內；長文件移至 references/。

**Step 5. 建立資料夾並安裝**

個人技能用 ~/.codex/skills，儲存庫專用用 .codex/skills。

**Step 6. 用真實提示測試**

讓 Codex 執行工作流程並確認載入了你的技能。

**Step 7. 提交並分享**

用 Git 版本管理；發布或提交到 awesome_codex_skills。

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

## 改造現有技能

<a id="adapt-existing"></a>

從 GitHub（openai/skills）、OrangeBot、SkillsCat 或 SkillsMP fork 技能，然後審計並適配到你的 Codex 環境。

**Step 1. 定位來源 SKILL.md**

開啟連結儲存庫路徑，閱讀 frontmatter、腳本和授權。

**Step 2. 進行安全審計**

檢查 shell 指令、網路呼叫、API Key、瀏覽器控制和檔案寫入。

**Step 3. 為你的觸發器重寫 description**

保留上游工作流程步驟，但將使用者片語與團隊用語對齊。

**Step 4. 本機安裝並迴歸測試**

驗證技能在正向和負向提示下是否正確載入。

## 品質與安全清單

<a id="quality-security"></a>

> **警告:** 執行 shell 指令、控制瀏覽器或呼叫付費 API 的技能可能導致資料遺失或意外費用。正式環境預裝前務必審查每個腳本。

- 記錄所需 API Key，切勿提交金鑰。
- 除非使用者明確要求，否則優先唯讀操作。
- 醫療、金融和法律建議領域需新增免責聲明。
- 保持 SKILL.md 精簡；長內容用連結而非內嵌。

## 測試與除錯

<a id="test-and-debug"></a>

驗證 Codex 在預期提示下載入技能，在其他情況下忽略它。

- 正向測試：逐字使用 description 中的片語。
- 負向測試：提出無關任務，確認無技能洩漏。
- 若 Codex 從不載入，擴大觸發器或拆分為更小技能。

## 發布與分享

<a id="publish-and-share"></a>

透過 Git、公開目錄或提交到 awesome_codex_skills 列表分享技能。

- 推送到 GitHub，含 LICENSE、README 和可存取的 SKILL.md 路徑。
- 符合條件時可收錄到 OrangeBot、SkillsCat、SkillsMP 或 SkillMD.ai。
- 透過 GitHub Issue 模板提交到 awesome_codex_skills，並提供熱度依據。

## 附錄：模板、FAQ 與連結

<a id="appendix"></a>

可複製到新技能資料夾的最小 SKILL.md 模板：

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

- FAQ：技能為何不載入？→ 用明確的 WHEN 觸發器重寫 description。
- FAQ：Cursor 技能可用於 Codex 嗎？→ 可以，適配路徑和觸發器並在 Codex 測試。
- 官方參考：github.com/openai/skills、OrangeBot Skill Creator、OpenAI Docs skill。

---

> 由 data/custom-skill-guide.json 產生。執行 npm run generate:guide:all
