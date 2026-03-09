
import { Providers } from '@/components/providers';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import { GlobalStyles } from '@/styles/globalStyles';
import type { Metadata } from 'next';
import { Jersey_10, Pixelify_Sans, Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--primary-font',
})

// Fonts
const jersey_10 = Jersey_10({
  weight: '400',
  subsets: ['latin'],
  variable: '--secondary-font',
})

// Fonts
const pixelify_sans = Pixelify_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--tertiary-font',
})


// Metadata
export const metadata: Metadata = {
  title: 'Masked Components',
  description: 'Reusable React component library built with TypeScript, created by RNT. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${jersey_10.variable} ${pixelify_sans.variable}`} data-scroll-behavior="smooth">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <Providers>
            {children}
          </Providers>

        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

