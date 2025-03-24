'use client'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Leaf, SearchIcon, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-muted-foreground pr-6 h-12 w-96 flex justify-start text-xl border-2">
          <SearchIcon className="top-2.5 size-7 mr-2.5" />
          Pesquisar Eixos ou Projetos...
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[510px] px-0 py-0 border-0">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Digite um Eixo ou Projeto..." />
          <CommandList>
            <CommandEmpty>Nenhum Projeto Encontrado.</CommandEmpty>
            <CommandGroup heading="Eixos">
              <CommandItem>
                <Leaf className="mr-2 h-4 w-4" />
                <span>Meio Ambiente</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Projetos">
              <CommandItem>
                <Trash className="mr-2 h-4 w-4" />
                <span>Contentor Inteligente</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
