import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import StyledComponentsRegistry from '@/lib/styled-components-registry'

const inter = Inter({ subsets: ['latin'], variable: '--primary-font', display: 'swap' })

export const metadata: Metadata = {
  title: 'Masked Components',
  description: 'Polymorphic React + TypeScript components, installed with one command.'
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1 }

/**
 * Anti-flash: aplica data-mc-theme no <html> antes do primeiro paint.
 * Deve usar a MESMA chave de localStorage e o MESMO atributo do ThemeEngineProvider.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('mc-theme')||'dark';document.documentElement.setAttribute('data-mc-theme',t)}catch(e){document.documentElement.setAttribute('data-mc-theme','dark')}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
