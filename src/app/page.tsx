import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InitialAnimation } from '@/components/initial-animation';
import { PhotoGrid } from '@/components/photo-grid';
import { ScrollAnimatedGrid } from '@/components/scroll-animated-grid';
import { FloatingIcons } from '@/components/floating-icons';

export default function Home() {
  return (
    <InitialAnimation>
      <div className="flex flex-col min-h-screen bg-background relative">
        <FloatingIcons
          numIcons={15}
          animationClass="continuous-animation"
        />
        <Header />
        <main className="flex-grow container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="py-12 md:py-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-cute [text-shadow:1px_1px_2px_rgba(0,0,0,0.05)]">
              Baked with Love, Crafted with Joy!
            </h2>
            <p className="text-2xl md:text-3xl text-foreground/80 max-w-3xl mx-auto mb-16 font-cute leading-relaxed">
              Step into SweetSlice, where every sprinkle tells a story and every
              bite is a little piece of happiness. We pour our hearts into
              crafting delightful cakes, pastries, and treats, just for you!
            </p>
          </div>

          <section id="cake-photos-section" className="pt-16 pb-8">
            <h3 className="text-5xl font-bold mb-12 font-cute">
              Our Masterpieces
            </h3>
            <PhotoGrid />
          </section>

          <section
            id="more-sweet-delights-section"
            className="py-16"
          >
            <h3 className="text-5xl font-bold mb-12 font-cute">
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
