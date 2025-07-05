import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const menuItems = [
  {
    name: "Classic Chocolate Cake",
    description: "A rich and decadent chocolate cake, perfect for any celebration.",
    price: "₹800",
    src: "https://i.postimg.cc/FHSrJDrs/Whats-App-Image-2025-06-23-at-8.jpg",
    hint: "chocolate cake",
  },
  {
    name: "Custom Bento Cake",
    description: "A small, personal-sized cake, customized for your special someone.",
    price: "₹500",
    src: "https://i.postimg.cc/V6Qx8vYg/Whats-App-Image-2025-06-30-at-10.jpg",
    hint: "bento cake",
  },
  {
    name: "Elegant Decorated Cake",
    description: "A beautifully decorated cake that is the centerpiece of any event.",
    price: "₹1200",
    src: "https://i.postimg.cc/fyz6gPKf/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "decorated cake",
  },
  {
    name: "Vanilla Dream Cupcakes",
    description: "Light and fluffy vanilla cupcakes with a swirl of buttercream frosting.",
    price: "₹450 (Box of 6)",
    src: "https://i.postimg.cc/d1swpF8L/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "cupcakes",
  },
   {
    name: "Sweet Delight Pastry",
    description: "A delicate and flavorful pastry, perfect with a cup of coffee.",
    price: "₹150",
    src: "https://i.postimg.cc/Pr9Zj3Vt/Whats-App-Image-2025-06-23-at-1.jpg",
    hint: "sweet delight"
  },
  {
    name: "Pink Berry Pastry",
    description: "A fruity and refreshing pastry with a hint of pink berry.",
    price: "₹180",
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
              <CardContent className="p-6 text-center flex flex-col">
                <CardTitle className="text-2xl font-headline mb-2">{item.name}</CardTitle>
                <CardDescription className="text-foreground/80 mb-4 h-12 flex-grow">{item.description}</CardDescription>
                <p className="text-2xl font-bold font-cute text-accent mb-4">{item.price}</p>
                <Button className="w-full rounded-full font-bold mt-auto">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
