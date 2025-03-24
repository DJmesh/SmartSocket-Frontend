"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Wrench } from "lucide-react"


interface SettingsMenuProps {
  children: React.ReactNode
}

export default function SettingsMenu({ children }: SettingsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-bold">Configurações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Configurações do Sistema
        </DropdownMenuItem>
        <DropdownMenuItem>
          Preferências
        </DropdownMenuItem>
        <DropdownMenuItem>
          Segurança
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Wrench className="mr-2 h-4 w-4" />
          Cadastrar Dispositivo
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          Resetar Configurações
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
