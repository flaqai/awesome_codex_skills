# دليل: مهارات Codex المخصصة

> تعلّم كيفية إنشاء وتعديل وتثبيت سير عمل SKILL.md لـ OpenAI Codex.

[← العودة إلى قائمة المهارات](README_ar.md) · [قائمة المهارات →](README_ar.md#كل-skills)

---

[![English](https://img.shields.io/badge/English-View-lightgrey)](GUIDE.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_zh.md) [![繁體中文](https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-View-lightgrey)](GUIDE_tw.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-View-lightgrey)](GUIDE_ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-View-lightgrey)](GUIDE_ko.md) [![ไทย](https://img.shields.io/badge/%E0%B9%84%E0%B8%97%E0%B8%A2-View-lightgrey)](GUIDE_th.md) [![Tiếng Việt](https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-View-lightgrey)](GUIDE_vi.md) [![Bahasa Indonesia](https://img.shields.io/badge/Bahasa%20Indonesia-View-lightgrey)](GUIDE_id.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-View-lightgrey)](GUIDE_es.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-View-lightgrey)](GUIDE_fr.md) [![Deutsch](https://img.shields.io/badge/Deutsch-View-lightgrey)](GUIDE_de.md) [![Italiano](https://img.shields.io/badge/Italiano-View-lightgrey)](GUIDE_it.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-View-lightgrey)](GUIDE_pt.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-View-lightgrey)](GUIDE_ru.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Current-brightgreen)](GUIDE_ar.md)

---

## جدول المحتويات

- [ما هي مهارة Codex؟](#what-is-a-skill)
- [بنية الملفات و SKILL.md](#file-structure)
- [مسارات التثبيت](#installation-paths)
- [كتابة محفزات (name و description)](#writing-triggers)
- [إنشاء مهارة من الصفر](#create-from-scratch)
- [تكييف مهارة موجودة](#adapt-existing)
- [قائمة الجودة والأمان](#quality-security)
- [الاختبار والتصحيح](#test-and-debug)
- [النشر والمشاركة](#publish-and-share)
- [الملحق: قالب وأسئلة شائعة وروابط](#appendix)

> تم التحقق من المسارات والأوامر في هذا الدليل مقابل openai/skills وسير عمل Codex الشائع؛ وقد تتغير مع تطور الأدوات.

## ما هي مهارة Codex؟

<a id="what-is-a-skill"></a>

مهارة Codex هي مجلد يحتوي على SKILL.md مع سكربتات ومراجع وموارد اختيارية. عند تطابق المهمة يقرأ Codex بيانات YAML والمحتوى.

- استخدمها عندما يتكرر سير العمل عبر الجلسات (النشر، تصدير PDF، فحص العلامة).
- الأسئلة لمرة واحدة: مطالبات؛ اتفاقيات المحرر: قواعد Cursor.
- تُشارك المهارات عبر Git وتُثبَّت في $CODEX_HOME/skills أو .codex/skills للمشروع.

## بنية الملفات و SKILL.md

<a id="file-structure"></a>

كل مهارة مجلد. SKILL.md مطلوب؛ scripts/ و references/ و assets/ اختيارية.

- YAML frontmatter: name (kebab-case) و description (جملة التفعيل).
- المحتوى: متى تُستخدم، الخطوات، الأمان، روابط references/.
- scripts/ اختياري لمساعدات shell/Python يستدعيها Codex.

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

## مسارات التثبيت

<a id="installation-paths"></a>

يكتشف Codex المهارات من مجلدات المستخدم والمشروع. Cursor يستخدم .cursor/skills لوكلاء IDE.

| الموقع | النطاق | الأفضل لـ |
| --- | --- | --- |
| $CODEX_HOME/skills (~/.codex/skills) | على مستوى المستخدم | مهارات شخصية لكل المشاريع |
| .codex/skills (جذر المشروع) | محلي للمشروع | سير نشر/امتثال خاص بالمستودع |
| .cursor/skills (Cursor IDE) | وكيل Cursor | سير IDE؛ عدّل الاسم/المحفزات عند النقل إلى Codex |

## كتابة محفزات (name و description)

<a id="writing-triggers"></a>

يحمّل Codex المهارة عند تطابق المهمة دلاليًا مع description. اكتب محفزات WHEN بعبارات المستخدم وأنواع الملفات وسير العمل.

- جيد: "انشر إلى staging عند طلب ship أو release أو CI للواجهة."
- سيء: "مهارة للنشر و DevOps." (غامض جدًا).
- name بصيغة kebab-case ومطابق لاسم المجلد.

## إنشاء مهارة من الصفر

<a id="create-from-scratch"></a>

خطوات تحويل سير عمل الفريق المتكرر إلى مهارة Codex مثبتة.

**Step 1. اختر سير عمل متكرر**

مثال: قائمة تحقق إصدار لتطبيق Next.js.

**Step 2. اكتب جملة التفعيل**

اذكر عبارات المستخدم وإشارات المستودع.

**Step 3. اكتب أقسام SKILL.md**

ضمّن متى تُستخدم والخطوات والتحقق وحدود الأمان.

**Step 4. أضف سكربتات أو مراجع**

SKILL.md ~500 سطر؛ المستندات الطويلة في references/.

**Step 5. أنشئ المجلد وثبّت**

شخصي: ~/.codex/skills؛ المشروع: .codex/skills.

**Step 6. اختبر بمطالبة واقعية**

اطلب من Codex تنفيذ سير العمل وتأكد من تحميل المهارة.

**Step 7. احفظ وشارك**

أدرج في Git؛ انشر أو أرسل إلى awesome_codex_skills.

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

## تكييف مهارة موجودة

<a id="adapt-existing"></a>

انسخ من GitHub أو OrangeBot أو SkillsCat أو SkillsMP ثم راجعها لبيئة Codex.

**Step 1. حدد SKILL.md المصدر**

افتح المستودع واقرأ frontmatter والسكربتات والترخيص.

**Step 2. تدقيق أمني**

تحقق من shell والشبكة ومفاتيح API والمتصفح وكتابة الملفات.

**Step 3. أعد كتابة description لمحفزاتك**

احتفظ بخطوات المصدر ووائم العبارات مع فريقك.

**Step 4. ثبّت محليًا واختبر regression**

تحقق من التحميل بمطالبات إيجابية وسلبية.

## قائمة الجودة والأمان

<a id="quality-security"></a>

> **تحذير:** المهارات التي تشغّل shell أو المتصفح أو APIs مدفوعة قد تسبب فقدان بيانات أو رسوم. راجع السكربتات قبل الإنتاج.

- وثّق مفاتيح API ولا ترفع الأسرار.
- فضّل القراءة فقط ما لم يطلب المستخدم الكتابة.
- أضف تنبيهات للرعاية الصحية والمالية والقانون.
- اجعل SKILL.md مركزًا؛ اربط المراجع الطويلة.

## الاختبار والتصحيح

<a id="test-and-debug"></a>

تحقق أن Codex يحمّل المهارة عند المطالبات المقصودة ويتجاهلها خلاف ذلك.

- اختبار إيجابي: عبارات من description حرفيًا.
- اختبار سلبي: مهام غير مرتبطة بدون تسرب.
- إن لم تُحمّل، وسّع المحفزات أو قسّم المهارة.

## النشر والمشاركة

<a id="publish-and-share"></a>

شارك عبر Git أو أدلة عامة أو الإرسال إلى awesome_codex_skills.

- ارفع إلى GitHub مع LICENSE وREADME ومسار SKILL.md.
- أدرج على OrangeBot أو SkillsCat أو SkillsMP أو SkillMD.ai.
- أرسل إلى awesome_codex_skills عبر Issue مع دليل الشعبية.

## الملحق: قالب وأسئلة شائعة وروابط

<a id="appendix"></a>

قالب SKILL.md minimal للنسخ إلى مجلد مهارة جديد:

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

- FAQ: لا تُحمّل؟ → أعد كتابة description بـ WHEN.
- FAQ: مهارات Cursor في Codex? → نعم، كيّف المسارات والمحفزات.
- مراجع: github.com/openai/skills وOrangeBot Skill Creator وOpenAI Docs.

---

> تم إنشاؤه من data/custom-skill-guide.json. شغّل npm run generate:guide:all
