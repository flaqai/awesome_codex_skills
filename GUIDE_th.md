# คู่มือ: สกิล Codex แบบกำหนดเอง

> เรียนรู้วิธีสร้าง ปรับใช้ และติดตั้งเวิร์กโฟลว์ SKILL.md สำหรับ OpenAI Codex

[← กลับไปรายการสกิล](README_th.md) · [รายการสกิล →](README_th.md#skill-ทั้งหมด)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-Current-brightgreen)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## สารบัญ

- [สกิล Codex คืออะไร](#what-is-a-skill)
- [โครงสร้างไฟล์และ SKILL.md](#file-structure)
- [เส้นทางการติดตั้ง](#installation-paths)
- [เขียนทริกเกอร์ (name และ description)](#writing-triggers)
- [สร้างสกิลตั้งแต่ต้น](#create-from-scratch)
- [ปรับใช้สกิลที่มีอยู่](#adapt-existing)
- [รายการตรวจคุณภาพและความปลอดภัย](#quality-security)
- [ทดสอบและดีบัก](#test-and-debug)
- [เผยแพร่และแชร์](#publish-and-share)
- [ภาคผนวก: เทมเพลต FAQ และลิงก์](#appendix)

> เส้นทางและคำสั่งในคู่มือนี้ได้รับการตรวจสอบกับ openai/skills และเวิร์กโฟลว์ Codex ทั่วไป อาจเปลี่ยนแปลงตามการพัฒนาเครื่องมือ

## สกิล Codex คืออะไร

<a id="what-is-a-skill"></a>

สกิล Codex คือโฟลเดอร์ที่มี SKILL.md พร้อมสคริปต์ อ้างอิง และไฟล์ประกอบ (ถ้ามี) เมื่องานตรงคำอธิบาย Codex จะอ่าน YAML frontmatter และเนื้อหาเพื่อให้คำสั่งที่ใช้ซ้ำได้

- ใช้เมื่อเวิร์กโฟลว์ซ้ำข้ามเซสชัน เช่น deploy, ส่งออก PDF, ตรวจแบรนด์
- คำถามครั้งเดียวใช้พรอมpt์ ข้อตกลงทั้งโปรเจกต์ใช้กฎ Cursor
- แชร์สกิลผ่าน Git และติดตั้งที่ $CODEX_HOME/skills หรือ .codex/skills ในโปรเจกต์

## โครงสร้างไฟล์และ SKILL.md

<a id="file-structure"></a>

แต่ละสกิลคือโฟลเดอร์ ต้องมี SKILL.md ส่วน scripts/, references/, assets/ เป็นตัวเลือก

- YAML frontmatter: name (kebab-case) และ description (ประโยคทริกเกอร์)
- เนื้อหา: เมื่อใดใช้ ขั้นตอน ความปลอดภัย ลิงก์ references/
- scripts/ (ถ้ามี) สำหรับสคริปต์ shell/Python ที่ Codex เรียกได้

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

## เส้นทางการติดตั้ง

<a id="installation-paths"></a>

Codex ค้นหาสกิลจากโฟลเดอร์ผู้ใช้และโปรเจกต์ Cursor ใช้ .cursor/skills สำหรับ IDE agent

| ตำแหน่ง | ขอบเขต | เหมาะสำหรับ |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | ผู้ใช้ทั้งระบบ | สกิลส่วนตัวที่ใช้ทุกที่ |
| .codex/skills (รากโปรเจกต์) | เฉพาะโปรเจกต์ | เวิร์กโฟลว์ deploy/ compliance เฉพาะ repo |
| .cursor/skills (Cursor IDE) | Cursor agent | เวิร์กโฟลว์ IDE ปรับชื่อ/ทริกเกอร์เมื่อย้ายไป Codex |

## เขียนทริกเกอร์ (name และ description)

<a id="writing-triggers"></a>

Codex โหลดสกิลเมื่องานตรงกับ description ทางความหมาย เขียนทริกเกอร์เป็น WHEN พร้อมวลี ไฟล์ และเวิร์กโฟลว์

- ดี: "deploy ไป staging เมื่อผู้ใช้ขอ ship, release หรือรัน CI ฝั่ง frontend"
- ไม่ดี: "สกิลสำหรับ deploy และ DevOps" (กว้างเกินไป)
- name ต้องเป็น kebab-case คงที่ และตรงชื่อโฟลเดอร์

## สร้างสกิลตั้งแต่ต้น

<a id="create-from-scratch"></a>

ขั้นตอนเปลี่ยนเวิร์กโฟลว์ทีมที่ทำซ้ำเป็นสกิล Codex ที่ติดตั้งแล้ว

**Step 1. เลือกเวิร์กโฟลว์ที่ทำซ้ำ**

ตัวอย่าง: checklist ปล่อยแอป Next.js

**Step 2. ร่างประโยคทริกเกอร์**

ระบุวลีผู้ใช้และสัญญาณ repo ที่ควรเปิดสกิล

**Step 3. เขียนส่วน SKILL.md**

รวมเมื่อใดใช้ ขั้นตอน การตรวจ และขอบเขตความปลอดภัย

**Step 4. เพิ่ม scripts หรือ references (ถ้ามี)**

SKILL.md ไม่เกิน ~500 บรรทัด เอกสารยาวไป references/

**Step 5. สร้างโฟลเดอร์และติดตั้ง**

ส่วนตัว ~/.codex/skills โปรเจกต์ .codex/skills

**Step 6. ทดสอบด้วยพรอมpt์จริง**

ให้ Codex ทำเวิร์กโฟลว์และยืนยันว่าโหลดสกิล

**Step 7. commit และแชร์**

ใช้ Git และเผยแพร่หรือส่ง awesome_codex_skills

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

## ปรับใช้สกิลที่มีอยู่

<a id="adapt-existing"></a>

fork จาก GitHub, OrangeBot, SkillsCat หรือ SkillsMP แล้วตรวจและปรับให้เข้ากับ Codex

**Step 1. หา SKILL.md ต้นฉบับ**

เปิด repo อ่าน frontmatter scripts และ license

**Step 2. ตรวจสอบความปลอดภัย**

ตรวจ shell เครือข่าย API key บrowser และการเขียนไฟล์

**Step 3. เขียน description ใหม่ให้ตรงทริกเกอร์**

คงขั้นตอนเดิม ปรับวลีให้ตรงทีม

**Step 4. ติดตั้งท้องถิ่นและทดสอบ regression**

ทดสอบ prompt บวกและลบ

## รายการตรวจคุณภาพและความปลอดภัย

<a id="quality-security"></a>

> **คำเตือน:** สกิลที่รัน shell ควบคุมเบราว์เซอร์ หรือเรียก API เสียเงิน อาจสูญเสียข้อมูลหรือมีค่าใช้จ่าย ตรวจสคริปต์ก่อนใช้ production

- บันทึก API key ที่ต้องใช้ อย่า commit secret
- เน้น read-only จนกว่าผู้ใช้จะขอเขียน
- เพิ่ม disclaimer สำหรับสุขภาพ การเงิน กฎหมาย
- SKILL.md กระชับ ลิงก์แทน inline ยาว

## ทดสอบและดีบัก

<a id="test-and-debug"></a>

ตรวจว่า Codex โหลดสกิลเมื่อ prompt ตรงและไม่โหลดเมื่อไม่ตรง

- ทดสอบบวก: ใช้วลีจาก description ตรงๆ
- ทดสอบลบ: งานไม่เกี่ยวข้อง ไม่มี skill bleed
- ถ้าไม่โหลด ขยายทริกเกอร์หรือแยกสกิล

## เผยแพร่และแชร์

<a id="publish-and-share"></a>

แชร์ผ่าน Git ไดเรกทอรีสาธารณะ หรือส่ง awesome_codex_skills

- push GitHub พร้อม LICENSE README และ path SKILL.md
- ลง OrangeBot SkillsCat SkillsMP SkillMD.ai เมื่อเหมาะสม
- ส่ง awesome_codex_skills ผ่าน GitHub Issue พร้อมหลักฐานความนิยม

## ภาคผนวก: เทมเพลต FAQ และลิงก์

<a id="appendix"></a>

เทมเพลต SKILL.md ขั้นต่ำสำหรับคัดลอกไปโฟลเดอร์สกิลใหม่:

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

- FAQ: ไม่โหลด? → เขียน description ใหม่ด้วย WHEN
- FAQ: ใช้ skill Cursor ใน Codex ได้ไหม? → ได้ ปรับ path/trigger แล้วทดสอบ
- อ้างอิง: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs

---

> สร้างจาก data/custom-skill-guide.json รัน npm run generate:guide:all
