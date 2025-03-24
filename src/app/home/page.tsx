import Image from "next/image"
import Link from "next/link"
import { MonitorSmartphone, FileText, BarChart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Conteúdo Central */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex items-center space-x-2 mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-4xl font-bold">SmartSocket</h1>
        </div>
      </div>

      {/* Navegação de Ícones - próximos ao rodapé */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-8 mb-4">
          {/* Devices */}
          <Link
            href="/devices"
            className="flex flex-col items-center hover:text-primary transition-colors"
          >
            <MonitorSmartphone className="h-8 w-8 mb-1" />
            <span className="text-sm font-medium">Devices</span>
          </Link>

          {/* Relatórios */}
          <Link
            href="/reports"
            className="flex flex-col items-center hover:text-primary transition-colors"
          >
            <FileText className="h-8 w-8 mb-1" />
            <span className="text-sm font-medium">Relatórios</span>
          </Link>

          {/* Dashboard */}
          <Link
            href="/home/dashboard"
            className="flex flex-col items-center hover:text-primary transition-colors"
          >
            <BarChart className="h-8 w-8 mb-1" />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </div>

        {/* Rodapé */}
        <footer className="w-full text-center py-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SmartSocket. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  )
}
