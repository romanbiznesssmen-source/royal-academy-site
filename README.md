# Royal Academy School — Next.js 14 Website

Сайт марафону англійської **Royal Academy School** на Next.js 14 + TypeScript + CSS Modules.

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000)

## Структура

```
src/app/
├── layout.tsx              # Root layout (fonts, metadata)
├── page.tsx                # Головна сторінка
├── site.ts                 # Бренд, контакти, SEO-константи
├── robots.ts               # robots.txt
├── sitemap.ts              # sitemap.xml
├── manifest.ts             # Web App Manifest
├── site.css                # Стилі сторінки
├── globals.css             # Глобальні стилі
├── hooks/
│   └── useCountdown.ts     # Таймер зворотного відліку
└── components/
    ├── Navbar.tsx          # Навігація
    ├── Hero.tsx            # Hero з фото
    ├── MarathonSections.tsx
    ├── ContactSection.tsx
    └── Footer.tsx
```

## SEO

- Metadata: title, description, keywords, Open Graph, Twitter Cards
- `robots.txt` та `sitemap.xml` генеруються автоматично
- JSON-LD: Organization, Course, WebPage, FAQPage
- Canonical URL та `metadataBase`

Перед деплоєм вкажіть домен у `.env`:

```bash
NEXT_PUBLIC_SITE_URL=https://ваш-домен.com
```

## Конфігурація

Змініть контактні дані в:
- `components/Footer.tsx` — телефон, email, соцмережі
- `site.ts` — назва, контакти, FAQ, URL сайту
- `app/layout.tsx` — metadata
