import Image from "next/image";

const founderImages = [
  { src: "https://i.postimg.cc/hv2HF0ZW/Whats-App-Image-2025-06-22-at-8.jpg", alt: "A delicious-looking cake", hint: "cake chocolate", className: "row-start-1 col-start-1 -rotate-6" },
  { src: "https://i.postimg.cc/9X13qWm8/Whats-App-Image-2025-06-22-at-8.jpg", alt: "A beautifully decorated pastry", hint: "pastry decoration", className: "row-start-1 col-start-2 rotate-6 z-10 translate-y-4" },
  { src: "https://i.postimg.cc/fyz6gPKf/Whats-App-Image-2025-06-22-at-8.jpg", alt: "Close-up of a pastry", hint: "pastry closeup", className: "row-start-2 col-start-1 rotate-3 z-10 -translate-y-4" },
  { src: "https://i.postimg.cc/fLN4YySF/Whats-App-Image-2025-06-22-at-8.jpg", alt: "Another view of a cake", hint: "cake sideview", className: "row-start-2 col-start-2 -rotate-3 translate-y-2" },
];

export function FounderMessage() {
  return (
    <section className="mb-16 mt-8">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-0">
          {founderImages.map((image, index) => (
            <div key={index} className={`transform transition-transform hover:scale-110 ${image.className}`}>
              <div className="p-2 bg-card rounded-xl shadow-2xl border-2 border-primary">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={250}
                  height={250}
                  data-ai-hint={image.hint}
                  className="rounded-lg object-cover w-full aspect-square"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 text-center mt-12">
        <blockquote className="text-center">
          <footer className="mt-2 font-semibold text-accent">- Riddhi Founder</footer>
        </blockquote>
      </div>
    </section>
  );
}