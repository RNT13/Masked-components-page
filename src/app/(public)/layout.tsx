
// 🌐 LAYOUT PÚBLICO - Layout para páginas públicas
// ⚠️ ARQUIVO DELETÁVEL - Pode ser removido ao criar seu próprio layout

import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
