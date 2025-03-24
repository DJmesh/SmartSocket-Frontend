import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ElementType } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface IconLinkButtonProps {
  Icon: ElementType;
  label: string;
  href: string;
  colorClass: string;
  accordionValue: string;
}

const IconButtonWithAccordion: React.FC<IconLinkButtonProps> = ({
  Icon,
  label,
  href,
  colorClass,
  accordionValue,
}) => (
  <AccordionItem value={accordionValue} className="border-b-0">
    <TooltipProvider>
      <Tooltip>
        <AccordionTrigger>
          <TooltipTrigger asChild>
            <Link href={href} className="flex items-center justify-start gap-3">
              <Icon className={`size-10 ${colorClass}`} />
              <p className={cn("text-xl text-left origin-left")}>{label}</p>
            </Link>
          </TooltipTrigger>
        </AccordionTrigger>
      </Tooltip>
      <AccordionContent className="text-xl">{label}</AccordionContent>
    </TooltipProvider>
  </AccordionItem>
);

// Uso do componente

export default IconButtonWithAccordion;
