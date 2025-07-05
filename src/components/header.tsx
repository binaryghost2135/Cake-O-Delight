'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-foreground font-headline">
            Cake-O-Delight
          </h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#cake-photos-section" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Our Cakes
          </Link>
          <Link href="/menu" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Menu
          </Link>
          <Link href="/#more-sweet-delights-section" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Delights
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Contact
          </Link>
        </nav>
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
                <nav className="flex flex-col gap-8 text-lg font-medium mt-16 text-center">
                    <SheetClose asChild>
                        <Link href="/#cake-photos-section" className="transition-colors hover:text-primary text-foreground font-semibold">Our Cakes</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/menu" className="transition-colors hover:text-primary text-foreground font-semibold">Menu</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/#more-sweet-delights-section" className="transition-colors hover:text-primary text-foreground font-semibold">Delights</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="#" className="transition-colors hover:text-primary text-foreground font-semibold">Contact</Link>
                    </SheetClose>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
