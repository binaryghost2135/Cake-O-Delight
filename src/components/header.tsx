import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-foreground font-cute">
            Cake-O-Deliht
          </h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#cake-photos-section" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Our Cakes
          </Link>
          <Link href="#more-sweet-delights-section" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Delights
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Contact
          </Link>
        </nav>
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
