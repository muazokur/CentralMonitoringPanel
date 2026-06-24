# Localization

## Architecture

Localization lives under `src/shared/i18n` and is initialized once from `src/main.tsx` before React renders. Components should use `react-i18next` hooks or the shared `useLanguage` hook; pages and features must not initialize i18n independently.

The implementation uses:

- `i18next`
- `react-i18next`
- `i18next-browser-languagedetector`
- JSON resources grouped by namespace and language

## Supported Languages

- Turkish: `tr`
- English: `en`

`SupportedLanguage` is defined as:

```ts
type SupportedLanguage = "tr" | "en"
```

Language metadata and namespace constants live in `language.constants.ts`.

## Default And Fallback Behavior

- Default language is Turkish.
- Fallback language is Turkish.
- Supported languages are strictly `tr` and `en`.
- The selected language is persisted in `localStorage`.
- If no stored language exists, the application starts in Turkish.
- Browser language must not override the Turkish default automatically.
- The language detector is configured to read the stored language only.

## Namespaces

Translations are split by application area:

- `common`
- `navigation`
- `auth`
- `dashboard`
- `edge-gateways`
- `machines`
- `tags`
- `tag-value-history`
- `oee`
- `analytics`
- `alerts`
- `reports`
- `users`
- `roles`
- `settings`
- `errors`
- `validation`
- `dates`

Each namespace exists under both `locales/tr` and `locales/en`.

## Key Naming Rules

Use meaningful hierarchical keys:

```txt
common.actions.save
common.status.active
navigation.items.dashboard
machines.table.columns.machineName
errors.notFound.title
validation.required
```

Do not use unclear keys such as `text1`, `label2`, `title3`, or `buttonText`.

## Using Translations

Use the namespace that owns the text:

```tsx
import { useTranslation } from "react-i18next"

const { t } = useTranslation("machines")

return <PageHeader title={t("page.title")} />
```

For shared shell text, use `common` or `navigation`.

## Language Switching

Use the shared hook:

```tsx
import { useLanguage } from "@/shared/i18n"

const {
  currentLanguage,
  changeLanguage,
  supportedLanguages,
  isTurkish,
  isEnglish,
} = useLanguage()
```

`changeLanguage` updates i18next and persists the selected language.

## Adding A Translation

1. Choose the correct namespace.
2. Add the same key to both Turkish and English JSON files.
3. Keep keys hierarchical and descriptive.
4. Use UTF-8 and preserve Turkish characters.
5. Use `t("path.to.key")` inside the component.

## Adding A Namespace

1. Add the namespace name to `TRANSLATION_NAMESPACES`.
2. Add matching JSON files under `locales/tr` and `locales/en`.
3. Import both JSON files in `i18n.config.ts`.
4. Add the namespace to the `resources` object for both languages.
5. Use `useTranslation("<namespace>")` in components.

## Adding A Language

1. Extend `SupportedLanguage`.
2. Add language metadata to `SUPPORTED_LANGUAGES`.
3. Add locale JSON files for every namespace.
4. Add resources to `i18n.config.ts`.
5. Confirm fallback behavior still points to Turkish unless product requirements change.

## Validation Messages

Validation schemas should use keys from the `validation` namespace when a form is migrated. Prefer passing translated messages into schema factories when validation text needs to react to language changes.

Example target pattern:

```ts
const schema = z.object({
  email: z.email(t("email", { ns: "validation" })),
})
```

## Hardcoded Text Rules

- New user-facing text should use translation keys.
- Shared components should use `common`, `navigation`, `errors`, `validation`, or `dates`.
- Feature components should use their feature namespace.
- Do not add new hardcoded labels to pages when translation infrastructure is available.
- This initial pass creates the infrastructure and sample translations; full page migration can be completed incrementally.
