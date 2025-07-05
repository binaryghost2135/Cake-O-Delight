import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  {
    name: "Classic Chocolate Cake",
    price: "Rs. 800 onwards",
    src: "https://i.postimg.cc/FHSrJDrs/Whats-App-Image-2025-06-23-at-8.jpg",
    hint: "chocolate cake",
  },
  {
    name: "Custom Bento Cake",
    price: "Rs. 500 onwards",
    src: "https://i.postimg.cc/V6Qx8vYg/Whats-App-Image-2025-06-30-at-10.jpg",
    hint: "bento cake",
  },
  {
    name: "Elegant Decorated Cake",
    price: "Rs. 1200 onwards",
    src: "https://i.postimg.cc/fyz6gPKf/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "decorated cake",
  },
  {
    name: "Vanilla Dream Cupcakes",
    price: "Rs. 450 onwards",
    src: "https://i.postimg.cc/d1swpF8L/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "cupcakes",
  },
   {
    name: "Sweet Delight Pastry",
    price: "Rs. 150 onwards",
    src: "https://i.postimg.cc/Pr9Zj3Vt/Whats-App-Image-2025-06-23-at-1.jpg",
    hint: "sweet delight"
  },
  {
    name: "Pink Berry Pastry",
    price: "Rs. 180 onwards",
    src: "https://i.postimg.cc/gJm87xS8/Whats-App-Image-2025-06-23-at-7.jpg",
    hint: "pink pastry"
  }
];

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold font-cute text-foreground">Our Menu</h1>
          <p className="text-xl text-foreground/70 mt-4">Baked with love, crafted with joy!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.name} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl border-primary/50">
              <CardHeader className="p-0">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={400}
                  height={300}
                  data-ai-hint={item.hint}
                  className="w-full h-60 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardTitle className="text-2xl font-headline mb-2">{item.name}</CardTitle>
                <p className="text-xl font-cute text-accent">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
