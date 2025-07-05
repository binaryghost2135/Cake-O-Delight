'use client';

import { useCart } from '@/context/cart-context';
import { ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

export function CartButton() {
  const { cartItems, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  const itemCount = cartItems.length;

  const handleWhatsAppOrder = () => {
    if (itemCount === 0) return;

    let message = "Hello Cake-O-Delight! I would like to place an order for the following items:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}`;
      if (item.referenceIndex) {
        message += ` (Reference #${item.referenceIndex})`;
      }
      message += `\n`;
    });

    message += "\nThank you!";

    const phoneNumber = "919910365323";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    
    toast({
        title: "Order on its way!",
        description: "You are being redirected to WhatsApp to confirm your order.",
    });

    setTimeout(() => {
        clearCart();
    }, 1000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          role="button"
          className={cn(
            "fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl transition-all duration-300 ease-in-out z-50 flex items-center justify-center bg-primary text-primary-foreground cursor-pointer hover:scale-110",
            itemCount > 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Cart with ${itemCount} items`}
        >
          <ShoppingCart className="h-7 w-7" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
              {itemCount}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart ({itemCount})</SheetTitle>
          <SheetDescription>
            Review your items and proceed to order via WhatsApp.
          </SheetDescription>
        </SheetHeader>
        
        {itemCount > 0 ? (
          <div className="flex-1 overflow-y-auto pr-4 -mr-6">
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <Image
                      src={item.referenceImage}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-md object-cover h-16 w-16 border"
                    />
                    <div className="flex-1">
                      <p className="font-semibold leading-tight">{item.name}</p>
                      {item.referenceIndex && (
                        <p className="text-sm text-muted-foreground">Reference #{item.referenceIndex}</p>
                      )}
                       <p className="text-sm font-semibold text-accent">{item.price}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => removeItem(item.id)}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="font-semibold text-muted-foreground">Your cart is empty</p>
            <p className="text-sm text-muted-foreground/80">Add some delicious treats from our menu!</p>
          </div>
        )}

        <SheetFooter className="mt-auto">
          <Button 
            className="w-full" 
            disabled={itemCount === 0}
            onClick={handleWhatsAppOrder}
            size="lg"
          >
            Order via Whatsapp
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
