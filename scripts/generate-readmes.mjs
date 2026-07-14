import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { anchor, currentDateInTimeZone, languageSwitcher, languages, localized } from "./languages.mjs";
import { readmeAllSectionTitle } from "./readme-section-anchors.mjs";

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), "..");
const dataPath = path.join(rootDir, "data", "skills.json");

const ui = {
  "en": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Maintained by [Flaq.ai](https://flaq.ai) — an AI-native creative platform for image, video, and chat generation.",
    "tagline": "A curated, multilingual awesome list of practical Codex skills for creative work, coding, automation, documents, and industry workflows.",
    "notice": "Skills are collected from public directories and repositories for discovery and educational purposes. If a link is broken or a listing should be removed, please open an issue.",
    "toc": "Table of Contents",
    "why": "Why This List",
    "whyBody": [
      "Codex skills are most useful when users can quickly find the right workflow for the job.",
      "This project curates practical skills, groups them by use case, and records source links, popularity signals, and preinstall notes."
    ],
    "browse": "Browse by Category",
    "featured": "Featured Skills",
    "stats": "Statistics",
    "contribute": "How to Contribute",
    "contributeBody": [
      "Open a [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue with a reachable skill link, a short description, category, source platform, and popularity evidence.",
      "For Chinese-native skills, use [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml) instead.",
      "Please mark skills that require API keys, browser control, command execution, healthcare/finance/legal review, or other sensitive permissions."
    ],
    "submitChineseSkillBadge": "[![Submit Chinese Skill](https://img.shields.io/badge/Submit%20Chinese%20Skill-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Curation Criteria",
    "curationItems": [
      "The link must be reachable and should not be a legacy error page.",
      "The skill should be useful for Codex or easy to adapt into a Codex workflow.",
      "The listing should include a clear use case and source platform.",
      "High-usage, high-download, official, or high-star entries are preferred.",
      "Risky domains and external-service dependencies must be clearly marked."
    ],
    "license": "License",
    "licenseBody": "This repository is released under the repository license. Skill names and linked content belong to their respective owners.",
    "acknowledgements": "Acknowledgements",
    "acknowledgementsBody": "Thanks to the skill directory builders, open-source maintainers, and Codex community members who make reusable agent workflows easier to discover.",
    "tags": "Tags",
    "source": "Source",
    "popularity": "Popularity",
    "notes": "Notes",
    "totalSkills": "Total skills",
    "categories": "Categories",
    "lastUpdated": "Last updated",
    "customSkillGuide": "Custom Skill Guide",
    "customSkillGuideBody": "Learn how to create, adapt, and install your own Codex skills.",
    "readmeGenerated": "This README is generated from `data/skills.json`. Edit the data file, then run `npm run generate:all`."
  },
  "zh": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "由 [Flaq.ai](https://flaq.ai) 维护 — AI 原生创作平台，提供图像、视频和对话生成服务。",
    "tagline": "一个精选、多语言、按场景分类的 Codex Skill 合集，帮助用户快速找到适合创作、编程、自动化、文档和行业工作流的 Skill。",
    "notice": "Skill 来自公开目录和开源仓库，仅用于发现和学习。如果链接失效或需要移除，请提交 issue。",
    "toc": "目录",
    "why": "为什么做这个列表",
    "whyBody": [
      "Codex Skill 的价值在于用户能快速找到适合当前任务的工作流。",
      "本项目会精选实用 Skill，按用途分类，并记录来源链接、热度依据和预装注意事项。"
    ],
    "browse": "按分类浏览",
    "featured": "精选 Skill",
    "stats": "统计",
    "contribute": "如何贡献",
    "contributeBody": [
      "通过 [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) Issue 提交，请提供可访问链接、简短简介、分类、来源平台和热度依据。",
      "中文原生 Skill 请使用 [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml) 专用模板。",
      "如果 Skill 需要 API Key、浏览器控制、命令执行，或涉及医疗/金融/法律等敏感场景，请明确标注。"
    ],
    "submitChineseSkillBadge": "[![提交中文 Skill](https://img.shields.io/badge/%E6%8F%90%E4%BA%A4%E4%B8%AD%E6%96%87%20Skill-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "收录标准",
    "curationItems": [
      "链接必须可访问，不能是 legacy 错误页。",
      "Skill 应该对 Codex 有用，或容易改造成 Codex 工作流。",
      "条目需要有清晰用途和来源平台。",
      "优先收录高使用量、高下载量、官方精选或高 stars 条目。",
      "高风险领域和外部服务依赖必须明确标注。"
    ],
    "license": "许可证",
    "licenseBody": "本仓库遵循仓库许可证发布。Skill 名称和链接内容归各自所有者所有。",
    "acknowledgements": "致谢",
    "acknowledgementsBody": "感谢各类 Skill 目录、开源维护者和 Codex 社区，让可复用 Agent 工作流更容易被发现。",
    "tags": "标签",
    "source": "来源",
    "popularity": "热度",
    "notes": "注意",
    "totalSkills": "Skill 总数",
    "categories": "分类数",
    "lastUpdated": "最后更新",
    "customSkillGuide": "自定义 Skill 指南",
    "customSkillGuideBody": "学习如何创建、改编并安装你自己的 Codex Skill。",
    "readmeGenerated": "本文档由 `data/skills.json` 生成。请编辑数据文件后运行 `npm run generate:all`。"
  },
  "tw": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "由 [Flaq.ai](https://flaq.ai) 維護 — AI 原生創作平台，提供圖像、影片和對話生成服務。",
    "tagline": "精選、多語言、按場景分類的 Codex Skill 合集，幫助使用者快速找到適合創作、程式開發、自動化、文件與產業工作流的 Skill。",
    "notice": "Skill 來自公開目錄和開源倉庫，僅用於探索和學習。如果連結失效或需要移除，請提交 issue。",
    "toc": "目錄",
    "why": "為什麼做這個列表",
    "whyBody": [
      "Codex Skill 的價值在於使用者能快速找到適合當前任務的工作流。",
      "本專案精選實用 Skill，按用途分類，並記錄來源連結、熱度依據和預裝注意事項。"
    ],
    "browse": "按分類瀏覽",
    "featured": "精選 Skill",
    "stats": "統計",
    "contribute": "如何貢獻",
    "contributeBody": [
      "透過 [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) Issue 提交，請提供可訪問連結、簡短介紹、分類、來源平台和熱度依據。",
      "中文原生 Skill 請使用 [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml) 專用模板。",
      "如果 Skill 需要 API Key、瀏覽器控制、命令執行，或涉及醫療/金融/法律等敏感場景，請明確標註。"
    ],
    "submitChineseSkillBadge": "[![提交中文 Skill](https://img.shields.io/badge/%E6%8F%90%E4%BA%A4%E4%B8%AD%E6%96%87%20Skill-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "收錄標準",
    "curationItems": [
      "連結必須可訪問，不能是 legacy 錯誤頁。",
      "Skill 應該對 Codex 有用，或容易改造成 Codex 工作流。",
      "條目需要有清晰用途和來源平台。",
      "優先收錄高使用量、高下載量、官方精選或高 stars 條目。",
      "高風險領域和外部服務依賴必須明確標註。"
    ],
    "license": "授權",
    "licenseBody": "本倉庫依照倉庫授權發布。Skill 名稱和連結內容歸各自所有者所有。",
    "acknowledgements": "致謝",
    "acknowledgementsBody": "感謝各類 Skill 目錄、開源維護者和 Codex 社群，讓可復用 Agent 工作流更容易被發現。",
    "tags": "標籤",
    "source": "來源",
    "popularity": "熱度",
    "notes": "注意",
    "totalSkills": "Skill 總數",
    "categories": "分類數",
    "lastUpdated": "最後更新",
    "customSkillGuide": "自訂 Skill 指南",
    "customSkillGuideBody": "學習如何建立、改編並安裝你自己的 Codex Skill。",
    "readmeGenerated": "本文檔由 `data/skills.json` 生成。請編輯資料檔後執行 `npm run generate:all`。"
  },
  "ja": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "[Flaq.ai](https://flaq.ai) がメンテナンス — 画像、動画、チャット生成のための AI ネイティブ創作プラットフォーム。",
    "tagline": "創作、コーディング、自動化、ドキュメント、業界ワークフローに役立つ Codex Skill を多言語で整理した厳選リスト。",
    "notice": "Skill は公開ディレクトリとリポジトリから収集しています。リンク切れや削除依頼は issue でお知らせください。",
    "toc": "目次",
    "why": "このリストについて",
    "whyBody": [
      "Codex Skill は、ユーザーが目的に合うワークフローを素早く見つけられるほど価値が高まります。",
      "このプロジェクトは実用的な Skill を用途別に整理し、リンク、人気指標、プリインストール時の注意点を記録します。"
    ],
    "browse": "カテゴリ別に見る",
    "featured": "注目 Skill",
    "stats": "統計",
    "contribute": "貢献方法",
    "contributeBody": [
      "[Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue から、到達可能なリンク、短い説明、カテゴリ、提供元、人気指標を送ってください。",
      "中国語ネイティブ Skill は [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml) 専用テンプレートを使用してください。",
      "API Key、ブラウザ制御、コマンド実行、医療/金融/法務レビューなどが必要な場合は明記してください。"
    ],
    "submitChineseSkillBadge": "[![中国語Skill投稿](https://img.shields.io/badge/%E4%B8%AD%E5%9B%BD%E8%AA%9ESkill%E6%8A%95%E7%A8%BF-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "収録基準",
    "curationItems": [
      "リンクは到達可能で、legacy エラーページでないこと。",
      "Codex に有用、または Codex ワークフローへ容易に適用できること。",
      "用途と提供元が明確であること。",
      "利用量、ダウンロード、公式性、stars が高いものを優先します。",
      "高リスク領域や外部サービス依存は明記すること。"
    ],
    "license": "ライセンス",
    "licenseBody": "このリポジトリはリポジトリのライセンスに従います。Skill 名称とリンク先コンテンツは各所有者に帰属します。",
    "acknowledgements": "謝辞",
    "acknowledgementsBody": "再利用可能な Agent ワークフローを見つけやすくしてくれる Skill ディレクトリ運営者、OSS メンテナ、Codex コミュニティに感謝します。",
    "tags": "タグ",
    "source": "ソース",
    "popularity": "人気指標",
    "notes": "メモ",
    "totalSkills": "Skill 数",
    "categories": "カテゴリ数",
    "lastUpdated": "最終更新",
    "customSkillGuide": "カスタム Skill ガイド",
    "customSkillGuideBody": "自分用の Codex Skill を作成・改変・インストールする方法を学びます。",
    "readmeGenerated": "この README は `data/skills.json` から生成されています。データを編集後、`npm run generate:all` を実行してください。"
  },
  "ko": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "[Flaq.ai](https://flaq.ai)에서 관리 — 이미지, 비디오, 채팅 생성을 위한 AI 네이티브 창작 플랫폼.",
    "tagline": "창작, 코딩, 자동화, 문서, 산업 워크플로에 유용한 Codex Skill을 다국어로 큐레이션한 목록입니다.",
    "notice": "Skill은 공개 디렉터리와 저장소에서 수집되었습니다. 링크 오류나 삭제 요청은 issue로 알려주세요.",
    "toc": "목차",
    "why": "이 목록을 만든 이유",
    "whyBody": [
      "Codex Skill은 사용자가 작업에 맞는 워크플로를 빠르게 찾을 때 가장 유용합니다.",
      "이 프로젝트는 실용적인 Skill을 용도별로 묶고 링크, 인기 지표, 사전 설치 주의점을 기록합니다."
    ],
    "browse": "카테고리별 보기",
    "featured": "추천 Skill",
    "stats": "통계",
    "contribute": "기여 방법",
    "contributeBody": [
      "[Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue로 접근 가능한 링크, 짧은 설명, 카테고리, 출처, 인기 근거를 제출하세요.",
      "중국어 네이티브 Skill은 [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml) 전용 템플릿을 사용하세요.",
      "API Key, 브라우저 제어, 명령 실행, 의료/금융/법률 검토가 필요한 경우 명확히 표시하세요."
    ],
    "submitChineseSkillBadge": "[![중국어 Skill 제출](https://img.shields.io/badge/%EC%A4%91%EA%B5%AD%EC%96%B4%20Skill%20%EC%A0%9C%EC%B6%9C-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "선정 기준",
    "curationItems": [
      "링크는 접근 가능해야 하며 legacy 오류 페이지가 아니어야 합니다.",
      "Codex에 유용하거나 Codex 워크플로로 쉽게 적용할 수 있어야 합니다.",
      "명확한 사용 사례와 출처가 있어야 합니다.",
      "사용량, 다운로드, 공식 선정, stars가 높은 항목을 우선합니다.",
      "위험 도메인과 외부 서비스 의존성은 명확히 표시해야 합니다."
    ],
    "license": "라이선스",
    "licenseBody": "이 저장소는 저장소 라이선스에 따라 배포됩니다. Skill 이름과 링크된 콘텐츠는 각 소유자에게 속합니다.",
    "acknowledgements": "감사의 말",
    "acknowledgementsBody": "재사용 가능한 Agent 워크플로를 쉽게 찾을 수 있게 해 준 Skill 디렉터리 운영자, 오픈소스 메인테이너, Codex 커뮤니티에 감사합니다.",
    "tags": "태그",
    "source": "출처",
    "popularity": "인기 지표",
    "notes": "참고",
    "totalSkills": "Skill 수",
    "categories": "카테고리 수",
    "lastUpdated": "마지막 업데이트",
    "customSkillGuide": "커스텀 Skill 가이드",
    "customSkillGuideBody": "나만의 Codex Skill을 만들고, 개조하고, 설치하는 방법을 배웁니다.",
    "readmeGenerated": "이 README는 `data/skills.json`에서 생성됩니다. 데이터를 수정한 뒤 `npm run generate:all`를 실행하세요."
  },
  "th": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "ดูแลโดย [Flaq.ai](https://flaq.ai) — แพลตฟอร์มสร้างสรรค์ AI-native สำหรับภาพ วิดีโอ และแชต",
    "tagline": "รายการ Codex Skill แบบคัดสรรหลายภาษา สำหรับงานสร้างสรรค์ โค้ด อัตโนมัติ เอกสาร และ workflow เฉพาะอุตสาหกรรม",
    "notice": "Skill ถูกรวบรวมจาก directory และ repository สาธารณะเพื่อการค้นพบและการเรียนรู้ หากลิงก์เสียหรือต้องการให้ลบ โปรดเปิด issue",
    "toc": "สารบัญ",
    "why": "ทำไมต้องมีรายการนี้",
    "whyBody": [
      "Codex Skill มีประโยชน์ที่สุดเมื่อผู้ใช้หา workflow ที่เหมาะกับงานได้อย่างรวดเร็ว",
      "โปรเจกต์นี้คัดสรร Skill ที่ใช้ได้จริง จัดตาม use case และบันทึกลิงก์ แหล่งที่มา ตัวชี้วัดความนิยม และข้อควรระวังก่อนติดตั้ง"
    ],
    "browse": "ดูตามหมวดหมู่",
    "featured": "Skill แนะนำ",
    "stats": "สถิติ",
    "contribute": "วิธีมีส่วนร่วม",
    "contributeBody": [
      "เปิด [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue พร้อมลิงก์ที่เข้าถึงได้ คำอธิบายสั้น หมวดหมู่ แหล่งที่มา และหลักฐานความนิยม",
      "Skill ภาษาจีนโดยกำเนิด ให้ใช้เทมเพลต [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
      "โปรดระบุหาก Skill ต้องใช้ API key การควบคุมเบราว์เซอร์ การรันคำสั่ง หรือเกี่ยวข้องกับการแพทย์ การเงิน กฎหมาย หรือสิทธิ์อ่อนไหวอื่น ๆ"
    ],
    "submitChineseSkillBadge": "[![ส่ง Skill จีน](https://img.shields.io/badge/%E0%B8%AA%E0%B9%88%E0%B8%87%20Skill%20%E0%B8%88%E0%B8%B5%E0%B8%99-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "เกณฑ์การคัดเลือก",
    "curationItems": [
      "ลิงก์ต้องเข้าถึงได้และไม่ใช่หน้า legacy error",
      "Skill ควรมีประโยชน์กับ Codex หรือดัดแปลงเป็น workflow ของ Codex ได้ง่าย",
      "รายการควรมี use case และแหล่งที่มาชัดเจน",
      "ให้ความสำคัญกับรายการที่มี usage/download/official/stars สูง",
      "โดเมนเสี่ยงและ dependency ภายนอกต้องระบุชัดเจน"
    ],
    "license": "สัญญาอนุญาต",
    "licenseBody": "Repository นี้เผยแพร่ภายใต้ license ของ repo ชื่อ Skill และเนื้อหาที่ลิงก์เป็นของเจ้าของเดิม",
    "acknowledgements": "ขอบคุณ",
    "acknowledgementsBody": "ขอบคุณผู้สร้าง skill directory, maintainer open-source และชุมชน Codex ที่ทำให้ workflow ของ Agent ค้นหาได้ง่ายขึ้น",
    "tags": "แท็ก",
    "source": "แหล่งที่มา",
    "popularity": "ความนิยม",
    "notes": "หมายเหตุ",
    "totalSkills": "จำนวน Skill",
    "categories": "จำนวนหมวดหมู่",
    "lastUpdated": "อัปเดตล่าสุด",
    "customSkillGuide": "คู่มือ Custom Skill",
    "customSkillGuideBody": "เรียนรู้วิธีสร้าง ปรับ และติดตั้ง Codex Skill ของคุณเอง",
    "readmeGenerated": "README นี้สร้างจาก `data/skills.json` แก้ไขไฟล์ข้อมูลแล้วรัน `npm run generate:all`"
  },
  "vi": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Được duy trì bởi [Flaq.ai](https://flaq.ai) — nền tảng sáng tạo AI-native cho tạo ảnh, video và chat.",
    "tagline": "Danh sách Codex Skill được tuyển chọn, đa ngôn ngữ, cho sáng tạo, lập trình, tự động hóa, tài liệu và workflow theo ngành.",
    "notice": "Skill được thu thập từ thư mục và kho công khai cho mục đích khám phá và học tập. Nếu link hỏng hoặc cần gỡ, hãy mở issue.",
    "toc": "Mục lục",
    "why": "Vì sao có danh sách này",
    "whyBody": [
      "Codex Skill hữu ích nhất khi người dùng nhanh chóng tìm được workflow phù hợp với công việc.",
      "Dự án này tuyển chọn Skill thực tế, nhóm theo use case, và ghi lại link nguồn, tín hiệu phổ biến, ghi chú cài sẵn."
    ],
    "browse": "Duyệt theo danh mục",
    "featured": "Skill nổi bật",
    "stats": "Thống kê",
    "contribute": "Cách đóng góp",
    "contributeBody": [
      "Mở [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue với link truy cập được, mô tả ngắn, danh mục, nguồn và bằng chứng phổ biến.",
      "Skill gốc tiếng Trung hãy dùng mẫu [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Hãy đánh dấu Skill cần API key, điều khiển trình duyệt, chạy lệnh, hoặc cần xem xét y tế/tài chính/pháp lý."
    ],
    "submitChineseSkillBadge": "[![Gửi Skill tiếng Trung](https://img.shields.io/badge/G%E1%BB%ADi%20Skill%20ti%E1%BA%BFng%20Trung-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Tiêu chí tuyển chọn",
    "curationItems": [
      "Link phải truy cập được và không phải trang lỗi legacy.",
      "Skill nên hữu ích cho Codex hoặc dễ chuyển thành workflow Codex.",
      "Mỗi mục cần use case và nguồn rõ ràng.",
      "Ưu tiên mục có usage/download/official/stars cao.",
      "Miền rủi ro và phụ thuộc dịch vụ ngoài phải được ghi rõ."
    ],
    "license": "Giấy phép",
    "licenseBody": "Repo này phát hành theo giấy phép của repository. Tên Skill và nội dung liên kết thuộc về chủ sở hữu tương ứng.",
    "acknowledgements": "Lời cảm ơn",
    "acknowledgementsBody": "Cảm ơn các nhà xây dựng thư mục Skill, maintainer open-source và cộng đồng Codex đã giúp workflow Agent dễ khám phá hơn.",
    "tags": "Thẻ",
    "source": "Nguồn",
    "popularity": "Độ phổ biến",
    "notes": "Ghi chú",
    "totalSkills": "Tổng số Skill",
    "categories": "Số danh mục",
    "lastUpdated": "Cập nhật cuối",
    "customSkillGuide": "Hướng dẫn Custom Skill",
    "customSkillGuideBody": "Học cách tạo, chỉnh sửa và cài đặt Codex Skill của riêng bạn.",
    "readmeGenerated": "README này được tạo từ `data/skills.json`. Hãy sửa file dữ liệu rồi chạy `npm run generate:all`."
  },
  "id": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Dikelola oleh [Flaq.ai](https://flaq.ai) — platform kreatif AI-native untuk generasi gambar, video, dan chat.",
    "tagline": "Daftar Codex Skill pilihan dan multibahasa untuk kerja kreatif, coding, otomasi, dokumen, dan workflow industri.",
    "notice": "Skill dikumpulkan dari direktori dan repositori publik untuk discovery dan edukasi. Jika link rusak atau perlu dihapus, buka issue.",
    "toc": "Daftar Isi",
    "why": "Mengapa Daftar Ini Ada",
    "whyBody": [
      "Codex Skill paling berguna saat pengguna cepat menemukan workflow yang tepat.",
      "Proyek ini mengurasi Skill praktis, mengelompokkan berdasarkan use case, dan mencatat link sumber, sinyal popularitas, serta catatan preinstall."
    ],
    "browse": "Telusuri berdasarkan Kategori",
    "featured": "Skill Unggulan",
    "stats": "Statistik",
    "contribute": "Cara Berkontribusi",
    "contributeBody": [
      "Buka issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) dengan link yang dapat diakses, deskripsi singkat, kategori, platform sumber, dan bukti popularitas.",
      "Untuk Skill native Tiongkok, gunakan template [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Tandai Skill yang memerlukan API key, kontrol browser, eksekusi command, atau review kesehatan/keuangan/hukum."
    ],
    "submitChineseSkillBadge": "[![Kirim Skill Tiongkok](https://img.shields.io/badge/Kirim%20Skill%20Tiongkok-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Kriteria Kurasi",
    "curationItems": [
      "Link harus dapat diakses dan bukan halaman legacy error.",
      "Skill harus berguna untuk Codex atau mudah diadaptasi menjadi workflow Codex.",
      "Listing harus punya use case dan platform sumber yang jelas.",
      "Entri dengan usage/download/official/stars tinggi diprioritaskan.",
      "Domain berisiko dan dependensi layanan eksternal harus ditandai jelas."
    ],
    "license": "Lisensi",
    "licenseBody": "Repository ini dirilis di bawah lisensi repository. Nama Skill dan konten tertaut milik pemilik masing-masing.",
    "acknowledgements": "Ucapan Terima Kasih",
    "acknowledgementsBody": "Terima kasih kepada pembuat direktori Skill, maintainer open-source, dan komunitas Codex yang membuat workflow Agent mudah ditemukan.",
    "tags": "Tag",
    "source": "Sumber",
    "popularity": "Popularitas",
    "notes": "Catatan",
    "totalSkills": "Total Skill",
    "categories": "Kategori",
    "lastUpdated": "Terakhir diperbarui",
    "customSkillGuide": "Panduan Custom Skill",
    "customSkillGuideBody": "Pelajari cara membuat, menyesuaikan, dan menginstal Codex Skill Anda sendiri.",
    "readmeGenerated": "README ini dibuat dari `data/skills.json`. Edit file data lalu jalankan `npm run generate:all`."
  },
  "es": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Mantenido por [Flaq.ai](https://flaq.ai) — plataforma creativa AI-native para generación de imagen, video y chat.",
    "tagline": "Una lista awesome, curada y multilingüe de Skills prácticos para Codex en creatividad, programación, automatización, documentos y flujos por industria.",
    "notice": "Los Skills se recopilan de directorios y repositorios públicos para descubrimiento y educación. Si un enlace falla o debe retirarse, abre un issue.",
    "toc": "Tabla de contenidos",
    "why": "Por qué existe esta lista",
    "whyBody": [
      "Los Codex Skills son más útiles cuando el usuario encuentra rápido el workflow correcto.",
      "Este proyecto cura Skills prácticos, los agrupa por caso de uso y registra enlaces, señales de popularidad y notas de preinstalación."
    ],
    "browse": "Explorar por categoría",
    "featured": "Skills destacados",
    "stats": "Estadísticas",
    "contribute": "Cómo contribuir",
    "contributeBody": [
      "Abre un issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) con un enlace accesible, descripción corta, categoría, plataforma fuente y evidencia de popularidad.",
      "Para Skills nativos en chino, usa la plantilla [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Marca Skills que requieran API keys, control del navegador, ejecución de comandos o revisión médica/financiera/legal."
    ],
    "submitChineseSkillBadge": "[![Enviar Skill chino](https://img.shields.io/badge/Enviar%20Skill%20chino-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Criterios de curación",
    "curationItems": [
      "El enlace debe ser accesible y no una página legacy de error.",
      "El Skill debe ser útil para Codex o fácil de adaptar a un workflow Codex.",
      "La entrada debe incluir caso de uso y fuente claros.",
      "Se prefieren entradas con alto uso, descargas, respaldo oficial o stars.",
      "Dominios de riesgo y dependencias externas deben marcarse claramente."
    ],
    "license": "Licencia",
    "licenseBody": "Este repositorio se publica bajo la licencia del repositorio. Los nombres de Skills y contenidos enlazados pertenecen a sus dueños.",
    "acknowledgements": "Agradecimientos",
    "acknowledgementsBody": "Gracias a los creadores de directorios de Skills, mantenedores open-source y comunidad Codex por facilitar el descubrimiento de workflows reutilizables.",
    "tags": "Etiquetas",
    "source": "Fuente",
    "popularity": "Popularidad",
    "notes": "Notas",
    "totalSkills": "Total de Skills",
    "categories": "Categorías",
    "lastUpdated": "Última actualización",
    "customSkillGuide": "Guía de Custom Skill",
    "customSkillGuideBody": "Aprende a crear, adaptar e instalar tus propios Codex Skills.",
    "readmeGenerated": "Este README se genera desde `data/skills.json`. Edita el archivo de datos y ejecuta `npm run generate:all`."
  },
  "fr": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Maintenu par [Flaq.ai](https://flaq.ai) — plateforme créative AI-native pour génération d’images, vidéos et chat.",
    "tagline": "Une liste awesome, multilingue et sélectionnée de Skills Codex pratiques pour création, code, automatisation, documents et workflows métier.",
    "notice": "Les Skills sont collectés depuis des annuaires et dépôts publics pour la découverte et l’apprentissage. Si un lien est cassé ou doit être retiré, ouvrez une issue.",
    "toc": "Sommaire",
    "why": "Pourquoi cette liste",
    "whyBody": [
      "Les Codex Skills sont plus utiles quand les utilisateurs trouvent vite le bon workflow.",
      "Ce projet sélectionne des Skills pratiques, les classe par usage et note les liens, signaux de popularité et points de préinstallation."
    ],
    "browse": "Parcourir par catégorie",
    "featured": "Skills en vedette",
    "stats": "Statistiques",
    "contribute": "Comment contribuer",
    "contributeBody": [
      "Ouvrez une issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) avec lien accessible, courte description, catégorie, source et preuve de popularité.",
      "Pour les Skills natifs chinois, utilisez le modèle [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Signalez les Skills nécessitant API keys, contrôle navigateur, exécution de commandes ou revue santé/finance/juridique."
    ],
    "submitChineseSkillBadge": "[![Soumettre Skill chinois](https://img.shields.io/badge/Soumettre%20Skill%20chinois-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Critères de sélection",
    "curationItems": [
      "Le lien doit être accessible et ne pas être une page legacy d’erreur.",
      "Le Skill doit être utile à Codex ou facile à adapter à un workflow Codex.",
      "L’entrée doit avoir un usage et une source clairs.",
      "Priorité aux entrées à fort usage, téléchargements, statut officiel ou stars.",
      "Les domaines à risque et dépendances externes doivent être clairement indiqués."
    ],
    "license": "Licence",
    "licenseBody": "Ce dépôt est publié sous la licence du dépôt. Les noms de Skills et contenus liés appartiennent à leurs propriétaires.",
    "acknowledgements": "Remerciements",
    "acknowledgementsBody": "Merci aux créateurs d’annuaires de Skills, mainteneurs open-source et membres de la communauté Codex qui facilitent la découverte de workflows Agent réutilisables.",
    "tags": "Tags",
    "source": "Source",
    "popularity": "Popularité",
    "notes": "Notes",
    "totalSkills": "Total Skills",
    "categories": "Catégories",
    "lastUpdated": "Dernière mise à jour",
    "customSkillGuide": "Guide Custom Skill",
    "customSkillGuideBody": "Apprenez à créer, adapter et installer vos propres Codex Skills.",
    "readmeGenerated": "Ce README est généré depuis `data/skills.json`. Modifiez le fichier de données puis exécutez `npm run generate:all`."
  },
  "de": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Gepflegt von [Flaq.ai](https://flaq.ai) — einer AI-nativen Kreativplattform für Bild-, Video- und Chat-Generierung.",
    "tagline": "Eine kuratierte, mehrsprachige Awesome-Liste praktischer Codex Skills für Kreativarbeit, Coding, Automatisierung, Dokumente und Branchen-Workflows.",
    "notice": "Skills stammen aus öffentlichen Verzeichnissen und Repositories. Wenn ein Link defekt ist oder entfernt werden soll, öffne bitte ein Issue.",
    "toc": "Inhaltsverzeichnis",
    "why": "Warum diese Liste",
    "whyBody": [
      "Codex Skills sind am nützlichsten, wenn Nutzer schnell den passenden Workflow finden.",
      "Dieses Projekt kuratiert praktische Skills, gruppiert sie nach Anwendungsfall und dokumentiert Links, Popularitätssignale und Preinstall-Hinweise."
    ],
    "browse": "Nach Kategorie durchsuchen",
    "featured": "Ausgewählte Skills",
    "stats": "Statistiken",
    "contribute": "Mitwirken",
    "contributeBody": [
      "Öffne ein [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) Issue mit erreichbarem Link, kurzer Beschreibung, Kategorie, Quelle und Popularitätsnachweis.",
      "Für chinesisch-native Skills nutze die Vorlage [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Markiere Skills mit API Keys, Browsersteuerung, Befehlsausführung oder Gesundheits-/Finanz-/Rechtsprüfung."
    ],
    "submitChineseSkillBadge": "[![Chinesisch Skill](https://img.shields.io/badge/Chinesisch%20Skill-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Kurationskriterien",
    "curationItems": [
      "Der Link muss erreichbar sein und darf keine Legacy-Fehlerseite sein.",
      "Der Skill sollte für Codex nützlich oder leicht in einen Codex-Workflow übertragbar sein.",
      "Der Eintrag braucht klaren Use Case und Quelle.",
      "Hohe Nutzung, Downloads, offizieller Status oder viele Stars werden bevorzugt.",
      "Risikodomänen und externe Service-Abhängigkeiten müssen klar markiert sein."
    ],
    "license": "Lizenz",
    "licenseBody": "Dieses Repository steht unter der Repository-Lizenz. Skill-Namen und verlinkte Inhalte gehören ihren jeweiligen Eigentümern.",
    "acknowledgements": "Danksagung",
    "acknowledgementsBody": "Danke an Skill-Verzeichnis-Ersteller, Open-Source-Maintainer und die Codex-Community, die wiederverwendbare Agent-Workflows leichter auffindbar machen.",
    "tags": "Tags",
    "source": "Quelle",
    "popularity": "Popularität",
    "notes": "Hinweise",
    "totalSkills": "Skills gesamt",
    "categories": "Kategorien",
    "lastUpdated": "Zuletzt aktualisiert",
    "customSkillGuide": "Custom-Skill-Leitfaden",
    "customSkillGuideBody": "Lerne, eigene Codex Skills zu erstellen, anzupassen und zu installieren.",
    "readmeGenerated": "Dieses README wird aus `data/skills.json` generiert. Bearbeite die Datendatei und führe `npm run generate:all` aus."
  },
  "it": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Mantenuto da [Flaq.ai](https://flaq.ai) — piattaforma creativa AI-native per generazione di immagini, video e chat.",
    "tagline": "Una lista awesome, curata e multilingue di Skill Codex pratici per creatività, coding, automazione, documenti e workflow di settore.",
    "notice": "Gli Skill sono raccolti da directory e repository pubblici per scoperta e apprendimento. Se un link è rotto o va rimosso, apri una issue.",
    "toc": "Indice",
    "why": "Perché questa lista",
    "whyBody": [
      "I Codex Skill sono più utili quando gli utenti trovano rapidamente il workflow giusto.",
      "Questo progetto cura Skill pratici, li raggruppa per use case e registra link, segnali di popolarità e note di preinstallazione."
    ],
    "browse": "Sfoglia per categoria",
    "featured": "Skill in evidenza",
    "stats": "Statistiche",
    "contribute": "Come contribuire",
    "contributeBody": [
      "Apri una issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) con link raggiungibile, breve descrizione, categoria, fonte e prova di popolarità.",
      "Per Skill native in cinese usa il template [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Segnala Skill che richiedono API key, controllo browser, esecuzione comandi o review medica/finanziaria/legale."
    ],
    "submitChineseSkillBadge": "[![Invia Skill cinese](https://img.shields.io/badge/Invia%20Skill%20cinese-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Criteri di selezione",
    "curationItems": [
      "Il link deve essere raggiungibile e non una pagina legacy di errore.",
      "Lo Skill deve essere utile per Codex o facile da adattare a un workflow Codex.",
      "La voce deve avere use case e fonte chiari.",
      "Sono preferite voci con alto uso, download, status ufficiale o stars.",
      "Domini rischiosi e dipendenze esterne devono essere indicati chiaramente."
    ],
    "license": "Licenza",
    "licenseBody": "Questo repository è rilasciato sotto la licenza del repository. Nomi Skill e contenuti collegati appartengono ai rispettivi proprietari.",
    "acknowledgements": "Ringraziamenti",
    "acknowledgementsBody": "Grazie ai creatori di directory Skill, maintainer open-source e community Codex che rendono più scopribili workflow Agent riutilizzabili.",
    "tags": "Tag",
    "source": "Fonte",
    "popularity": "Popolarità",
    "notes": "Note",
    "totalSkills": "Skill totali",
    "categories": "Categorie",
    "lastUpdated": "Ultimo aggiornamento",
    "customSkillGuide": "Guida Custom Skill",
    "customSkillGuideBody": "Impara a creare, adattare e installare i tuoi Codex Skill.",
    "readmeGenerated": "Questo README è generato da `data/skills.json`. Modifica il file dati e poi esegui `npm run generate:all`."
  },
  "pt": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Mantido por [Flaq.ai](https://flaq.ai) — plataforma criativa AI-native para geração de imagem, vídeo e chat.",
    "tagline": "Uma lista awesome, curada e multilíngue de Codex Skills práticos para criação, código, automação, documentos e workflows setoriais.",
    "notice": "Skills são coletados de diretórios e repositórios públicos para descoberta e educação. Se um link estiver quebrado ou precisar remoção, abra uma issue.",
    "toc": "Sumário",
    "why": "Por que esta lista",
    "whyBody": [
      "Codex Skills são mais úteis quando usuários encontram rapidamente o workflow certo.",
      "Este projeto cura Skills práticos, agrupa por caso de uso e registra links, sinais de popularidade e notas de pré-instalação."
    ],
    "browse": "Navegar por categoria",
    "featured": "Skills em destaque",
    "stats": "Estatísticas",
    "contribute": "Como contribuir",
    "contributeBody": [
      "Abra uma issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) com link acessível, descrição curta, categoria, fonte e evidência de popularidade.",
      "Para Skills nativos em chinês, use o template [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Marque Skills que exigem API keys, controle de navegador, execução de comandos ou revisão médica/financeira/legal."
    ],
    "submitChineseSkillBadge": "[![Enviar Skill chinês](https://img.shields.io/badge/Enviar%20Skill%20chin%C3%AAs-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Critérios de curadoria",
    "curationItems": [
      "O link deve ser acessível e não uma página legacy de erro.",
      "O Skill deve ser útil para Codex ou fácil de adaptar a um workflow Codex.",
      "A entrada deve ter caso de uso e fonte claros.",
      "São preferidas entradas com alto uso, downloads, status oficial ou stars.",
      "Domínios de risco e dependências externas devem ser marcados claramente."
    ],
    "license": "Licença",
    "licenseBody": "Este repositório é lançado sob a licença do repositório. Nomes de Skills e conteúdos vinculados pertencem aos respectivos donos.",
    "acknowledgements": "Agradecimentos",
    "acknowledgementsBody": "Obrigado aos criadores de diretórios de Skills, mantenedores open-source e comunidade Codex por facilitar a descoberta de workflows Agent reutilizáveis.",
    "tags": "Tags",
    "source": "Fonte",
    "popularity": "Popularidade",
    "notes": "Notas",
    "totalSkills": "Total de Skills",
    "categories": "Categorias",
    "lastUpdated": "Última atualização",
    "customSkillGuide": "Guia de Custom Skill",
    "customSkillGuideBody": "Aprenda a criar, adaptar e instalar seus próprios Codex Skills.",
    "readmeGenerated": "Este README é gerado a partir de `data/skills.json`. Edite o arquivo de dados e execute `npm run generate:all`."
  },
  "ru": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "Поддерживается [Flaq.ai](https://flaq.ai) — AI-native платформой для генерации изображений, видео и чата.",
    "tagline": "Кураторский многоязычный awesome-список практичных Codex Skills для креатива, кода, автоматизации, документов и отраслевых workflows.",
    "notice": "Skills собраны из публичных каталогов и репозиториев для поиска и обучения. Если ссылка сломана или запись нужно удалить, откройте issue.",
    "toc": "Содержание",
    "why": "Зачем этот список",
    "whyBody": [
      "Codex Skills полезнее всего, когда пользователь быстро находит нужный workflow.",
      "Проект отбирает практичные Skills, группирует их по сценариям и фиксирует ссылки, признаки популярности и заметки по предустановке."
    ],
    "browse": "Просмотр по категориям",
    "featured": "Избранные Skills",
    "stats": "Статистика",
    "contribute": "Как внести вклад",
    "contributeBody": [
      "Откройте issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) с доступной ссылкой, кратким описанием, категорией, источником и доказательством популярности.",
      "Для китайскоязычных Skills используйте шаблон [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "Отмечайте Skills, которым нужны API keys, управление браузером, выполнение команд или медицинская/финансовая/юридическая проверка."
    ],
    "submitChineseSkillBadge": "[![Китайский Skill](https://img.shields.io/badge/%D0%9A%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20Skill-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "Критерии отбора",
    "curationItems": [
      "Ссылка должна быть доступна и не вести на legacy-страницу ошибки.",
      "Skill должен быть полезен для Codex или легко адаптироваться в Codex workflow.",
      "Запись должна иметь понятный сценарий и источник.",
      "Предпочтение — высокой usage/download, официальному статусу или высоким stars.",
      "Рискованные домены и внешние зависимости нужно явно отмечать."
    ],
    "license": "Лицензия",
    "licenseBody": "Репозиторий распространяется по его лицензии. Названия Skills и связанный контент принадлежат их владельцам.",
    "acknowledgements": "Благодарности",
    "acknowledgementsBody": "Спасибо создателям каталогов Skill, open-source мейнтейнерам и сообществу Codex за то, что переиспользуемые Agent workflows легче находить.",
    "tags": "Теги",
    "source": "Источник",
    "popularity": "Популярность",
    "notes": "Заметки",
    "totalSkills": "Всего Skills",
    "categories": "Категории",
    "lastUpdated": "Последнее обновление",
    "customSkillGuide": "Руководство по Custom Skill",
    "customSkillGuideBody": "Узнайте, как создавать, адаптировать и устанавливать собственные Codex Skills.",
    "readmeGenerated": "Этот README сгенерирован из `data/skills.json`. Измените файл данных и выполните `npm run generate:all`."
  },
  "ar": {
    "title": "Awesome Codex Skills",
    "maintainedBy": "تحت صيانة [Flaq.ai](https://flaq.ai) — منصة إبداع AI-native لتوليد الصور والفيديو والدردشة.",
    "tagline": "قائمة awesome منتقاة ومتعددة اللغات لمهارات Codex العملية للإبداع والبرمجة والأتمتة والمستندات وسير العمل المتخصص.",
    "notice": "تُجمع Skills من أدلة ومستودعات عامة لأغراض الاكتشاف والتعلم. إذا كان الرابط معطلاً أو يجب حذف إدخال، افتح issue.",
    "toc": "جدول المحتويات",
    "why": "لماذا هذه القائمة",
    "whyBody": [
      "تكون Codex Skills أكثر فائدة عندما يجد المستخدم سير العمل المناسب بسرعة.",
      "ينتقي هذا المشروع Skills عملية، ويصنفها حسب الاستخدام، ويسجل الروابط ومؤشرات الشعبية وملاحظات التثبيت المسبق."
    ],
    "browse": "تصفح حسب الفئة",
    "featured": "Skills مميزة",
    "stats": "إحصائيات",
    "contribute": "كيفية المساهمة",
    "contributeBody": [
      "افتح issue من [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) مع رابط صالح ووصف قصير وفئة ومصدر ودليل شعبية.",
      "Skills الصينية الأصلية تستخدم قالب [Submit a Chinese-Native Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml).",
      "يرجى توضيح Skills التي تتطلب API keys أو تحكمًا بالمتصفح أو تنفيذ أوامر أو مراجعة طبية/مالية/قانونية."
    ],
    "submitChineseSkillBadge": "[![إرسال Skill صيني](https://img.shields.io/badge/%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20Skill%20%D8%B5%D9%8A%D9%86%D9%8A-via%20Issues-orange.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-chinese-skill.yml)",
    "curation": "معايير الاختيار",
    "curationItems": [
      "يجب أن يكون الرابط متاحًا وألا يكون صفحة خطأ legacy.",
      "يجب أن تكون Skill مفيدة لـ Codex أو سهلة التحويل إلى workflow في Codex.",
      "يجب أن يتضمن الإدخال استخدامًا واضحًا ومصدرًا واضحًا.",
      "تُفضّل الإدخالات ذات الاستخدام أو التنزيل أو الاعتماد الرسمي أو stars الأعلى.",
      "يجب توضيح المجالات الحساسة واعتماد الخدمات الخارجية."
    ],
    "license": "الترخيص",
    "licenseBody": "يصدر هذا المستودع وفق ترخيصه. أسماء Skills والمحتوى المرتبط تعود إلى مالكيها.",
    "acknowledgements": "شكر وتقدير",
    "acknowledgementsBody": "شكرًا لبناة أدلة Skills ومشرفي open-source ومجتمع Codex الذين يجعلون سير عمل Agent القابلة لإعادة الاستخدام أسهل اكتشافًا.",
    "tags": "الوسوم",
    "source": "المصدر",
    "popularity": "الشعبية",
    "notes": "ملاحظات",
    "totalSkills": "إجمالي Skills",
    "categories": "الفئات",
    "lastUpdated": "آخر تحديث",
    "customSkillGuide": "دليل Custom Skill",
    "customSkillGuideBody": "تعلّم كيفية إنشاء وتعديل وتثبيت Codex Skills الخاصة بك.",
    "readmeGenerated": "يتم إنشاء README هذا من `data/skills.json`. عدّل ملف البيانات ثم شغّل `npm run generate:all`."
  }
};

const chineseHubUi = {
  en: {
    chineseHub: "Chinese-Native Skills",
    chineseHubIntro: "Skills with Chinese-native SKILL.md content and workflows for documentation, review, writing, academia, fintech, product planning, and DevOps.",
    chineseHubCount: "Chinese-native skills",
    chineseHubCallout: "For Chinese developers: see [Chinese-Native Skills](#chinese-native-skills).",
    install: "Install"
  },
  zh: {
    chineseHub: "中文 Skill 专区",
    chineseHubIntro: "面向中文开发者与中文工作流的原生 Skill，覆盖文档排版、代码审查、写作润色、学术科研、金融量化、产品规划与 DevOps 等场景。",
    chineseHubCount: "中文原生 Skill",
    chineseHubCallout: "面向中文开发者：参见 [中文 Skill 专区](#中文-skill-专区)",
    install: "安装"
  },
  tw: {
    chineseHub: "中文 Skill 專區",
    chineseHubIntro: "面向中文開發者與中文工作流的原生 Skill，涵蓋文件排版、程式碼審查、寫作潤飾、學術研究、金融量化、產品規劃與 DevOps。",
    chineseHubCount: "中文原生 Skill",
    chineseHubCallout: "面向中文開發者：參見 [中文 Skill 專區](#中文-skill-專區)",
    install: "安裝"
  },
  ja: {
    chineseHub: "中国語ネイティブ Skills",
    chineseHubIntro: "中国語の SKILL.md とワークフローを持つ Skill。文書、レビュー、執筆、学術、フィンテック、プロダクト計画、DevOps を扱います。",
    chineseHubCount: "中国語ネイティブ Skills",
    chineseHubCallout: "",
    install: "インストール"
  },
  ko: {
    chineseHub: "중국어 네이티브 Skills",
    chineseHubIntro: "중국어 SKILL.md와 워크플로를 갖춘 Skill로 문서, 리뷰, 글쓰기, 학술, 핀테크, 제품 기획, DevOps를 다룹니다.",
    chineseHubCount: "중국어 네이티브 Skills",
    chineseHubCallout: "",
    install: "설치"
  },
  th: {
    chineseHub: "Skills ภาษาจีนโดยกำเนิด",
    chineseHubIntro: "Skill ที่มี SKILL.md และ workflow ภาษาจีน สำหรับเอกสาร รีวิวโค้ด งานเขียน วิชาการ ฟินเทค วางแผนผลิตภัณฑ์ และ DevOps",
    chineseHubCount: "Skills ภาษาจีนโดยกำเนิด",
    chineseHubCallout: "",
    install: "ติดตั้ง"
  },
  vi: {
    chineseHub: "Skills gốc tiếng Trung",
    chineseHubIntro: "Skill có SKILL.md và workflow gốc tiếng Trung cho tài liệu, review, viết lách, học thuật, fintech, hoạch định sản phẩm và DevOps.",
    chineseHubCount: "Skills gốc tiếng Trung",
    chineseHubCallout: "",
    install: "Cài đặt"
  },
  id: {
    chineseHub: "Skills native Tiongkok",
    chineseHubIntro: "Skill dengan SKILL.md dan workflow native berbahasa Tiongkok untuk dokumentasi, review, penulisan, akademik, fintech, perencanaan produk, dan DevOps.",
    chineseHubCount: "Skills native Tiongkok",
    chineseHubCallout: "",
    install: "Instal"
  },
  es: {
    chineseHub: "Skills nativos en chino",
    chineseHubIntro: "Skills con SKILL.md y workflows nativos en chino para documentación, revisión, escritura, academia, fintech, planificación de producto y DevOps.",
    chineseHubCount: "Skills nativos en chino",
    chineseHubCallout: "",
    install: "Instalar"
  },
  fr: {
    chineseHub: "Skills natifs chinois",
    chineseHubIntro: "Skills avec SKILL.md et workflows natifs chinois pour documentation, revue, rédaction, recherche, fintech, planification produit et DevOps.",
    chineseHubCount: "Skills natifs chinois",
    chineseHubCallout: "",
    install: "Installer"
  },
  de: {
    chineseHub: "Chinesisch-native Skills",
    chineseHubIntro: "Skills mit chinesisch-nativen SKILL.md-Inhalten und Workflows für Dokumentation, Review, Schreiben, Forschung, Fintech, Produktplanung und DevOps.",
    chineseHubCount: "Chinesisch-native Skills",
    chineseHubCallout: "",
    install: "Installation"
  },
  it: {
    chineseHub: "Skills native in cinese",
    chineseHubIntro: "Skill con SKILL.md e workflow nativi in cinese per documentazione, review, scrittura, accademia, fintech, pianificazione prodotto e DevOps.",
    chineseHubCount: "Skills native in cinese",
    chineseHubCallout: "",
    install: "Installa"
  },
  pt: {
    chineseHub: "Skills nativos em chinês",
    chineseHubIntro: "Skills com SKILL.md e workflows nativos em chinês para documentação, revisão, escrita, academia, fintech, planejamento de produto e DevOps.",
    chineseHubCount: "Skills nativos em chinês",
    chineseHubCallout: "",
    install: "Instalar"
  },
  ru: {
    chineseHub: "Китайскоязычные Skills",
    chineseHubIntro: "Skills с китайскоязычными SKILL.md и workflow для документации, ревью, письма, науки, финтеха, продуктового планирования и DevOps.",
    chineseHubCount: "Китайскоязычные Skills",
    chineseHubCallout: "",
    install: "Установка"
  },
  ar: {
    chineseHub: "Skills أصلية باللغة الصينية",
    chineseHubIntro: "Skills بملفات SKILL.md وسير عمل أصلية باللغة الصينية للتوثيق والمراجعة والكتابة والبحث والتقنية المالية وتخطيط المنتج وDevOps.",
    chineseHubCount: "Skills أصلية بالصينية",
    chineseHubCallout: "",
    install: "التثبيت"
  }
};

const recommendedProjectsUi = {
  en: { recommendedProjects: "Recommended Open-Source Projects" },
  zh: { recommendedProjects: "推荐的开源项目" },
  tw: { recommendedProjects: "推薦的開源專案" },
  ja: { recommendedProjects: "おすすめのオープンソースプロジェクト" },
  ko: { recommendedProjects: "추천 오픈 소스 프로젝트" },
  th: { recommendedProjects: "โปรเจกต์โอเพนซอร์สแนะนำ" },
  vi: { recommendedProjects: "Dự án mã nguồn mở đề xuất" },
  id: { recommendedProjects: "Proyek Open-Source Rekomendasi" },
  es: { recommendedProjects: "Proyectos open source recomendados" },
  fr: { recommendedProjects: "Projets open source recommandés" },
  de: { recommendedProjects: "Empfohlene Open-Source-Projekte" },
  it: { recommendedProjects: "Progetti open source consigliati" },
  pt: { recommendedProjects: "Projetos open source recomendados" },
  ru: { recommendedProjects: "Рекомендуемые open-source проекты" },
  ar: { recommendedProjects: "مشاريع مفتوحة المصدر موصى بها" }
};

function strings(lang) {
  return {
    ...ui.en,
    ...chineseHubUi.en,
    ...recommendedProjectsUi.en,
    ...(ui[lang] ?? {}),
    ...(chineseHubUi[lang] ?? {}),
    ...(recommendedProjectsUi[lang] ?? {})
  };
}

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
}

function writeData(data) {
  fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function renderSkill(skill, langCode, t) {
  const description = localized(skill.description, langCode);
  const popularity = localized(skill.popularity, langCode);
  const notes = localized(skill.notes, langCode);
  const tags = skill.tags.map((tag) => `\`${tag}\``).join(" ");
  const lines = [
    `- **[${skill.name}](${skill.url})**`,
    `  ${description}`,
    `  ${t.tags}: ${tags}`,
    `  ${t.source}: ${skill.source} · ${t.popularity}: ${popularity}`
  ];
  if (skill.install) lines.push(`  ${t.install}: \`${skill.install}\``);
  if (notes) lines.push(`  ${t.notes}: ${notes}`);
  return lines.join("  \n");
}

function validateData(data) {
  if (!Array.isArray(data.recommendedProjects) || data.recommendedProjects.length === 0) {
    throw new Error("recommendedProjects must contain at least one project");
  }
  for (const project of data.recommendedProjects) {
    if (!project.name || !project.url?.startsWith("https://github.com/")) {
      throw new Error("Each recommended project must have a name and GitHub URL");
    }
  }
  const categoryIds = new Set(data.categories.map((category) => category.id));
  for (const skill of data.skills) {
    if (!categoryIds.has(skill.category)) {
      throw new Error(`Unknown category "${skill.category}" for skill "${skill.name}"`);
    }
    if (!skill.chineseHub) continue;
    if (!skill.tags.includes("Chinese-Native")) {
      throw new Error(`Chinese Hub skill "${skill.name}" must include the Chinese-Native tag`);
    }
    if (!localized(skill.description, "zh")) {
      throw new Error(`Chinese Hub skill "${skill.name}" must include description.zh`);
    }
    if (!skill.url.startsWith("https://github.com/")) {
      throw new Error(`Chinese Hub skill "${skill.name}" must use a GitHub URL`);
    }
    if (skill.featured === true) {
      throw new Error(`Chinese Hub skill "${skill.name}" must not be featured`);
    }
  }
}

function renderReadme(data, langCode) {
  const langMeta = languages.find((item) => item.code === langCode);
  const t = strings(langCode);
  const allSection = readmeAllSectionTitle(langCode);
  const categories = data.categories;
  const skills = data.skills;
  const featured = skills.filter((skill) => skill.featured);
  const chineseHubSkills = skills.filter((skill) => skill.chineseHub);

  const showChineseHub = langCode === "zh" || langCode === "tw";

  const tocItems = [
    t.why,
    t.browse,
    t.stats,
    t.featured,
    ...(showChineseHub ? [t.chineseHub] : []),
    allSection,
    t.customSkillGuide,
    t.contribute,
    t.curation,
    t.license,
    t.acknowledgements,
    t.recommendedProjects
  ];

  const lines = [
    `# ${t.title}`,
    "",
    `> ${t.maintainedBy}`,
    "",
    "[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)",
    "[![GitHub stars](https://img.shields.io/github/stars/flaqai/awesome_codex_skills?style=social)](https://github.com/flaqai/awesome_codex_skills)",
    "[![Submit Skills via Issues](https://img.shields.io/badge/Submit%20Skills-via%20Issues-brightgreen.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml)",
    ...(showChineseHub ? [t.submitChineseSkillBadge] : []),
    "",
    `> ${t.tagline}`,
    "",
    `> ${t.notice}`,
    ""
  ];

  if (showChineseHub && t.chineseHubCallout) lines.push(`> ${t.chineseHubCallout}`, "");

  lines.push(
    `> **[${t.customSkillGuide} →](${langMeta.guideFile})** ${t.customSkillGuideBody}`,
    "",
    "---",
    "",
    languageSwitcher(langCode, "readme"),
    "",
    "---",
    "",
    `## ${t.toc}`,
    ""
  );

  tocItems.forEach((item) => lines.push(`- [${item}](#${anchor(item)})`));

  lines.push(
    "",
    `## ${t.why}`,
    "",
    ...t.whyBody.map((line) => `- ${line}`),
    "",
    `## ${t.browse}`,
    ""
  );

  categories.forEach((category) => {
    const name = localized(category.name, langCode);
    const description = localized(category.description, langCode);
    lines.push(`- [${name}](#${anchor(name)}) - ${description}`);
  });

  lines.push(
    "",
    `## ${t.stats}`,
    "",
    "| Metric | Count |",
    "|---|---:|",
    `| ${t.totalSkills} | ${showChineseHub ? skills.length : skills.length - chineseHubSkills.length} |`,
    `| ${t.categories} | ${categories.length} |`,
    ...(showChineseHub ? [`| ${t.chineseHubCount} | ${chineseHubSkills.length} |`] : []),
    `| ${t.lastUpdated} | ${data.updatedAt} |`,
    "",
    `## ${t.featured}`,
    ""
  );

  featured.forEach((skill) => {
    lines.push(renderSkill(skill, langCode, t), "");
  });

  if (showChineseHub) {
    lines.push(`## ${t.chineseHub}`, "", t.chineseHubIntro, "");
    chineseHubSkills.forEach((skill) => {
      lines.push(renderSkill(skill, langCode, t), "");
    });
  }

  lines.push(`## ${allSection}`, "");

  categories.forEach((category) => {
    const categorySkills = skills.filter((skill) => skill.category === category.id && !skill.chineseHub);
    if (!categorySkills.length) return;
    const name = localized(category.name, langCode);
    const description = localized(category.description, langCode);
    lines.push(`### ${name}`, "", description, "");
    categorySkills.forEach((skill) => {
      lines.push(renderSkill(skill, langCode, t), "");
    });
  });

  lines.push(
    `## ${t.customSkillGuide}`,
    "",
    `- **[${t.customSkillGuide} →](${langMeta.guideFile})** — ${t.customSkillGuideBody}`,
    "",
    `## ${t.contribute}`,
    "",
    ...(showChineseHub ? t.contributeBody : t.contributeBody.filter((_, i) => i !== 1)).map((line) => `- ${line}`),
    "",
    `## ${t.curation}`,
    "",
    ...t.curationItems.map((line) => `- ${line}`),
    "",
    `## ${t.license}`,
    "",
    t.licenseBody,
    "",
    `## ${t.acknowledgements}`,
    "",
    t.acknowledgementsBody,
    "",
    `## ${t.recommendedProjects}`,
    "",
    ...data.recommendedProjects.map((project) => `- [${project.name}](${project.url})`),
    "",
    "---",
    "",
    `> ${t.readmeGenerated}`,
    ""
  );

  return lines.join("\n");
}

function targetLanguages() {
  if (process.argv.includes("--all") || process.argv.includes("--check")) return languages.map((lang) => lang.code);
  return ["en", "zh"];
}

function writeReadmes({ check = false } = {}) {
  const data = readData();
  validateData(data);
  const today = currentDateInTimeZone();
  const renderData = check ? data : { ...data, updatedAt: today };
  const targets = targetLanguages();

  let changed = false;
  for (const code of targets) {
    const lang = languages.find((item) => item.code === code);
    const output = renderReadme(renderData, code);
    const outPath = path.join(rootDir, lang.file);
    const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : "";
    if (check) {
      if (existing !== output) {
        console.error(`${lang.file} is out of date. Run npm run generate:all.`);
        changed = true;
      }
    } else {
      fs.writeFileSync(outPath, output, "utf8");
      console.log(`Generated ${lang.file}`);
    }
  }
  if (!check && data.updatedAt !== today) {
    writeData({ ...data, updatedAt: today });
    console.log("Updated data/skills.json");
  }
  if (changed) process.exit(1);
}

writeReadmes({ check: process.argv.includes("--check") });
