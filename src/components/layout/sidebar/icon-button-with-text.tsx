import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ElementType } from "react";
import { cn } from "@/lib/utils";

interface IconButtonWithTextProps {
  Icon: ElementType;
  href: string;
  colorClass: string;
  label: string;
}

const IconButtonWithText: React.FC<IconButtonWithTextProps> = ({
  Icon,
  href,
  colorClass,
  label,
}) => (
  <Link href={href} className="flex items-center justify-start origin-left gap-2">
    <Button
      variant="ghost"
      size="icon"
      className="mt-auto rounded-lg"
      aria-label="Help"
    >
      <Icon className={`size-10 ${colorClass}`} />
    </Button>
    <p className={cn("text-2xl text-left")}>{label}</p>
  </Link>
);

// Uso do componente

export default IconButtonWithText;
