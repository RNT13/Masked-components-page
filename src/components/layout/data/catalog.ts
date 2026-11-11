import { animationRegistry } from '@/styles/MaskedAnimations/AnimationRegistry'
import { maskedThemeConfig } from '@/styles/MaskedThemes/MaskedThemes'
import { BUTTON_VARIANTS, CARD_VARIANTS, INPUT_VARIANTS } from './variants'

const DEPRECATED = new Set(['revealFadeOutDown', 'controlledColapse'])
const animationNames = Object.keys(animationRegistry).filter(n => !DEPRECATED.has(n))
const family = (prefix: string) => animationNames.filter(n => n.startsWith(prefix)).length

export type CatalogEntry = {
  id: string
  title: string
  kind: 'component' | 'system' | 'utility'
  summary: string
  highlights: string[]
  variants?: number
  snippet: string
}

export const ANIMATION_FAMILIES = {
  reveal: family('reveal'),
  continuous: family('continuous'),
  oneShot: family('oneShot'),
  controlled: family('controlled')
}

export const CATALOG: CatalogEntry[] = [
  {
    id: 'masked-buttons',
    title: 'MaskedButton',
    kind: 'component',
    variants: BUTTON_VARIANTS.length,
    summary: 'One button API for actions, links, toggles, switches, checkboxes, radios and split menus.',
    highlights: [
      'Loading, error and disabled states',
      'colorTheme and --mc-btn-* tokens',
      'Segmented MaskedButtonGroup',
      'Renders <a> or your router Link'
    ],
    snippet: `<MaskedButton variant="gradient" colorTheme="baseTeal" leftIcon={<SaveIcon />}>\n  Save changes\n</MaskedButton>`
  },
  {
    id: 'masked-input',
    title: 'MaskedInput',
    kind: 'component',
    variants: INPUT_VARIANTS.length,
    summary: 'Text, masks, passwords, currency, select, time, search with filters, textarea and file upload.',
    highlights: ['Controlled or uncontrolled', 'Keyboard-accessible select and time picker', 'Locale-aware currency', 'Drag-and-drop file preview'],
    snippet: `<MaskedInput\n  variant="masked"\n  label="CPF"\n  mask="000.000.000-00"\n  value={cpf}\n  onChange={setCpf}\n/>`
  },
  {
    id: 'masked-input-formik',
    title: 'Formik inputs',
    kind: 'component',
    variants: INPUT_VARIANTS.length,
    summary: 'Every input variant wired to Formik through useField.',
    highlights: ['No glue code', 'Errors and touched state included', 'Optional: installs only with the input pack'],
    snippet: `<FormikTextInput name="email" label="Email" />`
  },
  {
    id: 'masked-cards',
    title: 'MaskedCards',
    kind: 'component',
    variants: CARD_VARIANTS.length,
    summary: 'Metric, stat, compare, product, feature and plan cards with trends, badges and actions.',
    highlights: ['Clickable or link cards', 'Price formatting via Intl', 'Footer actions stay at the bottom', '--mc-card-* tokens'],
    snippet: `<MaskedCards\n  $variant="metric"\n  icon={<UsersIcon />}\n  value="1.2k"\n  label="Active users"\n  trend="up"\n  trendValue="+8%"\n/>`
  },
  {
    id: 'masked-drawer',
    title: 'MaskedDrawer',
    kind: 'component',
    summary: 'Side, top or bottom panel with overlay, focus trap and responsive sizes.',
    highlights: ['left / right / top / bottom', 'Width presets per breakpoint', 'Escape, scroll lock and portal'],
    snippet: `<MaskedDrawer isOpen={open} onClose={() => setOpen(false)} side="right">\n  <h4>Menu</h4>\n</MaskedDrawer>`
  },
  {
    id: 'masked-popup',
    title: 'MaskedPopup',
    kind: 'component',
    summary: 'Centered modal with four transitions, overlay blur and focus trap.',
    highlights: ['pop / fade / slide-up / blur', 'Close on overlay or Escape', 'SSR-safe portal'],
    snippet: `<MaskedPopup isOpen={open} onClose={close} transition="pop">\n  <h4>Are you sure?</h4>\n</MaskedPopup>`
  },
  {
    id: 'masked-skeleton',
    title: 'MaskedSkeleton',
    kind: 'component',
    summary: 'Loading placeholders with shimmer or pulse. Compose them to mirror your layout.',
    highlights: ['Circle, line and block shapes', 'Respects reduced motion', 'Zero configuration'],
    snippet: `<MaskedSkeleton circle width={48} height={48} />\n<MaskedSkeleton height={14} width="70%" />`
  },
  {
    id: 'masked-toaster',
    title: 'MaskedToaster',
    kind: 'component',
    summary: 'Notifications with success, error, info, warning, loading and promise. Depends only on React.',
    highlights: ['toast.promise() out of the box', 'Pauses on hover and focus', 'Six positions, accessible live regions'],
    snippet: `toast.promise(save(), {\n  loading: 'Saving…',\n  success: 'Saved',\n  error: 'Something went wrong'\n})`
  },
  {
    id: 'masked-animations',
    title: 'MaskedAnimation',
    kind: 'system',
    variants: animationNames.length,
    summary: `${animationNames.length} animations in four families: reveal, continuous, one-shot and controlled.`,
    highlights: [
      `${ANIMATION_FAMILIES.reveal} reveal`,
      `${ANIMATION_FAMILIES.continuous} continuous`,
      `${ANIMATION_FAMILIES.oneShot} one-shot`,
      `${ANIMATION_FAMILIES.controlled} controlled`
    ],
    snippet: `<MaskedAnimation variant="revealGlideUp" trigger="scroll" once>\n  <Card />\n</MaskedAnimation>`
  },
  {
    id: 'masked-themes',
    title: 'Theme Engine',
    kind: 'system',
    variants: Object.keys(maskedThemeConfig).length,
    summary: `${Object.keys(maskedThemeConfig).length} ready-made themes, runtime switching and a color registry.`,
    highlights: ['ThemeEngineProvider + useThemeEngine', 'registerTheme and registerColorTheme', 'Persists the choice', 'Contrast-checked palettes'],
    snippet: `<ThemeEngineProvider defaultTheme="dark">\n  <App />\n</ThemeEngineProvider>`
  },
  {
    id: 'masked-config',
    title: 'MaskedConfigProvider',
    kind: 'system',
    summary: 'Optional global config: router link, image component, toast callbacks and locale.',
    highlights: ['Works without it', 'Plug next/link and next/image', 'Connects FileInput to the toaster'],
    snippet: `<MaskedConfigProvider config={{ linkComponent: Link, locale: 'en-US' }}>\n  {children}\n</MaskedConfigProvider>`
  },
  {
    id: 'masked-utils',
    title: 'Masked Utils',
    kind: 'utility',
    summary: 'Pure, SSR-safe helpers: currency, numbers, dates, time, durations, names, colors and errors.',
    highlights: ['Locale-aware formatting', 'WCAG contrast helpers', 'No dependencies'],
    snippet: `formatCurrency(1234.5, { locale: 'en-US', currency: 'USD' }) // "$1,234.50"`
  },
  {
    id: 'masked-hooks',
    title: 'Masked Hooks',
    kind: 'utility',
    summary: 'useDebounce, useLocalStorage, useMediaQuery and useScrollToTop.',
    highlights: ['SSR-safe', 'useSyncExternalStore based', 'Tiny'],
    snippet: `const debounced = useDebounce(query, 300)`
  },
  {
    id: 'masked-hooks-next',
    title: 'Next.js hooks',
    kind: 'utility',
    summary: 'useSafeReturn: go back to the originating route without open-redirect risks.',
    highlights: ['Sanitizes returnTo', 'Falls back to history or a safe path', 'Next.js only'],
    snippet: `const { goBackSafe } = useSafeReturn({ fallbackPath: '/' })`
  }
]

export const STATS = {
  packages: CATALOG.length,
  components: CATALOG.filter(c => c.kind === 'component').length,
  buttonVariants: BUTTON_VARIANTS.length,
  inputVariants: INPUT_VARIANTS.length,
  cardVariants: CARD_VARIANTS.length,
  animations: animationNames.length,
  themes: Object.keys(maskedThemeConfig).length
}
