
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  {
    name: "A cake for 2",
    price: "₹500/- onwards",
    src: "https://i.postimg.cc/V6Qx8vYg/Whats-App-Image-2025-06-30-at-10.jpg",
    hint: "bento cake"
  },
  {
    name: "Cake for small celebrations (500g)",
    price: "₹700/- onwards",
    src: "https://i.postimg.cc/FHSrJDrs/Whats-App-Image-2025-06-23-at-8.jpg",
    hint: "small cake"
  },
  {
    name: "The Family Size (1kg)",
    price: "₹1300/- onwards",
    src: "https://i.postimg.cc/fyz6gPKf/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "large cake"
  },
  {
    name: "BOX of 2 Brownies",
    price: "₹130/- onwards",
    src: "https://placehold.co/400x300.png",
    hint: "brownies box"
  },
  {
    name: "BOX of 4 Brownies",
    price: "₹350/- onwards",
    src: "https://placehold.co/400x300.png",
    hint: "brownies box"
  },
  {
    name: "BOX of 6 Brownies",
    price: "₹600/- onwards",
    src: "https://placehold.co/400x300.png",
    hint: "brownies box"
  },
  {
    name: "Box of 9 brownies",
    price: "₹1000/- onwards",
    src: "https://placehold.co/400x300.png",
    hint: "brownies box"
  },
  {
    name: "Mini cheesecake",
    price: "₹700/- onwards",
    src: "https://i.postimg.cc/Pr9Zj3Vt/Whats-App-Image-2025-06-23-at-1.jpg",
    hint: "mini cheesecake"
  },
  {
    name: "½ kg Cheesecake",
    price: "₹1200/- onwards",
    src: "https://i.postimg.cc/Pr9Zj3Vt/Whats-App-Image-2025-06-23-at-1.jpg",
    hint: "cheesecake"
  },
  {
    name: "Modak chocolates",
    price: "Box of 11: ₹251/- | Box of 21: ₹501/-",
    src: "https://placehold.co/400x300.png",
    hint: "modak chocolates"
  },
  {
    name: "Brownie bites",
    price: "₹300/- onwards",
    src: "https://placehold.co/400x300.png",
    hint: "brownie bites"
  },
  {
    name: "BOX of 4 Cupcakes",
    price: "₹300/- onwards",
    src: "https://i.postimg.cc/d1swpF8L/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "cupcakes box"
  },
  {
    name: "Box of 6 cupcakes",
    price: "₹450/- onwards",
    src: "https://i.postimg.cc/d1swpF8L/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "cupcakes box"
  },
  {
    name: "Box of 12 Cupcakes",
    price: "₹1100/- onwards",
    src: "https://i.postimg.cc/d1swpF8L/Whats-App-Image-2025-06-22-at-8.jpg",
    hint: "cupcakes box"
  },
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
              <CardContent className="p-4 text-center">
                <CardTitle className="text-2xl font-headline mb-2">{item.name}</CardTitle>
                <p className="text-lg font-cute text-accent">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
