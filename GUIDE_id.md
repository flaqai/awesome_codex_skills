# Panduan: Skill Codex Kustom

> Pelajari cara membuat, menyesuaikan, dan menginstal alur kerja SKILL.md untuk OpenAI Codex.

[← Kembali ke Daftar Skill](README_id.md) · [Daftar Skill →](README_id.md#semua-skill)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-Current-brightgreen)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-View-lightgrey)](GUIDE_ar.md)

---

## Daftar Isi

- [Apa itu Skill Codex?](#what-is-a-skill)
- [Struktur File dan SKILL.md](#file-structure)
- [Path Instalasi](#installation-paths)
- [Menulis trigger (name dan description)](#writing-triggers)
- [Buat skill dari nol](#create-from-scratch)
- [Adaptasi skill yang ada](#adapt-existing)
- [Daftar kualitas dan keamanan](#quality-security)
- [Uji dan debug](#test-and-debug)
- [Publikasikan dan bagikan](#publish-and-share)
- [Lampiran: Template, FAQ, Tautan](#appendix)

> Path dan perintah dalam panduan ini diverifikasi terhadap openai/skills dan alur kerja Codex umum; dapat berubah seiring evolusi alat.

## Apa itu Skill Codex?

<a id="what-is-a-skill"></a>

Skill Codex adalah folder berisi SKILL.md plus skrip, referensi, dan aset opsional. Saat tugas cocok deskripsi, Codex membaca YAML frontmatter dan isi untuk instruksi yang dapat dipakai ulang.

- Gunakan saat alur kerja berulang antar sesi (deploy, ekspor PDF, cek merek).
- Pertanyaan sekali pakai pakai prompt; konvensi editor pakai aturan Cursor.
- Skill dibagikan lewat Git dan diinstal ke $CODEX_HOME/skills atau .codex/skills proyek.

## Struktur File dan SKILL.md

<a id="file-structure"></a>

Setiap skill adalah direktori. SKILL.md wajib; scripts/, references/, assets/ opsional.

- YAML frontmatter: name (kebab-case) dan description (kalimat pemicu).
- Isi: kapan dipakai, langkah alur, catatan keamanan, tautan references/.
- scripts/ opsional untuk helper shell/Python yang bisa dipanggil Codex.

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

## Path Instalasi

<a id="installation-paths"></a>

Codex menemukan skill dari direktori global pengguna dan proyek lokal. Cursor memakai .cursor/skills untuk agent IDE.

| Lokasi | Cakupan | Terbaik untuk |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | Global pengguna | Skill pribadi untuk semua proyek |
| .codex/skills (root proyek) | Lokal proyek | Alur deploy/compliance khusus repo |
| .cursor/skills (Cursor IDE) | Agent Cursor | Alur IDE; sesuaikan nama/trigger saat port ke Codex |

## Menulis trigger (name dan description)

<a id="writing-triggers"></a>

Codex memuat skill saat tugas cocok secara semantik dengan description. Tulis trigger sebagai WHEN dengan frasa, tipe file, dan alur kerja.

- Baik: "Deploy ke staging saat pengguna minta ship, release, atau jalankan CI frontend."
- Buruk: "Skill untuk deploy dan DevOps." (terlalu umum).
- name harus kebab-case, stabil, cocok nama folder.

## Buat skill dari nol

<a id="create-from-scratch"></a>

Langkah mengubah alur kerja tim berulang menjadi skill Codex terinstal.

**Step 1. Pilih satu alur kerja berulang**

Contoh: checklist rilis app Next.js.

**Step 2. Buat kalimat trigger**

Daftar frasa pengguna dan sinyal repo yang mengaktifkan skill.

**Step 3. Tulis bagian SKILL.md**

Sertakan kapan dipakai, langkah, verifikasi, batas keamanan.

**Step 4. Tambah skrip atau referensi opsional**

SKILL.md ~500 baris; dokumen panjang ke references/.

**Step 5. Buat folder dan instal**

Pribadi: ~/.codex/skills; repo: .codex/skills.

**Step 6. Uji dengan prompt realistis**

Minta Codex jalankan alur dan pastikan skill dimuat.

**Step 7. Commit dan bagikan**

Versikan di Git; publikasikan atau kirim ke awesome_codex_skills.

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

## Adaptasi skill yang ada

<a id="adapt-existing"></a>

Fork dari GitHub, OrangeBot, SkillsCat, atau SkillsMP, lalu audit dan sesuaikan untuk Codex.

**Step 1. Temukan SKILL.md sumber**

Buka repo tautan, baca frontmatter, skrip, lisensi.

**Step 2. Audit keamanan**

Periksa shell, jaringan, API key, browser, tulis file.

**Step 3. Tulis ulang description untuk trigger Anda**

Pertahankan langkah upstream, selaraskan frasa tim.

**Step 4. Instal lokal dan uji regresi**

Verifikasi load pada prompt positif/negatif.

## Daftar kualitas dan keamanan

<a id="quality-security"></a>

> **Peringatan:** Skill yang menjalankan shell, browser, atau API berbayar berisiko kehilangan data/biaya. Tinjau skrip sebelum produksi.

- Dokumentasikan API key, jangan commit rahasia.
- Utamakan read-only kecuali pengguna minta tulis.
- Tambahkan disclaimer untuk kesehatan, keuangan, hukum.
- SKILL.md ringkas; tautkan referensi panjang.

## Uji dan debug

<a id="test-and-debug"></a>

Pastikan Codex memuat skill pada prompt yang dimaksud dan mengabaikannya jika tidak.

- Tes positif: gunakan frasa dari description.
- Tes negatif: tugas tidak terkait, tanpa skill bleed.
- Jika tidak dimuat, perluas trigger atau pecah skill.

## Publikasikan dan bagikan

<a id="publish-and-share"></a>

Bagikan via Git, direktori publik, atau kirim ke awesome_codex_skills.

- Push ke GitHub dengan LICENSE, README, path SKILL.md.
- Cantumkan di OrangeBot, SkillsCat, SkillsMP, SkillMD.ai jika memenuhi.
- Kirim ke awesome_codex_skills via Issue GitHub dengan bukti popularitas.

## Lampiran: Template, FAQ, Tautan

<a id="appendix"></a>

Template SKILL.md minimal untuk folder skill baru:

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

- FAQ: Tidak dimuat? → Tulis ulang description dengan WHEN.
- FAQ: Skill Cursor di Codex? → Ya, adaptasi path/trigger dan uji.
- Referensi: github.com/openai/skills, OrangeBot Skill Creator, OpenAI Docs.

---

> Dibuat dari data/custom-skill-guide.json. Jalankan npm run generate:guide:all
