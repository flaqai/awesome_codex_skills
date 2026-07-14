# Awesome Codex Skills

> ดูแลโดย [Flaq.ai](https://flaq.ai) — แพลตฟอร์มสร้างสรรค์ AI-native สำหรับภาพ วิดีโอ และแชต

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/flaqai/awesome_codex_skills?style=social)](https://github.com/flaqai/awesome_codex_skills)
[![Submit Skills via Issues](https://img.shields.io/badge/Submit%20Skills-via%20Issues-brightgreen.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml)

> รายการ Codex Skill แบบคัดสรรหลายภาษา สำหรับงานสร้างสรรค์ โค้ด อัตโนมัติ เอกสาร และ workflow เฉพาะอุตสาหกรรม

> Skill ถูกรวบรวมจาก directory และ repository สาธารณะเพื่อการค้นพบและการเรียนรู้ หากลิงก์เสียหรือต้องการให้ลบ โปรดเปิด issue

> **[คู่มือ Custom Skill →](GUIDE_th.md)** เรียนรู้วิธีสร้าง ปรับ และติดตั้ง Codex Skill ของคุณเอง

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](README.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](README_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](README_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](README_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](README_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-Current-brightgreen)](README_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](README_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](README_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](README_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](README_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](README_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](README_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](README_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](README_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](README_ar.md)

---

## สารบัญ

- [ทำไมต้องมีรายการนี้](#ทำไมต้องมีรายการนี้)
- [ดูตามหมวดหมู่](#ดูตามหมวดหมู่)
- [สถิติ](#สถิติ)
- [Skill แนะนำ](#skill-แนะนำ)
- [Skill ทั้งหมด](#skill-ทั้งหมด)
- [คู่มือ Custom Skill](#คู่มือ-custom-skill)
- [วิธีมีส่วนร่วม](#วิธีมีส่วนร่วม)
- [เกณฑ์การคัดเลือก](#เกณฑ์การคัดเลือก)
- [สัญญาอนุญาต](#สัญญาอนุญาต)
- [ขอบคุณ](#ขอบคุณ)
- [โปรเจกต์โอเพนซอร์สแนะนำ](#โปรเจกต์โอเพนซอร์สแนะนำ)

## ทำไมต้องมีรายการนี้

- Codex Skill มีประโยชน์ที่สุดเมื่อผู้ใช้หา workflow ที่เหมาะกับงานได้อย่างรวดเร็ว
- โปรเจกต์นี้คัดสรร Skill ที่ใช้ได้จริง จัดตาม use case และบันทึกลิงก์ แหล่งที่มา ตัวชี้วัดความนิยม และข้อควรระวังก่อนติดตั้ง

## ดูตามหมวดหมู่

- [เครื่องมือเอเจนต์](#เครื่องมือเอเจนต์) - สกิลพื้นฐานที่ช่วยให้ Codex ค้นหา ผสมผสาน หรือสร้าง Skill อื่น ๆ
- [การเขียนโค้ดและฟรอนต์เอนด์](#การเขียนโค้ดและฟรอนต์เอนด์) - Skill สำหรับฟรอนต์เอนด์ UI การ deploy การเข้าใจ repo และ workflow วิศวกรรม
- [งานสร้างสรรค์และสื่อ](#งานสร้างสรรค์และสื่อ) - Skill สร้างสรรค์สำหรับภาพ เสียง วิดีโอ ภาพการตลาด และการผลิตสื่อ
- [ระบบอัตโนมัติของเบราว์เซอร์และการทดสอบ](#ระบบอัตโนมัติของเบราว์เซอร์และการทดสอบ) - Skill สำหรับควบคุมเบราว์เซอร์ จับภาพหน้าจอ ตรวจ UI และตรวจสอบ interaction
- [เอกสารและงานนำเสนอ](#เอกสารและงานนำเสนอ) - Skill สำหรับ PDF สไลด์ รายงาน ข้อเสนอ และเอกสารที่มีโครงสร้าง
- [ข้อมูลและการแสดงผล](#ข้อมูลและการแสดงผล) - Skill สำหรับกราฟ คำอธิบายภาพ วิเคราะห์ และเล่าเรื่องด้วยข้อมูล
- [การตลาดและการเติบโต](#การตลาดและการเติบโต) - Skill สำหรับ SEO คอนเทนต์เปิดตัว แคมเปญ และ workflow การเติบโต
- [อุตสาหกรรมและการปฏิบัติตามข้อกำหนด](#อุตสาหกรรมและการปฏิบัติตามข้อกำหนด) - Skill เฉพาะทาง เช่น สุขภาพ accessibility ความปลอดภัย และ localization

## สถิติ

| Metric | Count |
|---|---:|
| จำนวน Skill | 68 |
| จำนวนหมวดหมู่ | 8 |
| อัปเดตล่าสุด | 2026-07-14 |

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

- **[Playwright Interactive](https://github.com/openai/skills/tree/main/skills/.curated/playwright-interactive)**  
  Skill อัตomation เบราว์เซอร์แบบโต้ตอบด้วย Playwright สำหรับนำทาง คลิก สcreenshot และตรวจ UI  
  แท็ก: `Browser` `Playwright` `Testing`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Figma Generate Design](https://github.com/openai/skills/tree/main/skills/.curated/figma-generate-design)**  
  สร้างแนวคิดดีไซน์ Figma layout คอมโพเนนต์ และ visual system จากความต้องการผลิตภัณฑ์  
  แท็ก: `Figma` `Design` `UI`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[OpenAI Docs](https://github.com/openai/skills/tree/main/skills/.curated/openai-docs)**  
  ช่วย Codex ค้นหาเอกสาร OpenAI API reference SDK และรูปแบบการ integrate  
  แท็ก: `OpenAI` `Documentation` `API`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Web Design Guidelines](https://orangebot.ai/s/web-design-guidelines)**  
  แนะนำการออกแบบเว็บ layout typography สี accessibility และ responsive UI  
  แท็ก: `Web Design` `UI` `UX`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 206.0k weekly installs, 24.0k stars

- **[Brainstorming](https://orangebot.ai/s/brainstorming)**  
  brainstorm อย่างเป็นระบบสำหรับไอเดียผลิตภัณฑ์ ฟีเจอร์ แคมเปญ และการแก้ปัญหาเชิงสร้างสรรค์  
  แท็ก: `Ideation` `Planning` `Creativity`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 77.2k weekly installs, 118.4k stars

- **[Browser Use](https://orangebot.ai/s/browser-use)**  
  Skill browser-use สำหรับนำทางเว็บ กรอกฟอร์ม ดึงข้อมูล และ browsing แบบ agent  
  แท็ก: `Browser` `Automation` `Agent`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 57.4k weekly installs, 84.8k stars

- **[ImageGen](https://skillsmp.com/zh/creators/openai/skills/skills-system-imagegen)**  
  Skill สร้างภาพ OpenAI สำหรับ prompt สไตล์ แก้ไข variations และ visual assets  
  แท็ก: `Image` `Generation` `OpenAI`  
  แหล่งที่มา: SkillsMP · ความนิยม: SkillsMP แสดง 23,095 stars, 1,565 forks

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

- **[Project Planner](https://orangebot.ai/s/project-planner)**  
  แบ่งงานซับซ้อน แผนเนื้อหา ฟีเจอร์ หรือแคมเปญเป็นขั้นตอน ความเสี่ยง และ deliverable  
  แท็ก: `Planning` `Project Management` `Workflow`  
  แหล่งที่มา: OrangeBot · ความนิยม: หน้า Skill บน OrangeBot มี weekly installs, stars และ forks

- **[Eve](https://skills.cat/skills/vercel/eve)**  
  Skill เฟรมเวิร์ก Vercel AI Agent สำหรับแอป AI-native backend frontend และ prototype ที่ deploy ได้  
  แท็ก: `AI Agent` `Vercel` `SaaS`  
  แหล่งที่มา: SkillsCat · ความนิยม: หน้า SkillsCat ค้นหาได้ พร้อม GitHub source และ CLI install

- **[CLI Creator](https://github.com/openai/skills/tree/main/skills/.curated/cli-creator)**  
  สร้างเครื่องมือ CLI พร้อม parse อาร์กิวเมนต์ help subcommand และ UX ที่เป็นมิตรกับนักพัฒนา  
  แท็ก: `CLI` `Terminal` `Tooling`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Brainstorming](https://orangebot.ai/s/brainstorming)**  
  brainstorm อย่างเป็นระบบสำหรับไอเดียผลิตภัณฑ์ ฟีเจอร์ แคมเปญ และการแก้ปัญหาเชิงสร้างสรรค์  
  แท็ก: `Ideation` `Planning` `Creativity`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 77.2k weekly installs, 118.4k stars

- **[Writing Plans](https://orangebot.ai/s/writing-plans)**  
  เขียนแผน implement สเปก แบ่งงาน และ roadmap การดำเนินงานอย่างเป็นระบบ  
  แท็ก: `Planning` `Writing` `Workflow`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 41.4k weekly installs, 118.4k stars

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

- **[Next.js Master](https://www.skillsdirectory.com/skills/fratilanico-nextjs-master)**  
  Skill พัฒนา Next.js สำหรับโครงสร้างแอป API routes คอมโพเนนต์ การ deploy และ best practices  
  แท็ก: `Next.js` `React` `Frontend`  
  แหล่งที่มา: Skills Directory · ความนิยม: หน้า Skills Directory สาธารณะพร้อมความนิยม คะแนนความปลอดภัย และสัญญาณการใช้งาน

- **[Figma Generate Design](https://github.com/openai/skills/tree/main/skills/.curated/figma-generate-design)**  
  สร้างแนวคิดดีไซน์ Figma layout คอมโพเนนต์ และ visual system จากความต้องการผลิตภัณฑ์  
  แท็ก: `Figma` `Design` `UI`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Figma Implement Design](https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design)**  
  แปลงดีไซน์ Figma เป็นโค้ด frontend โครงสร้างคอมโพเนนต์ spacing และบันทึกการ implement  
  แท็ก: `Figma` `Design` `Frontend`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[OpenAI Docs](https://github.com/openai/skills/tree/main/skills/.curated/openai-docs)**  
  ช่วย Codex ค้นหาเอกสาร OpenAI API reference SDK และรูปแบบการ integrate  
  แท็ก: `OpenAI` `Documentation` `API`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[GitHub Fix CI](https://github.com/openai/skills/tree/main/skills/.curated/gh-fix-ci)**  
  วินิจฉัยและแก้ CI ล้มเหลว การตั้งค่า workflow ข้อผิดพลาดทดสอบ และปัญหา build pipeline  
  แท็ก: `CI` `GitHub` `DevOps`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[GitHub Address Comments](https://github.com/openai/skills/tree/main/skills/.curated/gh-address-comments)**  
  จัดการความคิดเห็น PR review การแก้ไขที่แนะนำ และ feedback จาก reviewer อย่างเป็นระบบ  
  แท็ก: `GitHub` `Code Review` `PR`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[GitHub CLI](https://crossaitools.com/skills/github/awesome-copilot/gh-cli)**  
  Skill อ้างอิง GitHub CLI สำหรับจัดการ repositories, issues, pull requests, Actions, projects, releases, gists, Codespaces และองค์กรจากเทอร์มินัล  
  แท็ก: `GitHub` `CLI` `Repository`  
  แหล่งที่มา: Cross AI Tools · ความนิยม: รายการ Cross AI Tools จาก github/awesome-copilot; GitHub มีประมาณ 36,306 stars และ 4,522 forks  
  ติดตั้ง: `npx skills add https://github.com/github/awesome-copilot --skill gh-cli -a codex -g`  
  หมายเหตุ: ต้องมีความเข้าใจ GitHub CLI และอาจต้องใช้ GitHub authentication หรือ token ควรตรวจสอบสิทธิ์ก่อนรันคำสั่งที่แก้ไข repo, issue หรือ pull request

- **[Cloudflare Deploy](https://github.com/openai/skills/tree/main/skills/.curated/cloudflare-deploy)**  
  deploy แอปและ static site ไปยัง Cloudflare Workers Pages และ edge infrastructure  
  แท็ก: `Cloudflare` `Deployment` `DevOps`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Netlify Deploy](https://github.com/openai/skills/tree/main/skills/.curated/netlify-deploy)**  
  deploy แอป frontend landing page และ prototype ไป Netlify พร้อมคำแนะนำ build และ routing  
  แท็ก: `Netlify` `Deployment` `DevOps`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Sentry](https://github.com/openai/skills/tree/main/skills/.curated/sentry)**  
  integrate Sentry สำหรับ error monitoring performance tracing release tracking และ debug incident  
  แท็ก: `Sentry` `Monitoring` `Errors`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Web Design Guidelines](https://orangebot.ai/s/web-design-guidelines)**  
  แนะนำการออกแบบเว็บ layout typography สี accessibility และ responsive UI  
  แท็ก: `Web Design` `UI` `UX`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 206.0k weekly installs, 24.0k stars

- **[Systematic Debugging](https://orangebot.ai/s/systematic-debugging)**  
  workflow debug อย่างเป็นระบบ reproduce bug หา root cause ตรวจสอบ fix และป้องกัน regression  
  แท็ก: `Debugging` `Engineering` `Troubleshooting`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 42.5k weekly installs, 118.4k stars

- **[Next Best Practices](https://orangebot.ai/s/next-best-practices)**  
  best practices ของ Next.js สำหรับ routing data fetching rendering performance และ production  
  แท็ก: `Next.js` `Best Practices` `Frontend`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 46.4k weekly installs, 778 stars

- **[Supabase Postgres Best Practices](https://orangebot.ai/s/supabase-postgres-best-practices)**  
  best practices Supabase Postgres สำหรับ schema RLS queries migrations และ backend data  
  แท็ก: `Supabase` `Postgres` `Database`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 54.0k weekly installs, 1.7k stars

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

- **[HyperFrames](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes/SKILL.md)**  
  Skill จุดเริ่มต้นของ HyperFrames เฟรมเวิร์ก HTML-to-video ที่ route งานวิดีโอ แอนิเมชัน motion graphics โปรโมสินค้า เว็บไซต์เป็นวิดีโอ คำบรรยาย สไลด์ และการย้ายจาก Remotion  
  แท็ก: `Video` `Animation` `HTML`  
  แหล่งที่มา: GitHub · ความนิยม: รีโพทางการ heygen-com/hyperframes บน GitHub มีประมาณ 33,674 stars และ 3,144 forks  
  ติดตั้ง: `npx skills add heygen-com/hyperframes --skill hyperframes`  
  หมายเหตุ: ต้องพึ่ง workflow ของ HyperFrames/skills CLI และอาจใช้ browser rendering, media assets, เครื่องมือแบบ FFmpeg/Puppeteer และ network checks ควรตรวจสอบสิทธิ์โปรเจกต์ก่อน preinstall

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

- **[Transcribe](https://github.com/openai/skills/tree/main/skills/.curated/transcribe)**  
  ถอดเสียงและคำพูดเป็นข้อความสำหรับการประชุม สัมภาษณ์ podcast และ workflow สื่อ  
  แท็ก: `Audio` `Transcription` `Speech`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Speech](https://github.com/openai/skills/tree/main/skills/.curated/speech)**  
  สร้างเสียงพูดธรรมชาติจากข้อความสำหรับ voiceover assistant accessibility และการผลิตสื่อ  
  แท็ก: `TTS` `Speech` `Audio`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[AI Video Generation](https://orangebot.ai/s/ai-video-generation)**  
  สร้างวิดีโอ AI จาก prompt script storyboard สำหรับการตลาด โซเชียล และงานสร้างสรรค์  
  แท็ก: `Video` `AI` `Generation`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 111.3k weekly installs, 235 stars  
  หมายเหตุ: พึ่งพา external models/API ต้องตรวจสอบค่าใช้จ่าย keys และเงื่อนไขผู้ให้บริการ

- **[ImageGen](https://skillsmp.com/zh/creators/openai/skills/skills-system-imagegen)**  
  Skill สร้างภาพ OpenAI สำหรับ prompt สไตล์ แก้ไข variations และ visual assets  
  แท็ก: `Image` `Generation` `OpenAI`  
  แหล่งที่มา: SkillsMP · ความนิยม: SkillsMP แสดง 23,095 stars, 1,565 forks

- **[Canvas Design](https://skills.cat/skills/anthropics/skills/canvas-design)**  
  Skill ออกแบบ Canvas สำหรับ layout composition design system และ creative assets  
  แท็ก: `Canvas` `Design` `Creative`  
  แหล่งที่มา: SkillsCat · ความนิยม: หน้า SkillsCat ค้นหาได้ พร้อม GitHub source และ CLI install

- **[AI Video Editing](https://skillsmp.com/creators/arcasilesgroup/ai-engineering/codex-skills-ai-video-editing)**  
  Skill ตัดต่อวิดีโอ AI สำหรับ cuts transitions captions b-roll และ post-production  
  แท็ก: `Video` `Editing` `AI`  
  แหล่งที่มา: SkillsMP · ความนิยม: SkillsMP แสดง 52 stars, 3 forks

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

- **[Playwright Interactive](https://github.com/openai/skills/tree/main/skills/.curated/playwright-interactive)**  
  Skill อัตomation เบราว์เซอร์แบบโต้ตอบด้วย Playwright สำหรับนำทาง คลิก สcreenshot และตรวจ UI  
  แท็ก: `Browser` `Playwright` `Testing`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Browser Use](https://orangebot.ai/s/browser-use)**  
  Skill browser-use สำหรับนำทางเว็บ กรอกฟอร์ม ดึงข้อมูล และ browsing แบบ agent  
  แท็ก: `Browser` `Automation` `Agent`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot แสดง 57.4k weekly installs, 84.8k stars

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

- **[Notion Research Documentation](https://github.com/openai/skills/tree/main/skills/.curated/notion-research-documentation)**  
  จัดระเบียบผลการวิจัย การอ้างอิง สรุป และเอกสารใน Notion  
  แท็ก: `Notion` `Research` `Documentation`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[PDF (OpenAI Curated)](https://github.com/openai/skills/tree/main/skills/.curated/pdf)**  
  อ่าน แยก สรุป และจัดการ PDF สำหรับรายงาน ฟอร์ม และเนื้อหาเชิงโครงสร้าง  
  แท็ก: `PDF` `Documents` `Parsing`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

### ข้อมูลและการแสดงผล

Skill สำหรับกราฟ คำอธิบายภาพ วิเคราะห์ และเล่าเรื่องด้วยข้อมูล

- **[Visualization Expert](https://orangebot.ai/s/visualization-expert)**  
  ช่วยสร้างกราฟ คำอธิบายภาพ roadmap architecture diagrams และเรื่องเล่าจากข้อมูล  
  แท็ก: `Charts` `Visualization` `Data`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot skill page with usage, stars, and forks metadata.

- **[Quant Analyst](https://www.skillsdirectory.com/skills/benjaminastera-quant-analyst)**  
  Skill วิเคราะห์เชิงปริมาณสำหรับข้อมูลตลาด factor research backtesting และ financial modeling  
  แท็ก: `Quant` `Finance` `Analysis`  
  แหล่งที่มา: Skills Directory · ความนิยม: หน้า Skills Directory สาธารณะพร้อมความนิยม คะแนนความปลอดภัย และสัญญาณการใช้งาน

- **[AI Volatility Prediction](https://www.skillsdirectory.com/skills/paulpas-ai-volatility-prediction)**  
  ใช้ AI ทำนายความผันผวนตลาดสำหรับประเมินความเสี่ยง hedging และ quant trading research  
  แท็ก: `Finance` `Risk` `ML`  
  แหล่งที่มา: Skills Directory · ความนิยม: หน้า Skills Directory สาธารณะพร้อมความนิยม คะแนนความปลอดภัย และสัญญาณการใช้งาน  
  หมายเหตุ: โดเมนการเงิน/ความเสี่ยง ต้องมี compliance review และ disclaimer ชัดเจน

- **[Apify Ecommerce](https://skillmd.ai/skills/apify-ecommerce/)**  
  Skill ข้อมูล ecommerce ด้วย Apify actors สำหรับดึงสินค้า ราคา รีวิว และ competitive intelligence  
  แท็ก: `Ecommerce` `Scraping` `Apify`  
  แหล่งที่มา: SkillMD.ai · ความนิยม: หน้า SkillMD.ai พร้อม metadata การติดตั้งและสัญญาณการใช้งาน  
  หมายเหตุ: ต้องการการเข้าถึงเครือข่ายและ API credentials ภายนอก

- **[AfrexAI Personal Finance](https://skillmd.ai/skills/afrexai-personal-finance/)**  
  Skill การเงินส่วนบุคคลสำหรับงบประมาณ ติดตามค่าใช้จ่าย เป้าหมายออมหนี้ และวิเคราะห์สุขภาพการเงิน  
  แท็ก: `Finance` `Personal Finance` `Budgeting`  
  แหล่งที่มา: SkillMD.ai · ความนิยม: หน้า SkillMD.ai พร้อม metadata การติดตั้งและสัญญาณการใช้งาน  
  หมายเหตุ: โดเมนการเงิน ต้องมี compliance review และ disclaimer ชัดเจน

- **[Jupyter Notebook](https://github.com/openai/skills/tree/main/skills/.curated/jupyter-notebook)**  
  Skill Jupyter Notebook สำหรับสำรวจข้อมูลเซลวิเคราะห์ visualization และ workflow วิจัยที่ทำซ้ำได้  
  แท็ก: `Jupyter` `Notebook` `Data`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

- **[Excel Author](https://skillsmp.com/creators/nousresearch/hermes-agent/optional-skills-finance-excel-author)**  
  Skill สร้าง Excel สำหรับ financial models สูตร pivot charts และ spreadsheet workflows  
  แท็ก: `Excel` `Finance` `Spreadsheet`  
  แหล่งที่มา: SkillsMP · ความนิยม: หน้า SkillsMP พร้อม GitHub stars, forks และ metadata การติดตั้ง  
  หมายเหตุ: โดเมนการเงิน ต้องมี compliance review และ disclaimer ชัดเจน

- **[EconFin Idea Finder](https://skills.cat/skills/brycewang-stanford/auto-empirical-research-skills/econfin-idea-finder)**  
  ค้นหาไอเดียวิจัยเศรษฐศาสตร์และการเงิน สมมติฐาน datasets และทิศทาง empirical study  
  แท็ก: `Finance` `Research` `Economics`  
  แหล่งที่มา: SkillsCat · ความนิยม: หน้า SkillsCat ค้นหาได้ พร้อม GitHub source และ CLI install  
  หมายเหตุ: โดเมนการเงิน/การวิจัย ต้องมี compliance review และ disclaimer ชัดเจน

### การตลาดและการเติบโต

Skill สำหรับ SEO คอนเทนต์เปิดตัว แคมเปญ และ workflow การเติบโต

- **[App Store Screenshots](https://orangebot.ai/s/app-store-screenshots)**  
  ช่วยสร้างภาพหน้าจอผลิตภัณฑ์ กราฟิกโปรโมต asset เปิดตัว social previews และภาพแคมเปญ  
  แท็ก: `Marketing` `Screenshots` `Launch`  
  แหล่งที่มา: OrangeBot · ความนิยม: OrangeBot skill page with usage, stars, and forks metadata.

- **[Awesome SEO Writing Skill](https://github.com/flaqai/Awesome_SEO_Writing_Skill)**  
  เปลี่ยน brief เนื้อหาเป็น workflow SEO ที่ครอบคลุมการวางโครง เขียน ตรวจสอบข้อเท็จจริง audit จัดแพ็กภาพ และส่งผ่าน Cloudflare R2 แบบเลือกใช้  
  แท็ก: `SEO` `Writing` `Content`  
  แหล่งที่มา: GitHub flaqai/Awesome_SEO_Writing_Skill · ความนิยม: รีโพซิทอรีโอเพนซอร์สที่มีเอกสารหลายภาษาและ workflow writer ที่นำกลับมาใช้กับ Codex และ Claude Code ได้

- **[SEO Audit](https://orangebot.ai/s/seo-audit)**  
  ตรวจโครงสร้างหน้า title คุณภาพเนื้อหา indexing technical SEO และโอกาสปรับปรุง  
  แท็ก: `SEO` `Marketing` `Content`  
  แหล่งที่มา: OrangeBot · ความนิยม: 57.8k weekly installs, 6,390 stars, 707 forks on OrangeBot.

- **[Copywriting](https://orangebot.ai/s/copywriting)**  
  เขียน copy โฆษณา landing page ข้อความสินค้า email marketing โพสต์โซเชียล และสคริปต์วิดีโอ  
  แท็ก: `Copy` `Ads` `Content`  
  แหล่งที่มา: OrangeBot · ความนิยม: 49.9k weekly installs, 11,596 stars, 981 forks on OrangeBot.

- **[Lottie Motion Builder](https://www.skillsdirectory.com/skills/markoblogo-lottie-motion-builder)**  
  แปลงความต้องการเป็นภาพเคลื่อนไหวมือถือ empty state แบรนด์ GIF โฆษณา และแผนแอนิเมชันหน้าเว็บ  
  แท็ก: `Motion` `Lottie` `Animation`  
  แหล่งที่มา: Skills Directory · ความนิยม: หน้า Skills Directory สาธารณะพร้อมความนิยม คะแนนความปลอดภัย และสัญญาณการใช้งาน

- **[Paid Ads](https://www.skillsdirectory.com/skills/benjaminastera-paid-ads)**  
  Skill โฆษณาแบบเสียเงินสำหรับโครงสร้างแคมเปญ targeting copy งบประมาณ และการ optimize  
  แท็ก: `Ads` `PPC` `Marketing`  
  แหล่งที่มา: Skills Directory · ความนิยม: หน้า Skills Directory สาธารณะพร้อมความนิยม คะแนนความปลอดภัย และสัญญาณการใช้งาน

- **[Campaign Plan](https://skillsmp.com/creators/anthropics/knowledge-work-plugins/marketing-skills-campaign-plan)**  
  Skill วางแผนแคมเปญการตลาด เป้าหมาย ช่องทาง ข้อความ ไทม์ไลน์ งบ และ checklist  
  แท็ก: `Marketing` `Campaign` `Planning`  
  แหล่งที่มา: SkillsMP · ความนิยม: หน้า SkillsMP พร้อม GitHub stars, forks และ metadata การติดตั้ง

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

- **[Security Threat Model](https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model)**  
  สร้าง threat model attack surface มาตรการบรรเทา และ checklist ตรวจสอบความปลอดภัย  
  แท็ก: `Security` `Threat Model` `Compliance`  
  แหล่งที่มา: GitHub openai/skills · ความนิยม: Skill curated อย่างเป็นทางการจาก openai/skills repository（~23.3k stars）

## คู่มือ Custom Skill

- **[คู่มือ Custom Skill →](GUIDE_th.md)** — เรียนรู้วิธีสร้าง ปรับ และติดตั้ง Codex Skill ของคุณเอง

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

## โปรเจกต์โอเพนซอร์สแนะนำ

- [flaqai/Awesome_SEO_Writing_Skill](https://github.com/flaqai/Awesome_SEO_Writing_Skill)
- [flaqai/awesome_claude_code_skills](https://github.com/flaqai/awesome_claude_code_skills)
- [flaqai/awesome_codex_skills](https://github.com/flaqai/awesome_codex_skills)
- [flaqai/flaq-saas-template](https://github.com/flaqai/flaq-saas-template)

---

> README นี้สร้างจาก `data/skills.json` แก้ไขไฟล์ข้อมูลแล้วรัน `npm run generate:all`
