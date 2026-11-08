
import { Providers } from '@/components/providers'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { GlobalStyles } from '@/styles/globalStyles'

export const metadata = { title: 'Masked Components' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyles />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
