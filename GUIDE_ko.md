# 가이드: 커스텀 Codex 스킬

> OpenAI Codex용 SKILL.md 워크플로를 만들고, 수정하고, 설치하는 방법을 배웁니다.

[← 스킬 목록으로 돌아가기](README_ko.md) · [스킬 목록 →](README_ko.md#전체-skill)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Current-brightgreen)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## 목차

- [Codex 스킬이란?](#what-is-a-skill)
- [파일 구조와 SKILL.md](#file-structure)
- [설치 경로](#installation-paths)
- [트리거 작성 (name 및 description)](#writing-triggers)
- [처음부터 스킬 만들기](#create-from-scratch)
- [기존 스킬 적응하기](#adapt-existing)
- [품질 및 보안 체크리스트](#quality-security)
- [테스트 및 디버깅](#test-and-debug)
- [게시 및 공유](#publish-and-share)
- [부록: 템플릿, FAQ, 링크](#appendix)

> 이 가이드의 경로와 명령은 openai/skills 및 일반적인 Codex 워크플로를 기준으로 검증되었으며, 도구가 발전하면 변경될 수 있습니다.

## Codex 스킬이란?

<a id="what-is-a-skill"></a>

Codex 스킬은 SKILL.md와 선택적 스크립트·참고 자료·에셋이 있는 폴더입니다. 작업이 description과 일치하면 YAML frontmatter와 본문을 읽어 재사용 가능한 지침을 제공합니다.

- 배포, PDF 내보내기, 브랜드 검사처럼 세션마다 반복되는 워크플로에 사용합니다.
- 일회성 질문은 프롬프트, 에디터 전역 규칙은 Cursor rules.
- 스킬은 Git으로 공유하고 $CODEX_HOME/skills 또는 프로젝트 .codex/skills에 설치합니다.

## 파일 구조와 SKILL.md

<a id="file-structure"></a>

각 스킬은 디렉터리입니다. SKILL.md는 필수이고 scripts/, references/, assets/는 선택 사항입니다.

- YAML frontmatter: name(kebab-case)과 description(Codex 트리거 문장).
- 본문: 사용 시점, 워크플로 단계, 안전 주의, references/ 링크.
- 선택적 scripts/에 Codex가 호출할 shell/Python 헬퍼.

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

## 설치 경로

<a id="installation-paths"></a>

Codex는 사용자 전역 및 프로젝트 로컬 디렉터리에서 스킬을 찾습니다. Cursor는 IDE 에이전트용 .cursor/skills를 사용합니다.

| 위치 | 범위 | 적합 |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | 사용자 전역 | 어디서나 쓰는 개인 스킬 |
| .codex/skills(프로젝트 루트) | 프로젝트 로컬 | 저장소별 배포·컴플라이언스 워크플로 |
| .cursor/skills (Cursor IDE) | Cursor 에이전트 | IDE 워크플로; Codex 이식 시 이름/트리거 조정 |

## 트리거 작성 (name 및 description)

<a id="writing-triggers"></a>

사용자 작업이 description과 의미적으로 일치하면 Codex가 스킬을 로드합니다. 트리거는 기능 목록이 아니라 WHEN 절로 작성하세요.

- 좋음: "사용자가 ship, release, 프론트 CI를 요청하면 staging에 배포."
- 나쁨: "배포 및 DevOps 스킬." (모호해서 로드가 불안정).
- name은 kebab-case, 안정적, 폴더명과 일치(my-deploy-skill).

## 처음부터 스킬 만들기

<a id="create-from-scratch"></a>

반복되는 팀 워크플로를 설치된 Codex 스킬로 만드는 단계입니다.

**Step 1. 반복 워크플로 하나 선택**

예: Next.js 앱 릴리스 체크리스트.

**Step 2. 트리거 문장 작성**

스킬을 활성화할 사용자 표현과 repo 신호를 나열.

**Step 3. SKILL.md 섹션 작성**

사용 시점, 순서 단계, 검증, 안전 경계 포함.

**Step 4. 선택적 scripts/references 추가**

SKILL.md ~500줄 이내, 긴 문서는 references/.

**Step 5. 폴더 생성 및 설치**

개인: ~/.codex/skills, repo: .codex/skills.

**Step 6. 현실적인 프롬프트로 테스트**

Codex에 워크플로 실행 후 스킬 로드 확인.

**Step 7. 커밋하고 공유**

Git으로 버전 관리 후 공개 또는 awesome_codex_skills 제출.

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

## 기존 스킬 적응하기

<a id="adapt-existing"></a>

GitHub(openai/skills), OrangeBot, SkillsCat, SkillsMP에서 fork한 뒤 Codex 환경에 맞게 감사·적응합니다.

**Step 1. 소스 SKILL.md 찾기**

링크된 repo에서 frontmatter, scripts, license 확인.

**Step 2. 보안 감사 실행**

shell, 네트워크, API 키, 브라우저, 파일 쓰기 확인.

**Step 3. 환경에 맞게 description 재작성**

상류 워크플로는 유지하고 사용자 표현을 팀 용어에 맞춤.

**Step 4. 로컬 설치 및 회귀 테스트**

긍정·부정 프롬프트에서 로드 확인.

## 품질 및 보안 체크리스트

<a id="quality-security"></a>

> **경고:** shell, 브라우저, 유료 API 스킬은 데이터 손실·요금 위험이 있습니다. 프로덕션 전 모든 스크립트를 검토하세요.

- 필요 API 키 문서화, 비밀 커밋 금지.
- 사용자 명시 없으면 읽기 전용 우선.
- 의료·금융·법률 조언에는 면책 고지 추가.
- SKILL.md 간결히; 긴 내용은 링크.

## 테스트 및 디버깅

<a id="test-and-debug"></a>

의도한 프롬프트에서 Codex가 스킬을 로드하고 그 외에는 무시하는지 확인합니다.

- 긍정 테스트: description 문구 그대로 사용.
- 부정 테스트: 무관 작업에서 skill bleed 없음 확인.
- 로드되지 않으면 트리거 확장 또는 스킬 분할.

## 게시 및 공유

<a id="publish-and-share"></a>

Git, 공개 디렉터리 또는 awesome_codex_skills 제출로 공유합니다.

- LICENSE, README, SKILL.md 경로와 함께 GitHub push.
- 자격 되면 OrangeBot, SkillsCat, SkillsMP, SkillMD.ai 등록.
- GitHub Issue 템플릿으로 awesome_codex_skills 제출(인기 근거 포함).

## 부록: 템플릿, FAQ, 링크

<a id="appendix"></a>

새 스킬 폴더에 복사할 최소 SKILL.md 템플릿:

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

- FAQ: 로드 안 됨? → WHEN 트리거로 description 재작성.
- FAQ: Cursor 스킬을 Codex에서? → 경로·트리거 적응 후 Codex 테스트.
- 공식 참고: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs skill.

---

> data/custom-skill-guide.json에서 생성됨. npm run generate:guide:all 실행
