import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), "..");
const dataPath = path.join(rootDir, "data", "skills.json");

const languages = [
  { code: "en", file: "README.md", label: "English", current: "Current" },
  { code: "zh", file: "README_zh.md", label: "简体中文", current: "当前" },
  { code: "tw", file: "README_tw.md", label: "繁體中文", current: "目前" },
  { code: "ja", file: "README_ja.md", label: "日本語", current: "Current" },
  { code: "ko", file: "README_ko.md", label: "한국어", current: "Current" },
  { code: "th", file: "README_th.md", label: "ไทย", current: "Current" },
  { code: "vi", file: "README_vi.md", label: "Tiếng Việt", current: "Current" },
  { code: "id", file: "README_id.md", label: "Bahasa Indonesia", current: "Current" },
  { code: "es", file: "README_es.md", label: "Español", current: "Current" },
  { code: "fr", file: "README_fr.md", label: "Français", current: "Current" },
  { code: "de", file: "README_de.md", label: "Deutsch", current: "Current" },
  { code: "it", file: "README_it.md", label: "Italiano", current: "Current" },
  { code: "pt", file: "README_pt.md", label: "Português", current: "Current" },
  { code: "ru", file: "README_ru.md", label: "Русский", current: "Current" },
  { code: "ar", file: "README_ar.md", label: "العربية", current: "Current" }
];

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
    "all": "All Skills",
    "stats": "Statistics",
    "contribute": "How to Contribute",
    "contributeBody": [
      "Open a [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue with a reachable skill link, a short description, category, source platform, and popularity evidence.",
      "Please mark skills that require API keys, browser control, command execution, healthcare/finance/legal review, or other sensitive permissions."
    ],
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
    "readmeGenerated": "This README is generated from `data/skills.json`. Edit the data file, then run `npm run generate:readme`."
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
    "all": "全部 Skill",
    "stats": "统计",
    "contribute": "如何贡献",
    "contributeBody": [
      "通过 [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) Issue 提交，请提供可访问链接、简短简介、分类、来源平台和热度依据。",
      "如果 Skill 需要 API Key、浏览器控制、命令执行，或涉及医疗/金融/法律等敏感场景，请明确标注。"
    ],
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
    "readmeGenerated": "本文档由 `data/skills.json` 生成。请编辑数据文件后运行 `npm run generate:readme`。"
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
    "all": "全部 Skill",
    "stats": "統計",
    "contribute": "如何貢獻",
    "contributeBody": [
      "透過 [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) Issue 提交，請提供可訪問連結、簡短介紹、分類、來源平台和熱度依據。",
      "如果 Skill 需要 API Key、瀏覽器控制、命令執行，或涉及醫療/金融/法律等敏感場景，請明確標註。"
    ],
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
    "readmeGenerated": "本文檔由 `data/skills.json` 生成。請編輯資料檔後執行 `npm run generate:readme`。"
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
    "all": "すべての Skill",
    "stats": "統計",
    "contribute": "貢献方法",
    "contributeBody": [
      "[Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue から、到達可能なリンク、短い説明、カテゴリ、提供元、人気指標を送ってください。",
      "API Key、ブラウザ制御、コマンド実行、医療/金融/法務レビューなどが必要な場合は明記してください。"
    ],
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
    "readmeGenerated": "この README は `data/skills.json` から生成されています。データを編集後、`npm run generate:readme` を実行してください。"
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
    "all": "전체 Skill",
    "stats": "통계",
    "contribute": "기여 방법",
    "contributeBody": [
      "[Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue로 접근 가능한 링크, 짧은 설명, 카테고리, 출처, 인기 근거를 제출하세요.",
      "API Key, 브라우저 제어, 명령 실행, 의료/금융/법률 검토가 필요한 경우 명확히 표시하세요."
    ],
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
    "readmeGenerated": "이 README는 `data/skills.json`에서 생성됩니다. 데이터를 수정한 뒤 `npm run generate:readme`를 실행하세요."
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
    "all": "Skill ทั้งหมด",
    "stats": "สถิติ",
    "contribute": "วิธีมีส่วนร่วม",
    "contributeBody": [
      "เปิด [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue พร้อมลิงก์ที่เข้าถึงได้ คำอธิบายสั้น หมวดหมู่ แหล่งที่มา และหลักฐานความนิยม",
      "โปรดระบุหาก Skill ต้องใช้ API key การควบคุมเบราว์เซอร์ การรันคำสั่ง หรือเกี่ยวข้องกับการแพทย์ การเงิน กฎหมาย หรือสิทธิ์อ่อนไหวอื่น ๆ"
    ],
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
    "readmeGenerated": "README นี้สร้างจาก `data/skills.json` แก้ไขไฟล์ข้อมูลแล้วรัน `npm run generate:readme`"
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
    "all": "Tất cả Skill",
    "stats": "Thống kê",
    "contribute": "Cách đóng góp",
    "contributeBody": [
      "Mở [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) issue với link truy cập được, mô tả ngắn, danh mục, nguồn và bằng chứng phổ biến.",
      "Hãy đánh dấu Skill cần API key, điều khiển trình duyệt, chạy lệnh, hoặc cần xem xét y tế/tài chính/pháp lý."
    ],
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
    "readmeGenerated": "README này được tạo từ `data/skills.json`. Hãy sửa file dữ liệu rồi chạy `npm run generate:readme`."
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
    "all": "Semua Skill",
    "stats": "Statistik",
    "contribute": "Cara Berkontribusi",
    "contributeBody": [
      "Buka issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) dengan link yang dapat diakses, deskripsi singkat, kategori, platform sumber, dan bukti popularitas.",
      "Tandai Skill yang memerlukan API key, kontrol browser, eksekusi command, atau review kesehatan/keuangan/hukum."
    ],
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
    "readmeGenerated": "README ini dibuat dari `data/skills.json`. Edit file data lalu jalankan `npm run generate:readme`."
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
    "all": "Todos los Skills",
    "stats": "Estadísticas",
    "contribute": "Cómo contribuir",
    "contributeBody": [
      "Abre un issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) con un enlace accesible, descripción corta, categoría, plataforma fuente y evidencia de popularidad.",
      "Marca Skills que requieran API keys, control del navegador, ejecución de comandos o revisión médica/financiera/legal."
    ],
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
    "readmeGenerated": "Este README se genera desde `data/skills.json`. Edita el archivo de datos y ejecuta `npm run generate:readme`."
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
    "all": "Tous les Skills",
    "stats": "Statistiques",
    "contribute": "Comment contribuer",
    "contributeBody": [
      "Ouvrez une issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) avec lien accessible, courte description, catégorie, source et preuve de popularité.",
      "Signalez les Skills nécessitant API keys, contrôle navigateur, exécution de commandes ou revue santé/finance/juridique."
    ],
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
    "readmeGenerated": "Ce README est généré depuis `data/skills.json`. Modifiez le fichier de données puis exécutez `npm run generate:readme`."
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
    "all": "Alle Skills",
    "stats": "Statistiken",
    "contribute": "Mitwirken",
    "contributeBody": [
      "Öffne ein [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) Issue mit erreichbarem Link, kurzer Beschreibung, Kategorie, Quelle und Popularitätsnachweis.",
      "Markiere Skills mit API Keys, Browsersteuerung, Befehlsausführung oder Gesundheits-/Finanz-/Rechtsprüfung."
    ],
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
    "readmeGenerated": "Dieses README wird aus `data/skills.json` generiert. Bearbeite die Datendatei und führe `npm run generate:readme` aus."
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
    "all": "Tutti gli Skill",
    "stats": "Statistiche",
    "contribute": "Come contribuire",
    "contributeBody": [
      "Apri una issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) con link raggiungibile, breve descrizione, categoria, fonte e prova di popolarità.",
      "Segnala Skill che richiedono API key, controllo browser, esecuzione comandi o review medica/finanziaria/legale."
    ],
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
    "readmeGenerated": "Questo README è generato da `data/skills.json`. Modifica il file dati e poi esegui `npm run generate:readme`."
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
    "all": "Todos os Skills",
    "stats": "Estatísticas",
    "contribute": "Como contribuir",
    "contributeBody": [
      "Abra uma issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) com link acessível, descrição curta, categoria, fonte e evidência de popularidade.",
      "Marque Skills que exigem API keys, controle de navegador, execução de comandos ou revisão médica/financeira/legal."
    ],
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
    "readmeGenerated": "Este README é gerado a partir de `data/skills.json`. Edite o arquivo de dados e execute `npm run generate:readme`."
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
    "all": "Все Skills",
    "stats": "Статистика",
    "contribute": "Как внести вклад",
    "contributeBody": [
      "Откройте issue [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) с доступной ссылкой, кратким описанием, категорией, источником и доказательством популярности.",
      "Отмечайте Skills, которым нужны API keys, управление браузером, выполнение команд или медицинская/финансовая/юридическая проверка."
    ],
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
    "readmeGenerated": "Этот README сгенерирован из `data/skills.json`. Измените файл данных и выполните `npm run generate:readme`."
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
    "all": "كل Skills",
    "stats": "إحصائيات",
    "contribute": "كيفية المساهمة",
    "contributeBody": [
      "افتح issue من [Submit a Skill](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml) مع رابط صالح ووصف قصير وفئة ومصدر ودليل شعبية.",
      "يرجى توضيح Skills التي تتطلب API keys أو تحكمًا بالمتصفح أو تنفيذ أوامر أو مراجعة طبية/مالية/قانونية."
    ],
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
    "readmeGenerated": "يتم إنشاء README هذا من `data/skills.json`. عدّل ملف البيانات ثم شغّل `npm run generate:readme`."
  }
};
function localized(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.en ?? value.zh ?? "";
}

function strings(lang) {
  return ui[lang] ?? ui.en;
}

function anchor(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
}

function currentDate() {
  return new Date().toISOString().slice(0, 10);
}

function writeData(data) {
  fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function languageSwitcher(activeCode, availableCodes) {
  return languages
    .filter((lang) => availableCodes.includes(lang.code))
    .map((lang) => {
      const label = encodeURIComponent(lang.label).replace(/-/g, "--");
      const badgeText = lang.code === activeCode ? lang.current : "View";
      const color = lang.code === activeCode ? "brightgreen" : "lightgrey";
      return `[![${lang.label}](https://img.shields.io/badge/${label}-${encodeURIComponent(badgeText)}-${color})](${lang.file})`;
    })
    .join(" ");
}

function renderSkill(skill, lang, t) {
  const description = localized(skill.description, lang);
  const popularity = localized(skill.popularity, lang);
  const notes = localized(skill.notes, lang);
  const tags = skill.tags.map((tag) => `\`${tag}\``).join(" ");
  const lines = [
    `- **[${skill.name}](${skill.url})**`,
    `  ${description}`,
    `  ${t.tags}: ${tags}`,
    `  ${t.source}: ${skill.source} · ${t.popularity}: ${popularity}`
  ];
  if (notes) lines.push(`  ${t.notes}: ${notes}`);
  return lines.join("  \n");
}

function renderReadme(data, lang, availableCodes) {
  const t = strings(lang);
  const categories = data.categories;
  const skills = data.skills;
  const featured = skills.filter((skill) => skill.featured);
  const categoryById = new Map(categories.map((category) => [category.id, category]));

  const tocItems = [
    t.why,
    t.browse,
    t.stats,
    t.featured,
    t.all,
    t.contribute,
    t.curation,
    t.license,
    t.acknowledgements
  ];

  const lines = [
    `# ${t.title}`,
    "",
    `> ${t.maintainedBy}`,
    "",
    "[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)",
    "[![GitHub stars](https://img.shields.io/github/stars/flaqai/awesome_codex_skills?style=social)](https://github.com/flaqai/awesome_codex_skills)",
    "[![Submit Skills via Issues](https://img.shields.io/badge/Submit%20Skills-via%20Issues-brightgreen.svg)](https://github.com/flaqai/awesome_codex_skills/issues/new?template=submit-skill.yml)",
    "",
    `> ${t.tagline}`,
    "",
    `> ${t.notice}`,
    "",
    "---",
    "",
    languageSwitcher(lang, availableCodes),
    "",
    "---",
    "",
    `## ${t.toc}`,
    ""
  ];

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
    const name = localized(category.name, lang);
    const description = localized(category.description, lang);
    lines.push(`- [${name}](#${anchor(name)}) - ${description}`);
  });

  lines.push(
    "",
    `## ${t.stats}`,
    "",
    "| Metric | Count |",
    "|---|---:|",
    `| ${t.totalSkills} | ${skills.length} |`,
    `| ${t.categories} | ${categories.length} |`,
    `| ${t.lastUpdated} | ${data.updatedAt} |`,
    "",
    `## ${t.featured}`,
    ""
  );

  featured.forEach((skill) => {
    lines.push(renderSkill(skill, lang, t), "");
  });

  lines.push(`## ${t.all}`, "");

  categories.forEach((category) => {
    const categorySkills = skills.filter((skill) => skill.category === category.id);
    if (!categorySkills.length) return;
    const name = localized(category.name, lang);
    const description = localized(category.description, lang);
    lines.push(`### ${name}`, "", description, "");
    categorySkills.forEach((skill) => {
      lines.push(renderSkill(skill, lang, t), "");
    });
  });

  lines.push(
    `## ${t.contribute}`,
    "",
    ...t.contributeBody.map((line) => `- ${line}`),
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
    "---",
    "",
    `> ${t.readmeGenerated}`,
    ""
  );

  for (const skill of skills) {
    if (!categoryById.has(skill.category)) {
      throw new Error(`Unknown category "${skill.category}" for skill "${skill.name}"`);
    }
  }

  return lines.join("\n");
}

function targetLanguages() {
  if (process.argv.includes("--all") || process.argv.includes("--check")) return languages.map((lang) => lang.code);
  return ["en", "zh"];
}

function writeReadmes({ check = false } = {}) {
  const data = readData();
  const today = currentDate();
  const renderData = { ...data, updatedAt: today };
  const targets = targetLanguages();

  let changed = false;
  for (const code of targets) {
    const lang = languages.find((item) => item.code === code);
    const allCodes = languages.map((l) => l.code);
    const output = renderReadme(renderData, code, allCodes);
    const outPath = path.join(rootDir, lang.file);
    const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, "utf8") : "";
    if (check) {
      if (existing !== output) {
        console.error(`${lang.file} is out of date. Run npm run generate:readme:all.`);
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
