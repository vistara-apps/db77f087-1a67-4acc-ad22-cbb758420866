import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        'neon-blue': 'var(--color-neon-blue)',
        'neon-pink': 'var(--color-neon-pink)',
        'neon-purple': 'var(--color-neon-purple)',
        'neon-green': 'var(--color-neon-green)',
        grid: 'var(--color-grid)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glitch': 'glitch 3s infinite',
        'holographic': 'holographic 3s ease infinite',
        'scan': 'scan 8s linear infinite',
        'rotate': 'rotate 30s linear infinite',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px var(--color-primary), 0 0 10px var(--color-primary), 0 0 20px var(--color-primary)',
        'neon-pink': '0 0 5px var(--color-accent), 0 0 10px var(--color-accent), 0 0 20px var(--color-accent)',
        'neon-green': '0 0 5px var(--color-success), 0 0 10px var(--color-success), 0 0 20px var(--color-success)',
        'neon-inset': 'inset 0 0 10px var(--color-primary), inset 0 0 20px var(--color-primary)',
      },
      backgroundImage: {
        'gradient-retro': 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        'gradient-neon': 'linear-gradient(135deg, var(--color-neon-blue), var(--color-neon-pink))',
      },
    },
  },
  plugins: [],
}

export default config
