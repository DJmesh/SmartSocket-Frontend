"use client";
import { Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import NavBarOpen from "./nav-bar-open";
import NavBarClose from "./nav-bar-close";

interface Props {
  className?: string;
}

export default function SideBar({
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={cn("flex h-full flex-col border-r-2 justify-start", open ? "w-96" : "w-24")}
    >
      <div
        className={cn(
          "border-b-2 flex items-center h-24 gap-2 p-2",
          open ? "justify-start" : "justify-center"
        )}
      >
        <Button
          variant="outline"
          size="icon"
          aria-label="Home"
          className={cn("size-14 p-2")}
          // onClick={() => setOpen(!open)}
        >
          <Triangle
            className={cn("size-12 fill-foreground", open ? "rotate-90" : "")}
          />
        </Button>
        <h1 className={cn("flex text-xl origin-left 2xl:text-xl", !open ? "hidden" : "")}>
          SmartSocket
        </h1>
      </div>
      <NavBarOpen className={!open ? "hidden" : ""} />
      <NavBarClose className={open ? "hidden" : ""} />
    </aside>
  );
}
