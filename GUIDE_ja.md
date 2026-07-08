# ガイド：カスタム Codex スキル

> OpenAI Codex 向けに SKILL.md ワークフローを作成・改変・インストールする方法を学びます。

[← スキル一覧に戻る](README_ja.md) · [スキル一覧 →](README_ja.md#すべての-skill)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Current-brightgreen)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## 目次

- [Codex スキルとは？](#what-is-a-skill)
- [ファイル構成と SKILL.md](#file-structure)
- [インストール先](#installation-paths)
- [トリガー記述（name と description）](#writing-triggers)
- [ゼロからスキルを作成](#create-from-scratch)
- [既存スキルを適応させる](#adapt-existing)
- [品質・セキュリティチェックリスト](#quality-security)
- [テストとデバッグ](#test-and-debug)
- [公開と共有](#publish-and-share)
- [付録：テンプレート、FAQ、リンク](#appendix)

> 本ガイドのパスとコマンドは openai/skills および一般的な Codex ワークフローに照らして検証済みです。ツールの進化に伴い変更される場合があります。

## Codex スキルとは？

<a id="what-is-a-skill"></a>

Codex スキルは SKILL.md と任意のスクリプト・参照資料・アセットを含むフォルダです。タスクが description に一致すると YAML フロントマターと本文を読み込み、再利用可能な指示を与えます。

- デプロイ、PDF 出力、ブランドチェックなど、セッションをまたぐ繰り返しワークフロー向け。
- 一度きりの質問はプロンプト、エディタ全体の規約は Cursor ルール。
- スキルは Git で共有し、$CODEX_HOME/skills またはプロジェクト .codex/skills にインストール。

## ファイル構成と SKILL.md

<a id="file-structure"></a>

各スキルはディレクトリです。SKILL.md は必須。scripts/、references/、assets/ は任意で、本体を簡潔に保ちます。

- YAML フロントマター：name（kebab-case）と description（Codex 用トリガー文）。
- 本文：使用条件、ワークフロー手順、安全注意、references/ へのリンク。
- 任意の scripts/ に Codex が呼び出すシェル/Python ヘルパーを置く。

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

## インストール先

<a id="installation-paths"></a>

Codex はユーザー全体とプロジェクトローカルからスキルを検出。Cursor は .cursor/skills を IDE エージェント用に使います。

| 場所 | スコープ | 最適 |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | ユーザー全体 | どこでも使う個人スキル |
| .codex/skills（プロジェクトルート） | プロジェクトローカル | リポジトリ固有のデプロイ・コンプライアンス |
| .cursor/skills（Cursor IDE） | Cursor エージェント | IDE 用。Codex へ移植時は名前・トリガーを調整 |

## トリガー記述（name と description）

<a id="writing-triggers"></a>

ユーザータスクが description に意味的に一致すると Codex がスキルを読み込みます。トリガーは機能一覧ではなく、ユーザー表現・ファイル種別・ワークフローを含む WHEN 句で書きます。

- 良い例：「ship、release、フロント CI と言われたら staging へデプロイ。」
- 悪い例：「デプロイと DevOps 用スキル」（曖昧すぎて読み込みが不安定）。
- name は kebab-case で安定し、フォルダ名と一致（my-deploy-skill）。

## ゼロからスキルを作成

<a id="create-from-scratch"></a>

繰り返しチームワークフローをインストール済み Codex スキルにする手順です。

**Step 1. 繰り返しワークフローを1つ選ぶ**

例：Next.js アプリのリリースチェックリスト。

**Step 2. トリガー文を書く**

スキルを有効にするユーザー表現とリポジトリ信号を列挙。

**Step 3. SKILL.md の各セクションを書く**

使用条件、手順、検証、安全境界を含める。

**Step 4. 任意で scripts や references を追加**

SKILL.md は約500行以内。長文は references/ へ。

**Step 5. フォルダ作成とインストール**

個人は ~/.codex/skills、リポジトリ固有は .codex/skills。

**Step 6. 現実的なプロンプトでテスト**

Codex にワークフローを実行させ、スキル読み込みを確認。

**Step 7. コミットして共有**

Git で版管理し、公開または awesome_codex_skills に提出。

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

## 既存スキルを適応させる

<a id="adapt-existing"></a>

GitHub（openai/skills）、OrangeBot、SkillsCat、SkillsMP からフォークし、Codex 環境向けに監査・適応します。

**Step 1. ソース SKILL.md を特定**

リンク先リポジトリで frontmatter、スクリプト、ライセンスを確認。

**Step 2. セキュリティ監査**

シェル、ネットワーク、API キー、ブラウザ操作、ファイル書き込みを確認。

**Step 3. 自環境のトリガーに description を書き換え**

上流の手順は残し、ユーザー表現をチーム用語に合わせる。

**Step 4. ローカルインストールと回帰テスト**

肯定・否定プロンプトで読み込みを確認。

## 品質・セキュリティチェックリスト

<a id="quality-security"></a>

> **警告:** シェル実行、ブラウザ操作、有料 API 呼び出しはデータ損失や課金リスクがあります。本番前に全スクリプトを確認してください。

- 必要 API キーを文書化し、秘密情報をコミットしない。
- 明示的な依頼がない限り読み取り専用を優先。
- 医療・金融・法務アドバイスには免責事項を追加。
- SKILL.md は簡潔に。長文はリンクで。

## テストとデバッグ

<a id="test-and-debug"></a>

意図したプロンプトで Codex がスキルを読み込み、それ以外では無視することを確認します。

- 肯定テスト：description のフレーズをそのまま使う。
- 否定テスト：無関係タスクでスキル漏れがないか確認。
- 読み込まれない場合はトリガーを広げるかスキルを分割。

## 公開と共有

<a id="publish-and-share"></a>

Git、公開ディレクトリ、または awesome_codex_skills への提出で共有します。

- LICENSE、README、到達可能な SKILL.md パス付きで GitHub に push。
- 条件を満たせば OrangeBot、SkillsCat、SkillsMP、SkillMD.ai に掲載。
- GitHub Issue テンプレートで awesome_codex_skills に提出（人気の根拠付き）。

## 付録：テンプレート、FAQ、リンク

<a id="appendix"></a>

新規スキルフォルダにコピーできる最小 SKILL.md テンプレート：

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

- FAQ: 読み込まれない？→ description を WHEN 明示で書き直す。
- FAQ: Cursor スキルを Codex で？→ パスとトリガーを適応し Codex でテスト。
- 公式参照：github.com/openai/skills、OrangeBot Skill Creator、OpenAI Docs skill。

---

> data/custom-skill-guide.json から生成。npm run generate:guide:all を実行
