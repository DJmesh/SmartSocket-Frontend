import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Link from "next/link";
import { ElementType } from 'react';

interface IconLinkButtonProps {
  Icon: ElementType;
  label: string;
  tooltip: string;
  href: string;
  colorClass: string;
}

const IconButtonWithTooltip: React.FC<IconLinkButtonProps> = ({ Icon, label, tooltip, href, colorClass }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href} className="flex items-center justify-start gap-2">
          <Button variant="ghost" size="icon" className="rounded-lg" aria-label={label}>
            <Icon className={`size-10 ${colorClass}`} />
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// Uso do componente

export default IconButtonWithTooltip;