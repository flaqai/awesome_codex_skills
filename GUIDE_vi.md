# Hướng dẫn: Skill Codex tùy chỉnh

> Học cách tạo, chỉnh sửa và cài đặt quy trình SKILL.md cho OpenAI Codex.

[← Quay lại danh sách skill](README_vi.md) · [Danh sách skill →](README_vi.md#tất-cả-skill)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-Current-brightgreen)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Mục lục

- [Skill Codex là gì?](#what-is-a-skill)
- [Cấu trúc tệp và SKILL.md](#file-structure)
- [Đường dẫn cài đặt](#installation-paths)
- [Viết trigger (name và description)](#writing-triggers)
- [Tạo skill từ đầu](#create-from-scratch)
- [Chỉnh sửa skill có sẵn](#adapt-existing)
- [Danh sách chất lượng và bảo mật](#quality-security)
- [Kiểm thử và gỡ lỗi](#test-and-debug)
- [Xuất bản và chia sẻ](#publish-and-share)
- [Phụ lục: Mẫu, FAQ và liên kết](#appendix)

> Đường dẫn và lệnh trong hướng dẫn đã được xác minh với openai/skills và quy trình Codex phổ biến; có thể thay đổi khi công cụ phát triển.

## Skill Codex là gì?

<a id="what-is-a-skill"></a>

Skill Codex là thư mục chứa SKILL.md cùng script, tài liệu tham khảo và tài nguyên tùy chọn. Khi tác vụ khớp mô tả, Codex đọc YAML frontmatter và nội dung để cung cấp hướng dẫn tái sử dụng.

- Dùng khi quy trình lặp lại qua nhiều phiên (triển khai, xuất PDF, kiểm tra thương hiệu).
- Câu hỏi một lần dùng prompt; quy ước toàn editor dùng rule Cursor.
- Skill chia sẻ qua Git và cài vào $CODEX_HOME/skills hoặc .codex/skills trong dự án.

## Cấu trúc tệp và SKILL.md

<a id="file-structure"></a>

Mỗi skill là một thư mục. SKILL.md bắt buộc; scripts/, references/, assets/ tùy chọn.

- YAML frontmatter: name (kebab-case) và description (câu kích hoạt).
- Nội dung: khi nào dùng, các bước, an toàn, liên kết references/.
- scripts/ tùy chọn cho shell/Python helper Codex có thể gọi.

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

## Đường dẫn cài đặt

<a id="installation-paths"></a>

Codex tìm skill từ thư mục toàn cục và cục bộ dự án. Cursor dùng .cursor/skills cho agent IDE.

| Vị trí | Phạm vi | Phù hợp nhất |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Toàn cục người dùng | Skill cá nhân dùng mọi nơi |
| .codex/skills (gốc dự án) | Cục bộ dự án | Quy trình triển khai/tuân thủ theo repo |
| .cursor/skills (Cursor IDE) | Agent Cursor | Quy trình IDE; chỉnh tên/trigger khi chuyển sang Codex |

## Viết trigger (name và description)

<a id="writing-triggers"></a>

Codex tải skill khi tác vụ khớp ngữ nghĩa với description. Viết trigger dạng WHEN với cụm từ, loại tệp và quy trình.

- Tốt: "Triển khai staging khi người dùng yêu cầu ship, release hoặc chạy CI frontend."
- Kém: "Skill cho deploy và DevOps." (mơ hồ, load không ổn định).
- name phải kebab-case, ổn định, khớp tên thư mục.

## Tạo skill từ đầu

<a id="create-from-scratch"></a>

Các bước biến quy trình nhóm lặp lại thành skill Codex đã cài.

**Step 1. Chọn một quy trình lặp lại**

Ví dụ: checklist phát hành app Next.js.

**Step 2. Soạn câu trigger**

Liệt kê cụm từ người dùng và tín hiệu repo kích hoạt skill.

**Step 3. Viết các phần SKILL.md**

Gồm khi nào dùng, bước, xác minh và ranh giới an toàn.

**Step 4. Thêm script hoặc tài liệu tham khảo**

Giữ SKILL.md ~500 dòng; tài liệu dài vào references/.

**Step 5. Tạo thư mục và cài đặt**

Cá nhân: ~/.codex/skills; repo: .codex/skills.

**Step 6. Thử với prompt thực tế**

Yêu cầu Codex thực hiện quy trình và xác nhận load skill.

**Step 7. Commit và chia sẻ**

Quản lý bằng Git; xuất bản hoặc gửi awesome_codex_skills.

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

## Chỉnh sửa skill có sẵn

<a id="adapt-existing"></a>

Fork từ GitHub, OrangeBot, SkillsCat hoặc SkillsMP, rồi kiểm tra và chỉnh cho môi trường Codex.

**Step 1. Tìm SKILL.md nguồn**

Mở repo liên kết, đọc frontmatter, script và license.

**Step 2. Kiểm tra bảo mật**

Kiểm tra shell, mạng, API key, trình duyệt, ghi file.

**Step 3. Viết lại description cho trigger của bạn**

Giữ bước upstream, căn cụm từ theo từ vựng nhóm.

**Step 4. Cài cục bộ và kiểm thử hồi quy**

Xác minh load với prompt dương và âm.

## Danh sách chất lượng và bảo mật

<a id="quality-security"></a>

> **Cảnh báo:** Skill chạy shell, điều khiển trình duyệt hoặc API trả phí có thể gây mất dữ liệu hoặc phí. Rà soát script trước production.

- Ghi API key cần thiết, không commit secret.
- Ưu tiên chỉ đọc trừ khi người dùng yêu cầu ghi.
- Thêm tuyên bố miễn trừ cho y tế, tài chính, pháp lý.
- Giữ SKILL.md gọn; liên kết tài liệu dài.

## Kiểm thử và gỡ lỗi

<a id="test-and-debug"></a>

Xác minh Codex load skill khi prompt đúng và bỏ qua khi không đúng.

- Test dương: dùng đúng cụm từ trong description.
- Test âm: tác vụ không liên quan, không bleed skill.
- Nếu không load, mở rộng trigger hoặc tách skill.

## Xuất bản và chia sẻ

<a id="publish-and-share"></a>

Chia sẻ qua Git, thư mục công khai hoặc gửi awesome_codex_skills.

- Push GitHub kèm LICENSE, README và đường dẫn SKILL.md.
- Liệt kê trên OrangeBot, SkillsCat, SkillsMP, SkillMD.ai nếu đủ điều kiện.
- Gửi awesome_codex_skills qua Issue GitHub kèm bằng chứng độ phổ biến.

## Phụ lục: Mẫu, FAQ và liên kết

<a id="appendix"></a>

Mẫu SKILL.md tối thiểu để sao chép vào thư mục skill mới:

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

- FAQ: Không load? → Viết lại description với WHEN.
- FAQ: Dùng skill Cursor trong Codex? → Có, chỉnh path/trigger và test.
- Tham khảo: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Được tạo từ data/custom-skill-guide.json. Chạy npm run generate:guide:all
