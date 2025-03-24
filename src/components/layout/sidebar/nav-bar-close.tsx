"use client";
import {
  Lock,
  LifeBuoy,
  SquareUser,
  HeartPulse,
  Zap,
  Leaf,
  Usb,
  GraduationCap,
  Home as HomeIcon,
  Factory as FactoryIcon,
  HeartHandshake,
} from "lucide-react";
import IconButtonWithTooltip from "./icon-button-with-tooltip";
import { cn } from "@/lib/utils";

interface NavBarCloseProps {
  className: string;
}

export default function NavBarClose({ className }: NavBarCloseProps) {
  return (
    <>
      <nav className={cn("grid gap-10 p-0 py-3 justify-center items-end", className)}>
        <IconButtonWithTooltip
          Icon={HeartPulse}
          label="Saúde e Qualidade de Vida"
          tooltip="Saúde e Qualidade de Vida"
          href="/dashboard/health"
          colorClass="text-orange-600"
        />
        <IconButtonWithTooltip
          Icon={Zap}
          label="Energia"
          tooltip="Energia"
          href="/dashboard/energy"
          colorClass="text-yellow-400"
        />
        <IconButtonWithTooltip
          Icon={Leaf}
          label="Meio Ambiente"
          tooltip="Meio Ambiente"
          href="/dashboard/energy"
          colorClass="text-green-500"
        />
        <IconButtonWithTooltip
          Icon={Usb}
          label="TIC"
          tooltip="TIC"
          href="/dashboard/energy"
          colorClass="text-cyan-400"
        />
        <IconButtonWithTooltip
          Icon={GraduationCap}
          label="Educação e Cultura"
          tooltip="Educação e Cultura"
          href="/dashboard/energy"
          colorClass="text-blue-500"
        />
        <IconButtonWithTooltip
          Icon={Lock}
          label="Mobilidade e Segurança"
          tooltip="Mobilidade e Segurança"
          href="/dashboard/energy"
          colorClass="text-violet-700"
        />
        <IconButtonWithTooltip
          Icon={HomeIcon}
          label="Urbanização"
          tooltip="Urbanização"
          href="/dashboard/energy"
          colorClass="text-rose-600"
        />
        <IconButtonWithTooltip
          Icon={FactoryIcon}
          label="Indústria e Negócios"
          tooltip="Indústria e Negócios"
          href="/dashboard/energy"
          colorClass="text-blue-800"
        />
        <IconButtonWithTooltip
          Icon={HeartHandshake}
          label="Governança e Participação"
          tooltip="Governança e Participação"
          href="/dashboard/energy"
          colorClass="text-red-600"
        />
      </nav>

      <nav className={cn("mt-auto grid gap-5 p-2 justify-center items-end mb-5", className)}>
        <IconButtonWithTooltip
          Icon={LifeBuoy}
          label="Configurações"
          tooltip="Configurações"
          href="/dashboard/settings"
          colorClass="text-white"
        />
        <IconButtonWithTooltip
          Icon={SquareUser}
          label="Perfil"
          tooltip="Perfil"
          href="/dashboard/profile"
          colorClass="text-white"
        />
      </nav>
    </>
  );
}
