# Translations for the Paradex WebApp

We use approach similar to `GNU gettext` where keys are written in plain English and used as fallback for missing translations.<br>
So that separate `id` is not needed, just the `key` string is used with `{{abc}}` for variables and `<1>text<1/>` for React components.<br>
So that from the developer's perspective, we still write in plain English and not with `id`s that are harder to understand and maintain.

Currently supported languages are:

```ts
  en: 'English',
  zh_Hans: '中文 (简体)',
  zh_Hant: '中文 (繁體)',
  ja: '日本語',
  vi: 'Tiếng Việt',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  es: 'Español',
  ru: 'Русский',
  tr: 'Türkçe',
  nl: 'Nederlands',
  id: 'Indonesia',
```
