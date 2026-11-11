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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
