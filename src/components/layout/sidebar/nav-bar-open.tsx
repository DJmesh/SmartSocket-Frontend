"use client";
import {
  Lock,
  LifeBuoy,
  SquareUser,
  Triangle,
  HeartPulse,
  Zap,
  Leaf,
  Usb,
  GraduationCap,
  HomeIcon,
  FactoryIcon,
  HeartHandshake,
} from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import IconButtonWithAccordion from "./icon-button-with-accordion";
import { cn } from "@/lib/utils";
import IconButtonWithText from "./icon-button-with-text";

interface NavBarOpenProps {
  className: string;
}

export default function NavBarOpen({ className }: NavBarOpenProps) {
  return (
    <>
      <nav className={cn("grid gap-10 p-2 py-0 justify-start items-end", className)}> 
        <Accordion type="single" collapsible className="w-80 flex flex-col gap-2">
          <IconButtonWithAccordion
            Icon={HeartPulse}
            label="Saúde e Qualidade de Vida"
            href="/dashboard"
            colorClass="text-orange-600"
            accordionValue="2"
          />
          <IconButtonWithAccordion
            Icon={Zap}
            label="Energia"
            href="/dashboard/energy"
            colorClass="text-yellow-400"
            accordionValue="3"
          />
          <IconButtonWithAccordion
            Icon={Leaf}
            label="Meio Ambiente"
            href="/dashboard/energy"
            colorClass="text-green-500"
            accordionValue="4"
          />
          <IconButtonWithAccordion
            Icon={Usb}
            label="TIC"
            href="/dashboard/energy"
            colorClass="text-cyan-400"
            accordionValue="5"
          />
          <IconButtonWithAccordion
            Icon={GraduationCap}
            label="Educação e Cultura"
            href="/dashboard/energy"
            colorClass="text-blue-500"
            accordionValue="6"
          />
          <IconButtonWithAccordion
            Icon={Lock}
            label="Mobilidade e Segurança"
            href="/dashboard/energy"
            colorClass="text-violet-700"
            accordionValue="7"
          />
          <IconButtonWithAccordion
            Icon={HomeIcon}
            label="Urbanização"
            href="/dashboard/energy"
            colorClass="text-rose-600"
            accordionValue="8"
          />
          <IconButtonWithAccordion
            Icon={FactoryIcon}
            label="Indústria e Negócios"
            href="/dashboard/energy"
            colorClass="text-blue-800"
            accordionValue="9"
          />
          <IconButtonWithAccordion
            Icon={HeartHandshake}
            label="Governança e Participação"
            href="/dashboard/energy"
            colorClass="text-red-600"
            accordionValue="10"
          />
        </Accordion>
      </nav>

      <nav className={cn("mt-auto grid gap-5 p-2 justify-start items-end", className)}>
        <IconButtonWithText
          Icon={LifeBuoy}
          label="Configurações"
          href="/dashboard/energy"
          colorClass="text-white"
        />
        <IconButtonWithText
          Icon={SquareUser}
          label="Perfil"
          href="/dashboard/energy"
          colorClass="text-white"
        />
      </nav>
    </>
  );
}
