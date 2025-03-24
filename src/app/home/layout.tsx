import { PropsWithChildren } from "react"
import Navbar from "@/components/layout/navbar/Navbar"

export const metadata = {
  title: "SmartSocket",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-foreground">
        {/* Navbar global */}
        <Navbar />
        {/* Conteúdo da página */}
        <div className="flex flex-col h-[calc(100vh-64px)]">
          {children}
        </div>
      </body>
    </html>
  )
}
