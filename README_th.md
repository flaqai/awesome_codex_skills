# Awesome Codex Skills

> ดูแลโดย [Flaq.ai](https://flaq.ai) — แพลตฟอร์มสร้างสรรค์ AI-native สำหรับภาพ วิดีโอ และแชต

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/flaqai/awesome_codex_skills?style=social)](https://github.com/flaqai/awesome_codex_skills)
[![Submit Skills via Issues](https://img.shields.io/badge/Submit%20Skills-via%20Issues-brightgreen.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml)

> รายการ Codex Skill แบบคัดสรรหลายภาษา สำหรับงานสร้างสรรค์ โค้ด อัตโนมัติ เอกสาร และ workflow เฉพาะอุตสาหกรรม

> Skill ถูกรวบรวมจาก directory และ repository สาธารณะเพื่อการค้นพบและการเรียนรู้ หากลิงก์เสียหรือต้องการให้ลบ โปรดเปิด issue

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](README.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](README_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](README_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](README_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](README_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-Current-brightgreen)](README_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](README_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](README_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](README_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](README_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](README_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](README_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](README_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](README_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](README_ar.md)

---

## สารบัญ

- [ทำไมต้องมีรายการนี้](#ทำไมตองมรายการน)
- [ดูตามหมวดหมู่](#ดตามหมวดหม)
- [สถิติ](#สถต)
- [Skill แนะนำ](#skill-แนะนำ)
- [Skill ทั้งหมด](#skill-ทงหมด)
- [วิธีมีส่วนร่วม](#วธมสวนรวม)
- [เกณฑ์การคัดเลือก](#เกณฑการคดเลอก)
- [สัญญาอนุญาต](#สญญาอนญาต)
- [ขอบคุณ](#ขอบคณ)

## ทำไมต้องมีรายการนี้

- Codex Skill มีประโยชน์ที่สุดเมื่อผู้ใช้หา workflow ที่เหมาะกับงานได้อย่างรวดเร็ว
- โปรเจกต์นี้คัดสรร Skill ที่ใช้ได้จริง จัดตาม use case และบันทึกลิงก์ แหล่งที่มา ตัวชี้วัดความนิยม และข้อควรระวังก่อนติดตั้ง

## ดูตามหมวดหมู่

- [เครื่องมือเอเจนต์](#เครองมอเอเจนต) - สกิลพื้นฐานที่ช่วยให้ Codex ค้นหา ผสมผสาน หรือสร้าง Skill อื่น ๆ
- [การเขียนโค้ดและฟรอนต์เอนด์](#การเขยนโคดและฟรอนตเอนด) - Skill สำหรับฟรอนต์เอนด์ UI การ deploy การเข้าใจ repo และ workflow วิศวกรรม
- [งานสร้างสรรค์และสื่อ](#งานสรางสรรคและสอ) - Skill สร้างสรรค์สำหรับภาพ เสียง วิดีโอ ภาพการตลาด และการผลิตสื่อ
- [ระบบอัตโนมัติของเบราว์เซอร์และการทดสอบ](#ระบบอตโนมตของเบราวเซอรและการทดสอบ) - Skill สำหรับควบคุมเบราว์เซอร์ จับภาพหน้าจอ ตรวจ UI และตรวจสอบ interaction
- [เอกสารและงานนำเสนอ](#เอกสารและงานนำเสนอ) - Skill สำหรับ PDF สไลด์ รายงาน ข้อเสนอ และเอกสารที่มีโครงสร้าง
- [ข้อมูลและการแสดงผล](#ขอมลและการแสดงผล) - Skill สำหรับกราฟ คำอธิบายภาพ วิเคราะห์ และเล่าเรื่องด้วยข้อมูล
- [การตลาดและการเติบโต](#การตลาดและการเตบโต) - Skill สำหรับ SEO คอนเทนต์เปิดตัว แคมเปญ และ workflow การเติบโต
- [อุตสาหกรรมและการปฏิบัติตามข้อกำหนด](#อตสาหกรรมและการปฏบตตามขอกำหนด) - Skill เฉพาะทาง เช่น สุขภาพ accessibility ความปลอดภัย และ localization

## สถิติ

| Metric | Count |
|---|---:|
| จำนวน Skill | 26 |
| จำนวนหมวดหมู่ | 8 |
| อัปเดตล่าสุด | 2026-07-07 |

## Skill แนะนำ

- **[Find Skills](https://orangebot.ai/s/find-skills)**  
  เครื่องมือค้นหา Skill ที่ช่วยให้ Codex ค้นหา เปรียบเทียบ และเลือก Skill ที่เหมาะกับงาน  
  แท็ก: `AI Agent` `Discovery` `Tooling`  
  แหล่งที่มา: OrangeBot · ความนิยม: 751.5k weekly installs, 6,390 stars, 707 forks on OrangeBot.  
  หมายเหตุ: เหมาะเป็นจุดเริ่มต้นที่ติดตั้งไว้ล่วงหน้าเพื่อสำรวจ Skill อื่น ๆ

- **[Skill Creator](https://orangebot.ai/s/skill-creator)**  
  Meta-skill สำหรับเปลี่ยน workflow ที่ทีมใช้ซ้ำให้เป็นไฟล์ SKILL.md ที่นำกลับมาใช้ได้  
  แท็ก: `Skill Authoring` `SKILL.md` `Workflow`  
  แหล่งที่มา: OrangeBot · ความนิยม: 112.1k weekly installs, 21,445 stars, 1,698 forks on OrangeBot.

- **[Vercel React Best Practices](https://orangebot.ai/s/vercel-react-best-practices)**  
  แนวทาง React/Vercel สำหรับโครงสร้างแอป คอมโพเนนต์ routing deployment และ performance ที่ดูแลง่าย  
  แท็ก: `React` `Vercel` `Frontend`  
  แหล่งที่มา: OrangeBot · ความนิยม: 256.2k weekly installs, 3,285 stars, 495 forks on OrangeBot.

- **[Frontend Design](https://orangebot.ai/s/frontend-design)**  
  ช่วย Codex วางแผน UI ที่ประณีตก่อนลงมือทำ ทั้ง hierarchy, layout, component states และ responsive behavior  
  แท็ก: `Frontend` `UI/UX` `Design`  
  แหล่งที่มา: OrangeBot · ความนิยม: 211.4k weekly installs, 4,938 stars, 353 forks on OrangeBot.

- **[ShadCN](https://ui.shadcn.com/docs/skills)**  
  แนวทางทางการสำหรับสร้าง React components, dashboards, forms, dialogs และหน้าจอเครื่องมือแบบสมัยใหม่  
  แท็ก: `React` `Components` `UI`  
  แหล่งที่มา: ShadCN Docs · ความนิยม: Official ShadCN skills/rules entry for a high-star mainstream React component ecosystem.

- **[AI Image Generation](https://orangebot.ai/s/ai-image-generation)**  
  Skill สร้างภาพสำหรับโปสเตอร์ คอนเซปต์ ภาพสินค้า โฆษณา ปก โซเชียล และ reference งานออกแบบ  
  แท็ก: `Image` `Creative` `Marketing`  
  แหล่งที่มา: OrangeBot · ความนิยม: 113.9k weekly installs, 4,938 stars, 353 forks on OrangeBot.  
  หมายเหตุ: ควรตรวจข้อกำหนดของ model/API ก่อนติดตั้งล่วงหน้า

- **[Remotion Best Practices](https://orangebot.ai/s/remotion-best-practices)**  
  แนวทางสำหรับทำ programmable video, motion graphics, product demos, automated shorts และ data videos ด้วย React  
  แท็ก: `Video` `React` `Remotion`  
  แหล่งที่มา: OrangeBot · ความนิยม: 181.8k weekly installs, 867 stars, 24 forks on OrangeBot.

- **[Agent Browser](https://orangebot.ai/s/agent-browser)**  
  ให้ Codex เปิดหน้า คลิก จับภาพหน้าจอ ตรวจ UI และยืนยัน interaction  
  แท็ก: `Browser` `Automation` `Testing`  
  แหล่งที่มา: OrangeBot · ความนิยม: 136.6k weekly installs, 29,773 stars, 3,154 forks on OrangeBot.

- **[Playwright](https://github.com/openai/skills/tree/main/skills/.curated/playwright)**  
  Skill อัตโนมัติเบราว์เซอร์อย่างเป็นทางการสำหรับ navigation, screenshot, layout checks และ interaction validation  
  แท็ก: `Playwright` `Testing` `Browser`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Official OpenAI curated skill from the openai/skills repository.

- **[PDF](https://orangebot.ai/s/pdf)**  
  อ่าน สร้าง render และตรวจ PDF ด้วยสายตา เหมาะกับรายงาน ข้อเสนอ คู่มือ และสื่อการเรียน  
  แท็ก: `PDF` `Documents` `Reports`  
  แหล่งที่มา: OrangeBot · ความนิยม: 53.4k weekly installs, 4,938 stars, 353 forks on OrangeBot.

- **[Security Best Practices](https://github.com/openai/skills/tree/main/skills/.curated/security-best-practices)**  
  ชี้นำ Codex ให้พิจารณา authentication, permissions, secrets, input validation, dependency risk และ network safety  
  แท็ก: `Security` `Review` `Engineering`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Official OpenAI curated skill from the openai/skills repository.

## Skill ทั้งหมด

### เครื่องมือเอเจนต์

สกิลพื้นฐานที่ช่วยให้ Codex ค้นหา ผสมผสาน หรือสร้าง Skill อื่น ๆ

- **[Find Skills](https://orangebot.ai/s/find-skills)**  
  เครื่องมือค้นหา Skill ที่ช่วยให้ Codex ค้นหา เปรียบเทียบ และเลือก Skill ที่เหมาะกับงาน  
  แท็ก: `AI Agent` `Discovery` `Tooling`  
  แหล่งที่มา: OrangeBot · ความนิยม: 751.5k weekly installs, 6,390 stars, 707 forks on OrangeBot.  
  หมายเหตุ: เหมาะเป็นจุดเริ่มต้นที่ติดตั้งไว้ล่วงหน้าเพื่อสำรวจ Skill อื่น ๆ

- **[Skill Creator](https://orangebot.ai/s/skill-creator)**  
  Meta-skill สำหรับเปลี่ยน workflow ที่ทีมใช้ซ้ำให้เป็นไฟล์ SKILL.md ที่นำกลับมาใช้ได้  
  แท็ก: `Skill Authoring` `SKILL.md` `Workflow`  
  แหล่งที่มา: OrangeBot · ความนิยม: 112.1k weekly installs, 21,445 stars, 1,698 forks on OrangeBot.

### การเขียนโค้ดและฟรอนต์เอนด์

Skill สำหรับฟรอนต์เอนด์ UI การ deploy การเข้าใจ repo และ workflow วิศวกรรม

- **[Vercel React Best Practices](https://orangebot.ai/s/vercel-react-best-practices)**  
  แนวทาง React/Vercel สำหรับโครงสร้างแอป คอมโพเนนต์ routing deployment และ performance ที่ดูแลง่าย  
  แท็ก: `React` `Vercel` `Frontend`  
  แหล่งที่มา: OrangeBot · ความนิยม: 256.2k weekly installs, 3,285 stars, 495 forks on OrangeBot.

- **[Frontend Design](https://orangebot.ai/s/frontend-design)**  
  ช่วย Codex วางแผน UI ที่ประณีตก่อนลงมือทำ ทั้ง hierarchy, layout, component states และ responsive behavior  
  แท็ก: `Frontend` `UI/UX` `Design`  
  แหล่งที่มา: OrangeBot · ความนิยม: 211.4k weekly installs, 4,938 stars, 353 forks on OrangeBot.

- **[ShadCN](https://ui.shadcn.com/docs/skills)**  
  แนวทางทางการสำหรับสร้าง React components, dashboards, forms, dialogs และหน้าจอเครื่องมือแบบสมัยใหม่  
  แท็ก: `React` `Components` `UI`  
  แหล่งที่มา: ShadCN Docs · ความนิยม: Official ShadCN skills/rules entry for a high-star mainstream React component ecosystem.

- **[Vercel Deploy](https://github.com/openai/skills/tree/main/skills/.curated/vercel-deploy)**  
  ช่วย Codex deploy frontend apps, tool sites และ prototypes ไปยัง Vercel  
  แท็ก: `Deployment` `Vercel` `DevOps`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Official OpenAI curated skill from the openai/skills repository.

- **[Repo Story Time](https://orangebot.ai/s/repo-story-time)**  
  อธิบาย codebase โครงสร้างวิศวกรรม ประวัติการเปลี่ยนแปลง และเรื่องราวทางเทคนิคให้อ่านง่าย  
  แท็ก: `Repository` `Codebase` `Explanation`  
  แหล่งที่มา: OrangeBot · ความนิยม: 27.4k weekly installs, 3,285 stars, 495 forks on OrangeBot.

### งานสร้างสรรค์และสื่อ

Skill สร้างสรรค์สำหรับภาพ เสียง วิดีโอ ภาพการตลาด และการผลิตสื่อ

- **[AI Image Generation](https://orangebot.ai/s/ai-image-generation)**  
  Skill สร้างภาพสำหรับโปสเตอร์ คอนเซปต์ ภาพสินค้า โฆษณา ปก โซเชียล และ reference งานออกแบบ  
  แท็ก: `Image` `Creative` `Marketing`  
  แหล่งที่มา: OrangeBot · ความนิยม: 113.9k weekly installs, 4,938 stars, 353 forks on OrangeBot.  
  หมายเหตุ: ควรตรวจข้อกำหนดของ model/API ก่อนติดตั้งล่วงหน้า

- **[Remotion Best Practices](https://orangebot.ai/s/remotion-best-practices)**  
  แนวทางสำหรับทำ programmable video, motion graphics, product demos, automated shorts และ data videos ด้วย React  
  แท็ก: `Video` `React` `Remotion`  
  แหล่งที่มา: OrangeBot · ความนิยม: 181.8k weekly installs, 867 stars, 24 forks on OrangeBot.

- **[P Video](https://orangebot.ai/s/p-video)**  
  เปลี่ยนสคริปต์สร้างสรรค์ asset และพารามิเตอร์ให้เป็น workflow สร้างหรือตัดต่อวิดีโอที่ใช้งานได้  
  แท็ก: `Video` `Shorts` `Media`  
  แหล่งที่มา: OrangeBot · ความนิยม: 108.7k weekly installs, 5,102 stars, 478 forks on OrangeBot.

- **[ElevenLabs Music](https://orangebot.ai/s/elevenlabs-music)**  
  Skill เพลง/เสียงสำหรับไอเดียเพลงประกอบในหนังสั้น โฆษณา เกมต้นแบบ คอร์ส และโซเชียล  
  แท็ก: `Music` `Audio` `Creative`  
  แหล่งที่มา: OrangeBot · ความนิยม: 51.7k weekly installs, 144 stars, 31 forks on OrangeBot.  
  หมายเหตุ: โดยทั่วไปต้องตั้งค่าบริการภายนอก

- **[UI UX Pro Max](https://orangebot.ai/s/ui-ux-pro-max)**  
  ปรับปรุง UI ผ่าน user journeys, component states, visual hierarchy, accessibility และ interaction feedback  
  แท็ก: `UI/UX` `Design` `Product`  
  แหล่งที่มา: OrangeBot · ความนิยม: 85.9k weekly installs, 1,491 stars, 150 forks on OrangeBot.

### ระบบอัตโนมัติของเบราว์เซอร์และการทดสอบ

Skill สำหรับควบคุมเบราว์เซอร์ จับภาพหน้าจอ ตรวจ UI และตรวจสอบ interaction

- **[Agent Browser](https://orangebot.ai/s/agent-browser)**  
  ให้ Codex เปิดหน้า คลิก จับภาพหน้าจอ ตรวจ UI และยืนยัน interaction  
  แท็ก: `Browser` `Automation` `Testing`  
  แหล่งที่มา: OrangeBot · ความนิยม: 136.6k weekly installs, 29,773 stars, 3,154 forks on OrangeBot.

- **[Playwright](https://github.com/openai/skills/tree/main/skills/.curated/playwright)**  
  Skill อัตโนมัติเบราว์เซอร์อย่างเป็นทางการสำหรับ navigation, screenshot, layout checks และ interaction validation  
  แท็ก: `Playwright` `Testing` `Browser`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Official OpenAI curated skill from the openai/skills repository.

- **[Screenshot](https://github.com/openai/skills/tree/main/skills/.curated/screenshot)**  
  เปลี่ยน UI output เป็น screenshot ที่ตรวจได้ และช่วยหา layout, visual, responsive และ overlap issues  
  แท็ก: `Screenshot` `UI QA` `Design`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Official OpenAI curated skill from the openai/skills repository.

### เอกสารและงานนำเสนอ

Skill สำหรับ PDF สไลด์ รายงาน ข้อเสนอ และเอกสารที่มีโครงสร้าง

- **[PDF](https://orangebot.ai/s/pdf)**  
  อ่าน สร้าง render และตรวจ PDF ด้วยสายตา เหมาะกับรายงาน ข้อเสนอ คู่มือ และสื่อการเรียน  
  แท็ก: `PDF` `Documents` `Reports`  
  แหล่งที่มา: OrangeBot · ความนิยม: 53.4k weekly installs, 4,938 stars, 353 forks on OrangeBot.

- **[PPTX](https://orangebot.ai/s/pptx)**  
  สร้างหรือแก้ไขงานนำเสนอสำหรับ pitch สินค้า บทเรียน แผนการตลาด และรายงานองค์กร  
  แท็ก: `Slides` `Presentations` `Documents`  
  แหล่งที่มา: OrangeBot · ความนิยม: 48.9k weekly installs, 4,938 stars, 353 forks on OrangeBot.

- **[DOCX](https://orangebot.ai/s/docx)**  
  สร้าง แก้ไข จัดรูปแบบ ตรวจทาน และส่งออก Word documents สำหรับรายงาน แผน คู่มือ และ workflow องค์กร  
  แท็ก: `Word` `Documents` `Reports`  
  แหล่งที่มา: OrangeBot · ความนิยม: 42.0k weekly installs, 4,938 stars, 353 forks on OrangeBot.

### ข้อมูลและการแสดงผล

Skill สำหรับกราฟ คำอธิบายภาพ วิเคราะห์ และเล่าเรื่องด้วยข้อมูล

- **[Visualization Expert](https://orangebot.ai/s/visualization-expert)**  
  ช่วยสร้างกราฟ คำอธิบายภาพ roadmap architecture diagrams และเรื่องเล่าจากข้อมูล  
  แท็ก: `Charts` `Visualization` `Data`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot skill page with usage, stars, and forks metadata.

### การตลาดและการเติบโต

Skill สำหรับ SEO คอนเทนต์เปิดตัว แคมเปญ และ workflow การเติบโต

- **[App Store Screenshots](https://orangebot.ai/s/app-store-screenshots)**  
  ช่วยสร้างภาพหน้าจอผลิตภัณฑ์ กราฟิกโปรโมต asset เปิดตัว social previews และภาพแคมเปญ  
  แท็ก: `Marketing` `Screenshots` `Launch`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot skill page with usage, stars, and forks metadata.

- **[SEO Audit](https://orangebot.ai/s/seo-audit)**  
  ตรวจโครงสร้างหน้า title คุณภาพเนื้อหา indexing technical SEO และโอกาสปรับปรุง  
  แท็ก: `SEO` `Marketing` `Content`  
  แหล่งที่มา: OrangeBot · ความนิยม: 57.8k weekly installs, 6,390 stars, 707 forks on OrangeBot.

- **[Copywriting](https://orangebot.ai/s/copywriting)**  
  เขียน copy โฆษณา landing page ข้อความสินค้า email marketing โพสต์โซเชียล และสคริปต์วิดีโอ  
  แท็ก: `Copy` `Ads` `Content`  
  แหล่งที่มา: OrangeBot · ความนิยม: 49.9k weekly installs, 11,596 stars, 981 forks on OrangeBot.

### อุตสาหกรรมและการปฏิบัติตามข้อกำหนด

Skill เฉพาะทาง เช่น สุขภาพ accessibility ความปลอดภัย และ localization

- **[Translate](https://skillmd.ai/skills/translate/)**  
  แปลคอนเทนต์หลายภาษาและ localize เอกสาร copy สินค้า และสื่อ cross-border ecommerce  
  แท็ก: `Localization` `Documents` `Ecommerce`  
  แหล่งที่มา: SkillMD.ai · ความนิยม: 4,268 views and 1,828 downloads on SkillMD.ai.

- **[Accessibility Compliance](https://orangebot.ai/s/accessibility-compliance)**  
  ปรับปรุง accessibility ผ่าน semantics, contrast, keyboard navigation, ARIA และ UX review  
  แท็ก: `Accessibility` `Compliance` `Frontend`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot skill page with usage, stars, and forks metadata.

- **[Security Best Practices](https://github.com/openai/skills/tree/main/skills/.curated/security-best-practices)**  
  ชี้นำ Codex ให้พิจารณา authentication, permissions, secrets, input validation, dependency risk และ network safety  
  แท็ก: `Security` `Review` `Engineering`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Official OpenAI curated skill from the openai/skills repository.

- **[OpenClaw Medical Skills](https://skills.cat/skills/yuan1z0825/nature-skills/openclaw-medical-skills)**  
  Skill ด้านสุขภาพสำหรับความรู้ทางการแพทย์ clinical text วิเคราะห์ข้อมูลสุขภาพ หรือช่วย workflow สุขภาพ  
  แท็ก: `Healthcare` `Medical` `Compliance`  
  แหล่งที่มา: SkillsCat · ความนิยม: SkillsCat entry with stars, token metadata, and CLI install support.  
  หมายเหตุ: โดเมนความเสี่ยงสูง ต้องมี compliance review และ disclaimer ชัดเจน

## วิธีมีส่วนร่วม

- เปิด [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue พร้อมลิงก์ที่เข้าถึงได้ คำอธิบายสั้น หมวดหมู่ แหล่งที่มา และหลักฐานความนิยม
- โปรดระบุหาก Skill ต้องใช้ API key การควบคุมเบราว์เซอร์ การรันคำสั่ง หรือเกี่ยวข้องกับการแพทย์ การเงิน กฎหมาย หรือสิทธิ์อ่อนไหวอื่น ๆ

## เกณฑ์การคัดเลือก

- ลิงก์ต้องเข้าถึงได้และไม่ใช่หน้า legacy error
- Skill ควรมีประโยชน์กับ Codex หรือดัดแปลงเป็น workflow ของ Codex ได้ง่าย
- รายการควรมี use case และแหล่งที่มาชัดเจน
- ให้ความสำคัญกับรายการที่มี usage/download/official/stars สูง
- โดเมนเสี่ยงและ dependency ภายนอกต้องระบุชัดเจน

## สัญญาอนุญาต

Repository นี้เผยแพร่ภายใต้ license ของ repo ชื่อ Skill และเนื้อหาที่ลิงก์เป็นของเจ้าของเดิม

## ขอบคุณ

ขอบคุณผู้สร้าง skill directory, maintainer open-source และชุมชน Codex ที่ทำให้ workflow ของ Agent ค้นหาได้ง่ายขึ้น

---

> README นี้สร้างจาก `data/skills.json` แก้ไขไฟล์ข้อมูลแล้วรัน `npm run generate:readme`
