export const SITE_NAME = 'Royal Academy School'
export const SITE_SHORT_NAME = 'Royal Academy'
export const SITE_LOGO = '/images/PNG-зображення 1.png'
export const SITE_HERO_IMAGE = '/images/3D4A6903.JPG'
export const SITE_CONTACT_IMAGE = '/images/102.jpg'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://royalacademy.school'

export const SITE_TITLE = `${SITE_NAME} — Марафон англійської за 10 днів`
export const SITE_DESCRIPTION =
  '10-денний онлайн-марафон англійської для рівня A1: щоденні уроки, speaking-практика, перевірка домашніх завдань і приз 10 000 грн. Приєднуйтесь за 490 грн замість 2 450 грн.'

export const SITE_KEYWORDS = [
  'Royal Academy School',
  'марафон англійської',
  'вивчення англійської онлайн',
  'англійська для початківців',
  'курс англійської A1',
  'англійська за 10 днів',
  'онлайн курс англійської',
  'speaking англійська',
]

export const SITE_EMAIL = 'hello@royalacademy.school'
export const SITE_PHONE = '+380971234567'
export const SITE_PHONE_DISPLAY = '+380 97 123 45 67'

export const SITE_THEME_COLOR = '#C41E3A'

export const SITE_FAQ = [
  { q: 'Скільки часу потрібно?', a: '1 година на день.' },
  { q: 'Чи підійде для початківців?', a: 'Так. Марафон спеціально створений для рівня А1.' },
  { q: 'Чи перевіряються домашні завдання?', a: 'Так. Кожну роботу перевіряє куратор.' },
  { q: 'Чи потрібно вже говорити англійською?', a: 'Ні. Ми починаємо з найпростішої бази.' },
  { q: 'Якщо я пропущу день?', a: 'Уроки залишаються у вас, тому можна наздогнати програму.' },
] as const
