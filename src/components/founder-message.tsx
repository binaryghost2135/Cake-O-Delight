import Image from "next/image";

export function FounderMessage() {
  return (
    <section className="mb-12 mt-[-4rem]">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 text-center">
          <Image
            src="https://i.postimg.cc/QMVNtrMJ/Screenshot-2025-06-26-175856.png"
            alt="Founder of Cake-O-Delight"
            width={120}
            height={120}
            data-ai-hint="founder portrait"
            className="rounded-full object-cover shadow-lg border-4 border-primary"
          />
        <blockquote className="text-center">
          <footer className="mt-2 font-semibold text-accent">- Riddhi Founder</footer>
        </blockquote>
      </div>
    </section>
  );
}
