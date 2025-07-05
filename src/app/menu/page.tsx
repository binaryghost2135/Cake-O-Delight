
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingCart } from "lucide-react";

const menuCategories = [
  {
    category: "Signature Cakes",
    items: [
      {
        name: "A cake for 2",
        price: "₹500/- onwards",
        src: "https://i.postimg.cc/k4jZX6HP/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "bento cake",
        referenceImages: [
          "https://i.postimg.cc/hv2HF0ZW/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/9X13qWm8/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/fLN4YySF/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/YS6dnnBS/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/Pxd2BWdQ/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/CKTv4ytt/Whats-App-Image-2025-06-22-at-8.jpg"
        ],
      },
      {
        name: "Cake for small celebrations (500g)",
        price: "₹700/- onwards",
        src: "https://i.postimg.cc/nLJNdtmg/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "small cake",
        referenceImages: [
            "https://i.postimg.cc/GtgKTtZ0/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/rFvGBBT9/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/W3X6xtpD/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/FsqG9fy3/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/g0yKqNfH/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/qB1j5Dgm/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/zGKw8xXY/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/Z5dH0THg/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/8PstQd6T/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/wBzXvD7y/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/hvY8Pwdc/Whats-App-Image-2025-06-22-at-8.jpg"
        ],
      },
      {
        name: "The Family Size (1kg)",
        price: "₹1300/- onwards",
        src: "https://i.postimg.cc/Z531FqW6/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "large cake",
        referenceImages: [
          "https://i.postimg.cc/3wHKjmNj/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/63X4zKd8/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/RVVfjv2f/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/GtzDHfTH/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/hj1z5Yrp/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/jdgNTGr1/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/NGb28WL0/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/yN9SFxSq/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/mZSCXPpB/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/QdF7d08d/Whats-App-Image-2025-06-22-at-8.jpg"
        ],
      },
    ],
  },
  {
    category: "Decadent Brownies",
    items: [
      {
        name: "BOX of 2 Brownies",
        price: "₹130/- onwards",
        src: "https://i.postimg.cc/sDbkhWgV/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "brownies box",
        referenceImages: [
          "https://i.postimg.cc/BbW32ZDz/Whats-App-Image-2025-06-23-at-1.jpg",
          "https://i.postimg.cc/RFJ93J3f/Whats-App-Image-2025-06-23-at-1.jpg"
        ]
      },
      {
        name: "BOX of 4 Brownies",
        price: "₹350/- onwards",
        src: "https://i.postimg.cc/hv5HMz81/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "brownies box",
        referenceImages: [
            "https://i.postimg.cc/Vkncc0SH/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/KYTjwYFZ/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/k4Xr8jTk/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/Z5CCPcMv/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/hGnR44T4/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/c4VNjBJn/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/BnktmKrY/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/XvgSrMkf/Whats-App-Image-2025-06-23-at-1.jpg"
        ]
      },
      {
        name: "BOX of 6 Brownies",
        price: "₹600/- onwards",
        src: "https://i.postimg.cc/Bb6rxcFv/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "brownies box",
        referenceImages: [
            "https://i.postimg.cc/nVNFbJRr/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/yxMrfnT6/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/BQDqJVkg/Whats-App-Image-2025-06-23-at-1.jpg",
            "https://i.postimg.cc/MHMFbgVr/Whats-App-Image-2025-06-23-at-1.jpg"
        ]
      },
      {
        name: "Box of 9 brownies",
        price: "₹1000/- onwards",
        src: "https://i.postimg.cc/0Q8RNq2D/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "brownies box",
        referenceImages: [
          "https://i.postimg.cc/3NXbcmfg/Whats-App-Image-2025-06-23-at-1.jpg",
          "https://i.postimg.cc/SRFvdDdS/Whats-App-Image-2025-06-23-at-1.jpg",
          "https://i.postimg.cc/P5t00VjN/Whats-App-Image-2025-06-23-at-1.jpg"
        ]
      },
      {
        name: "Brownie bites",
        price: "₹300/- onwards",
        src: "https://i.postimg.cc/3JWhp7jZ/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "brownie bites",
        referenceImages: [
          "https://i.postimg.cc/Pr9Zj3Vt/Whats-App-Image-2025-06-23-at-1.jpg",
          "https://i.postimg.cc/MZ57d9d9/Whats-App-Image-2025-06-23-at-1.jpg",
          "https://i.postimg.cc/mkLQT923/Whats-App-Image-2025-06-23-at-1.jpg",
          "https://i.postimg.cc/nr3qrLCy/Whats-App-Image-2025-06-23-at-1.jpg"
        ]
      },
    ],
  },
  {
    category: "Creamy Cheesecakes",
    items: [
      {
        name: "Mini cheesecake",
        price: "₹700/- onwards",
        src: "https://i.postimg.cc/wBYYSmCW/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "mini cheesecake",
        referenceImages: [
          "https://i.postimg.cc/d1jJ8kRx/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/KvqvqTXX/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/mrQ4szng/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/RVXqk8HD/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/sfJ2W8wg/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/rptmtwYB/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/j2qtvxZd/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/g2jrmDyk/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/tCC4N5Mt/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/FR5KbXM7/Whats-App-Image-2025-06-23-at-7.jpg"
        ],
      },
      {
        name: "½ kg Cheesecake",
        price: "₹1200/- onwards",
        src: "https://i.postimg.cc/T3DX794L/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "cheesecake",
        referenceImages: [
          "https://i.postimg.cc/qMznWVLb/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/Y08gyS7X/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/BvwVRqSn/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/3JMPKJgy/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/tCSW372J/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/Ss6cCrvb/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/T3t7WRWJ/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/d3GN7r8h/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/W18K6Gxr/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/1XF2pLZ5/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/HWtQL6MQ/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/Prm0Ns4S/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/9QDTJVnp/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/FzXDQz2N/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/TwMrKSQc/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/Qt2nx0WL/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/Bn4kKY74/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/Qdv7zwLr/Whats-App-Image-2025-06-23-at-7.jpg"
        ],
      },
    ],
  },
  {
    category: "Delightful Cupcakes",
    items: [
      {
        name: "BOX of 4 Cupcakes",
        price: "₹300/- onwards",
        src: "https://i.postimg.cc/Bb7Gyw3D/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "cupcakes box",
        referenceImages: [
          "https://i.postimg.cc/vBjY3FgJ/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/htSXJn9s/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/FsXd43z2/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/0NkyNC1B/Whats-App-Image-2025-06-22-at-8.jpg",
          "https://i.postimg.cc/28dq8yB3/Whats-App-Image-2025-06-22-at-8.jpg"
        ],
      },
      {
        name: "Box of 6 cupcakes",
        price: "₹450/- onwards",
        src: "https://i.postimg.cc/sXczPg0T/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "cupcakes box",
        referenceImages: [
          "https://i.postimg.cc/3JG6cybS/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/Y0Zxr94d/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/0NscKbV3/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/9MNdbMBc/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/G3H6vgP1/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/pT0ZSkPb/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/W1PKL2B2/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/N0kb6BV0/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/JzcjgKQ6/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/HL6PybVx/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/bYWWg0LS/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/pL8sdDJz/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/76L1S70B/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/76P9Xj8n/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/g0mHk1Jb/Whats-App-Image-2025-06-23-at-12.jpg"
        ],
      },
      {
        name: "Box of 12 Cupcakes",
        price: "₹1100/- onwards",
        src: "https://i.postimg.cc/vBMM6VX1/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "cupcakes box",
        referenceImages: [
          "https://i.postimg.cc/Yq7fthCy/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/Yq8gkRVh/Whats-App-Image-2025-06-23-at-12.jpg",
          "https://i.postimg.cc/bY9SHLq3/Whats-App-Image-2025-06-23-at-12.jpg"
        ],
      },
    ],
  },
  {
    category: "Special Treats",
    items: [
      {
        name: "Modak chocolates",
        price: "Box of 11: ₹251/- | Box of 21: ₹501/-",
        src: "https://i.postimg.cc/YqVHzVbB/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "modak chocolates",
        referenceImages: [
            "https://i.postimg.cc/hv2HF0ZW/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/9X13qWm8/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/fLN4YySF/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/YS6dnnBS/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/Pxd2BWdQ/Whats-App-Image-2025-06-22-at-8.jpg",
            "https://i.postimg.cc/CKTv4ytt/Whats-App-Image-2025-06-22-at-8.jpg"
        ]
      },
    ],
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

        {menuCategories.map((category) => (
          <section key={category.category} className="mb-16">
            <h2 className="text-4xl font-headline font-bold text-center mb-10 text-foreground/90">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.items.map((item) => (
                'referenceImages' in item && Array.isArray(item.referenceImages) && item.referenceImages.length > 0 ? (
                  <Dialog key={item.name}>
                    <Card className="group overflow-hidden rounded-3xl border-2 border-primary/30 bg-card/50 shadow-xl transition-all duration-300 ease-in-out hover:border-primary hover:shadow-2xl hover:scale-[1.03]">
                      <CardHeader className="p-0 overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={400}
                          height={300}
                          data-ai-hint={item.hint}
                          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </CardHeader>
                      <CardContent className="p-5 text-center bg-background/20 backdrop-blur-sm">
                        <CardTitle className="text-2xl font-headline mb-2 text-foreground">{item.name}</CardTitle>
                        <p className="text-lg font-cute text-accent mb-4">{item.price}</p>
                        <DialogTrigger asChild>
                          <Button>View Designs</Button>
                        </DialogTrigger>
                      </CardContent>
                    </Card>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{item.name} - Reference Designs</DialogTitle>
                      </DialogHeader>
                      <Carousel className="w-full" opts={{ loop: true }}>
                        <CarouselContent>
                          {(item.referenceImages as string[]).map((refSrc, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                <Card className="overflow-hidden">
                                  <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <Image
                                      src={refSrc}
                                      alt={`${item.name} reference design ${index + 1}`}
                                      width={500}
                                      height={500}
                                      data-ai-hint="cake design"
                                      className="rounded-lg object-cover w-full h-full"
                                    />
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                      </Carousel>
                      <DialogFooter>
                        <Button>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                <Card key={item.name} className="group overflow-hidden rounded-3xl border-2 border-primary/30 bg-card/50 shadow-xl transition-all duration-300 ease-in-out hover:border-primary hover:shadow-2xl hover:scale-[1.03]">
                  <CardHeader className="p-0 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={400}
                      height={300}
                      data-ai-hint={item.hint}
                      className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </CardHeader>
                  <CardContent className="p-5 text-center bg-background/20 backdrop-blur-sm">
                    <CardTitle className="text-2xl font-headline mb-2 text-foreground">{item.name}</CardTitle>
                    <p className="text-lg font-cute text-accent mb-4">{item.price}</p>
                    <Button>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              )))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
