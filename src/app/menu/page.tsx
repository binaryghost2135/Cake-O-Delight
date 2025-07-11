
'use client'

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
import { ShoppingCart, Circle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useCart, type CartItem } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";

const menuCategories = [
  {
    category: "Signature Cakes",
    items: [
      {
        name: "A cake for 2",
        price: "Rs.500/- onwards",
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
        price: "Rs.700/- onwards",
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
        price: "Rs.1300/- onwards",
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
        price: "Rs.130/- onwards",
        src: "https://i.postimg.cc/sDbkhWgV/Whats-App-Image-2025-07-01-at-12.jpg",
        hint: "brownies box",
        referenceImages: [
          "https://i.postimg.cc/BbW32ZDz/Whats-App-Image-2025-06-23-at-1.jpg",
          "https://i.postimg.cc/RFJ93J3f/Whats-App-Image-2025-06-23-at-1.jpg"
        ]
      },
      {
        name: "BOX of 4 Brownies",
        price: "Rs.350/- onwards",
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
        price: "Rs.600/- onwards",
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
        price: "Rs.1000/- onwards",
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
        price: "Rs.300/- onwards",
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
        price: "Rs.700/- onwards",
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
        price: "Rs.1200/- onwards",
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
        price: "Rs.300/- onwards",
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
        price: "Rs.450/- onwards",
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
        price: "Rs.1100/- onwards",
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
    category: "Bombolonis",
    items: [
      {
        name: "BOX of 4",
        price: "Rs.800/- onwards",
        src: "https://i.postimg.cc/8C94pByg/Whats-App-Image-2025-07-05-at-9.jpg",
        hint: "bomboloni box",
        referenceImages: [
          "https://i.postimg.cc/gJm87xS8/Whats-App-Image-2025-06-23-at-7.jpg",
          "https://i.postimg.cc/2yfxvjRH/Whats-App-Image-2025-07-05-at-9.jpg",
          "https://i.postimg.cc/PfpGQSGY/Whats-App-Image-2025-07-05-at-9.jpg",
          "https://i.postimg.cc/rFj90LhJ/Whats-App-Image-2025-07-05-at-9.jpg"
        ],
      },
      {
        name: "BOX of 8",
        price: "Rs.1600/- onwards",
        src: "https://i.postimg.cc/4x4BB3Kq/Whats-App-Image-2025-07-05-at-9.jpg",
        hint: "bomboloni box",
        referenceImages: [
          "https://i.postimg.cc/8C94pByg/Whats-App-Image-2025-07-05-at-9.jpg",
          "https://i.postimg.cc/4x4BB3Kq/Whats-App-Image-2025-07-05-at-9.jpg"
        ],
      },
    ],
  },
  {
    category: "Cookies",
    items: [
      {
        name: "BOX of 4 Cookies",
        price: "Rs.259/- onwards",
        src: "https://i.postimg.cc/FHSrJDrs/Whats-App-Image-2025-06-23-at-8.jpg",
        hint: "cookies box",
        referenceImages: [
          "https://i.postimg.cc/FHSrJDrs/Whats-App-Image-2025-06-23-at-8.jpg",
          "https://i.postimg.cc/vZKJxKX4/Whats-App-Image-2025-07-05-at-9.jpg"
        ]
      },
      {
        name: "BOX of 6 cookies",
        price: "Rs.389/- onwards",
        src: "https://i.postimg.cc/90qVrhHF/Whats-App-Image-2025-07-05-at-9.jpg",
        hint: "cookies box",
        referenceImages: [
          "https://i.postimg.cc/90qVrhHF/Whats-App-Image-2025-07-05-at-9.jpg",
          "https://i.postimg.cc/xdTPYjLH/Whats-App-Image-2025-07-05-at-9.jpg"
        ]
      },
    ],
  },
  {
    category: "Special Treats",
    items: [
      {
        name: "Modak chocolates",
        price: "Box of 11: Rs.251/- | Box of 21: Rs.501/-",
        src: "https://i.postimg.cc/YqVHzVbB/Whats-App-Image-2025-07-01-at-1.jpg",
        hint: "modak chocolates",
        referenceImages: [
            "https://i.postimg.cc/k58vz3n3/Whats-App-Image-2025-06-23-at-8.jpg",
            "https://i.postimg.cc/YqVHzVbB/Whats-App-Image-2025-07-01-at-1.jpg",
            "https://i.postimg.cc/7L4yV1Hn/Whats-App-Image-2025-06-23-at-8.jpg",
            "https://i.postimg.cc/sX6dstpT/Whats-App-Image-2025-06-23-at-8.jpg",
            "https://i.postimg.cc/ZK1m9tXg/Whats-App-Image-2025-06-23-at-8.jpg",
            "https://i.postimg.cc/wjLpL4pB/Whats-App-Image-2025-06-23-at-8.jpg",
            "https://i.postimg.cc/Yq4kqqDY/Whats-App-Image-2025-06-23-at-8.jpg"
        ]
      },
    ],
  },
  {
    category: "Combos",
    items: [
      {
        name: "Delicious Combos",
        price: "Customizable",
        src: "https://i.postimg.cc/L6N1Fc3g/Whats-App-Image-2025-07-05-at-9.jpg",
        hint: "cake combo",
        referenceImages: [
          "https://i.postimg.cc/Wb2kKNgP/Whats-App-Image-2025-07-05-at-9.jpg",
          "https://i.postimg.cc/nhW9Cq5H/Whats-App-Image-2025-07-05-at-9.jpg",
          "https://i.postimg.cc/L6N1Fc3g/Whats-App-Image-2025-07-05-at-9.jpg"
        ],
      },
    ],
  }
];


export default function MenuPage() {
  const [selectedDesigns, setSelectedDesigns] = useState<{[key: string]: number | null}>({});
  const { addToCart } = useCart();
  const [openDialogs, setOpenDialogs] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleSelectDesign = (itemName: string, designIndex: number) => {
    setSelectedDesigns(prev => ({
      ...prev,
      [itemName]: prev[itemName] === designIndex ? null : designIndex,
    }));
  };

  const resetSelection = (itemName: string) => {
    setSelectedDesigns(prev => ({
      ...prev,
      [itemName]: null
    }));
  }

  const handleOpenChange = (itemName: string, open: boolean) => {
    setOpenDialogs(prev => ({ ...prev, [itemName]: open }));
    if (!open) {
      resetSelection(itemName);
    }
  };

  const handleAddToCart = (item: (typeof menuCategories)[0]['items'][0] & { referenceImages: string[] }) => {
    const selectedDesignIndex = selectedDesigns[item.name];
    if (selectedDesignIndex === null || selectedDesignIndex === undefined) return;

    const cartItem = {
      name: item.name,
      price: item.price,
      src: item.src,
      referenceImage: item.referenceImages[selectedDesignIndex],
      referenceIndex: selectedDesignIndex + 1,
    };

    addToCart(cartItem);
    handleOpenChange(item.name, false);
  };
  
  const handleSimpleAddToCart = (item: (typeof menuCategories)[0]['items'][0]) => {
      const cartItem = {
        name: item.name,
        price: item.price,
        src: item.src,
        referenceImage: item.src,
      };
      addToCart(cartItem);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">Our Menu</h1>
          <p className="text-lg sm:text-xl text-foreground/70 mt-4">Baked with love, crafted with joy!</p>
        </div>

        {menuCategories.map((category) => (
          <section key={category.category} className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-10 text-foreground/90">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {category.items.map((item) => (
                'referenceImages' in item && Array.isArray(item.referenceImages) && item.referenceImages.length > 0 ? (
                  <Dialog key={item.name} open={openDialogs[item.name] || false} onOpenChange={(open) => handleOpenChange(item.name, open)}>
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
                          <CardTitle className="text-xl font-headline mb-2 text-foreground">{item.name}</CardTitle>
                          <p className="text-lg font-semibold text-accent mb-4">{item.price}</p>
                          <DialogTrigger asChild>
                            <Button>View Designs</Button>
                          </DialogTrigger>
                        </CardContent>
                      </Card>
                    <DialogContent className="w-[95vw] max-w-md sm:max-w-3xl rounded-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-headline">{item.name}</DialogTitle>
                         <p className="text-center text-muted-foreground">Select a Reference Design</p>
                      </DialogHeader>
                      <Carousel className="w-full" opts={{ loop: false, align: "start" }}>
                        <CarouselContent className="-ml-2 py-4">
                          {(item.referenceImages as string[]).map((refSrc, index) => {
                            const isSelected = selectedDesigns[item.name] === index;
                            return (
                              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2">
                                <div className="p-1 cursor-pointer" onClick={() => handleSelectDesign(item.name, index)}>
                                  <Card className={cn("overflow-hidden relative transition-all rounded-2xl", isSelected ? "border-primary ring-2 ring-primary ring-offset-2" : "border-muted-foreground/20")}>
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                      <Image
                                        src={refSrc}
                                        alt={`${item.name} reference design ${index + 1}`}
                                        width={500}
                                        height={500}
                                        data-ai-hint="cake design"
                                        className="rounded-lg object-cover w-full h-full"
                                      />
                                       <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1">
                                        {isSelected ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <Circle className="w-5 h-5 text-muted-foreground/50" />}
                                    </div>
                                    <div className="absolute bottom-0 w-full bg-black/50 text-white text-center p-1 text-xs font-semibold">
                                        Reference {index + 1}
                                    </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </CarouselItem>
                            )
                          })}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                      </Carousel>
                      <DialogFooter>
                        <Button className="w-full" disabled={selectedDesigns[item.name] === null || selectedDesigns[item.name] === undefined} onClick={() => handleAddToCart(item as any)}>
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
                    <CardTitle className="text-xl font-headline mb-2 text-foreground">{item.name}</CardTitle>
                    <p className="text-lg font-semibold text-accent mb-4">{item.price}</p>
                    <Button onClick={() => handleSimpleAddToCart(item)}>
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
