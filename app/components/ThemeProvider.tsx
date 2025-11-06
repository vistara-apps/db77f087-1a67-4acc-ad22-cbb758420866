'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'default' | 'celo' | 'solana' | 'base' | 'coinbase'
type ColorMode = 'light' | 'dark'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColorMode?: ColorMode
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  colorMode: ColorMode
  setTheme: (theme: Theme) => void
  setColorMode: (mode: ColorMode) => void
  toggleColorMode: () => void
}

const initialState: ThemeProviderState = {
  theme: 'default',
  colorMode: 'dark',
  setTheme: () => null,
  setColorMode: () => null,
  toggleColorMode: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'default',
  defaultColorMode = 'dark',
  storageKey = 'zara-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage?.getItem(storageKey) as Theme) || defaultTheme
    }
    return defaultTheme
  })

  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage?.getItem(`${storageKey}-color-mode`) as ColorMode) || defaultColorMode
    }
    return defaultColorMode
  })

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all theme classes
    root.classList.remove('default', 'celo', 'solana', 'base', 'coinbase')
    
    // Remove color mode classes
    root.classList.remove('light', 'dark')

    // Add current theme and color mode
    root.classList.add(theme)
    root.classList.add(colorMode)
  }, [theme, colorMode])

  const toggleColorMode = () => {
    const newMode = colorMode === 'dark' ? 'light' : 'dark'
    setColorMode(newMode)
    localStorage?.setItem(`${storageKey}-color-mode`, newMode)
  }

  const value = {
    theme,
    colorMode,
    setTheme: (theme: Theme) => {
      localStorage?.setItem(storageKey, theme)
      setTheme(theme)
    },
    setColorMode: (mode: ColorMode) => {
      localStorage?.setItem(`${storageKey}-color-mode`, mode)
      setColorMode(mode)
    },
    toggleColorMode,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
