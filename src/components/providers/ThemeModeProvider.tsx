'use client'

import { maskedThemeConfig, ThemeKey } from '@/styles/MaskedThemes/MaskedThemes'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from 'react'
import { ThemeProvider } from 'styled-components'

const STORAGE_KEY = 'mc-site-theme'

// Temas escuros do config 2.x (default e os claros ficam de fora)
const DARK_THEMES: ReadonlySet<ThemeKey> = new Set([
  'default',
  'dark',
  'midnight',
  'forest',
  'aurora',
  'accent'
])

type ThemeModeContextValue = {
  themeKey: ThemeKey
  setThemeKey: (key: ThemeKey) => void
  isDark: boolean
  toggleDarkLight: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [themeKey, setThemeKeyState] = useState<ThemeKey>(() => {
    if (typeof window === 'undefined') return 'dark'

    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored && stored in maskedThemeConfig ? (stored as ThemeKey) : 'dark'
  })

  const setThemeKey = useCallback((key: ThemeKey) => {
    setThemeKeyState(key)
    window.localStorage.setItem(STORAGE_KEY, key)
  }, [])

  const isDark = DARK_THEMES.has(themeKey)

  const toggleDarkLight = useCallback(() => {
    setThemeKey(isDark ? 'light' : 'dark')
  }, [isDark, setThemeKey])

  const value = useMemo(
    () => ({ themeKey, setThemeKey, isDark, toggleDarkLight }),
    [themeKey, setThemeKey, isDark, toggleDarkLight]
  )

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={maskedThemeConfig[themeKey]}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export function useThemeMode(): ThemeModeContextValue {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) {
    throw new Error('useThemeMode deve ser usado dentro de ThemeModeProvider')
  }
  return ctx
}
