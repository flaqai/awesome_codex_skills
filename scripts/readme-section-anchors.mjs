const LANGS = ["en", "zh", "tw", "ja", "ko", "th", "vi", "id", "es", "fr", "de", "it", "pt", "ru", "ar"];

/** Canonical README ## headings used for in-page anchors (README ↔ GUIDE cross-links). */
export const readmeAllSection = {
  en: "All Skills",
  zh: "全部 Skill",
  tw: "全部 Skill",
  ja: "すべての Skill",
  ko: "전체 Skill",
  th: "Skill ทั้งหมด",
  vi: "Tất cả Skill",
  id: "Semua Skill",
  es: "Todos los Skills",
  fr: "Tous les Skills",
  de: "Alle Skills",
  it: "Tutti gli Skill",
  pt: "Todos os Skills",
  ru: "Все Skills",
  ar: "كل Skills"
};

export function readmeAllSectionTitle(langCode) {
  return readmeAllSection[langCode] ?? readmeAllSection.en;
}

export function assertReadmeAllSectionComplete() {
  for (const code of LANGS) {
    if (!readmeAllSection[code]) {
      throw new Error(`Missing readmeAllSection title for language "${code}"`);
    }
  }
}

assertReadmeAllSectionComplete();
