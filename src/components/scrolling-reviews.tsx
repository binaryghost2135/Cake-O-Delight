"use client";

import { Star } from 'lucide-react';

const reviews = [
  "Hey dear.... Lil Chocolate strawberries box in my hand right now and the last one left out😄 rest all finished off already ❣️",
  "A perfect blend of taste and sweetness! I was never a sweet lover, or a cake lover, not at all!! But you made me fall in love with this cake family!!",
  "Truly awesome!! Looking forward to such treats for our tastebuds! Can't wait to See you back soon....Do come back with a bang super soon✨ more power to you... Keep baking....keep smiling....will miss you these months ❣️",
  "Dear you aren't serving us...we are serving our own selves and you are helping us do that in a true sense 🤗❣️",
  "hey the cake was really tasty, special thank you for making it ready at the very last minute, it’s literally the same as what we imagined"
];

export function ScrollingReviews() {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 font-headline text-center">
                What Our Customers Say
            </h3>
        </div>
        <div className="relative w-full overflow-hidden group">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {[...reviews, ...reviews].map((review, index) => (
                    <div key={index} className="flex-shrink-0 w-80 sm:w-96 mx-4">
                        <div className="bg-card/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-2 border-primary h-full flex flex-col text-left">
                            <div className="flex mb-3 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground/80 italic flex-grow">"{review}"</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
             <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
    </section>
  );
}
