"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Settings, User, Sun, Moon } from "lucide-react"
import SettingsMenu from "./SettingsMenu"
import UserMenu from "./UserMenu"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  function handleToggleTheme() {
    // Alterna o estado do darkMode
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark", !darkMode)
  }

  return (
    <header className="flex items-center justify-between w-full h-16 px-4 border-b border-border bg-card">
      {/* Esquerda: Logo ou nome da empresa redireciona para /home */}
      <div className="flex items-center space-x-2">
        <Link href="/home" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <span className="font-bold text-lg">SmartSocket</span>
        </Link>
      </div>

      {/* Direita: Ícones (Settings, Theme Toggle, User) */}
      <div className="flex items-center space-x-4">
        {/* Botão de configurações */}
        <SettingsMenu>
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>
        </SettingsMenu>

        {/* Toggle de Tema */}
        <Button variant="ghost" size="sm" onClick={handleToggleTheme}>
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* Menu do usuário */}
        <UserMenu>
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </UserMenu>
      </div>
    </header>
  )
}
