import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InitialAnimation } from '@/components/initial-animation';
import { PhotoGrid } from '@/components/photo-grid';
import { ScrollAnimatedGrid } from '@/components/scroll-animated-grid';
import { FloatingIcons } from '@/components/floating-icons';
import { FounderMessage } from '@/components/founder-message';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <InitialAnimation>
      <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden">
        <FloatingIcons
          numIcons={15}
          animationClass="continuous-animation"
        />
        <Header />
        <main className="flex-grow container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="py-12 md:py-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight font-headline">
              Founder - Riddhi Oswal
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Hello buddy! I'm Riddhi Oswal, the 19-year-old founder of CAKE-O-DELIGHT, your go-to destination for scrumptious treats that make every occasion unforgettable! 🎉 We specialize in crafting delicious delicacies that are perfect for birthdays, celebrations, or just because. Our baked goodies are made with love, and we can't wait to share that love with you!
            </p>
          </div>

          <FounderMessage />

          <section id="cake-photos-section" className="pt-8 pb-8">
            <h3 className="text-3xl sm:text-4xl font-bold mb-10 font-headline">
              Our Masterpieces
            </h3>
            <PhotoGrid />
          </section>

          <div className="py-12 text-center">
            <Button asChild size="lg" className="font-bold text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-shake">
              <Link href="/menu">
                <Sparkles className="mr-3 h-6 w-6" />
                Check our Menu
              </Link>
            </Button>
          </div>

          <section
            id="more-sweet-delights-section"
            className="py-16"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-10 font-headline">
              More Sweet Delights
            </h3>
            <ScrollAnimatedGrid />
          </section>
        </main>
        <Footer />
      </div>
    </InitialAnimation>
  );
}
