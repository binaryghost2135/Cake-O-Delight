'use client';

import { useCart } from '@/context/cart-context';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CartButton() {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl transition-all duration-300 ease-in-out z-50 flex items-center justify-center bg-primary text-primary-foreground",
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
  );
}
