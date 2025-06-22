"use client"

import React from 'react';
import Image from 'next/image';
import { ShoppingCart, ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import type { CartItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

type CartViewProps = {
    cart: CartItem[];
    setCurrentView: (view: 'menu' | 'customize' | 'cart') => void;
    handleRemoveFromCart: (cartId: number) => void;
    updateCartQuantity: (cartId: number, newQuantity: number) => void;
    sendToWhatsApp: () => void;
};

const CartView: React.FC<CartViewProps> = ({ cart, setCurrentView, handleRemoveFromCart, updateCartQuantity, sendToWhatsApp }) => {
    return (
        <div className="flex flex-col h-screen bg-background animate-fade-in">
            <header className="bg-card px-4 py-4 flex items-center shadow-sm sticky top-0 z-10 border-b">
                <Button variant="ghost" size="icon" onClick={() => setCurrentView('menu')} className="mr-4 text-primary">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-bold text-foreground">Your Cart</h1>
            </header>
            
            <main className="flex-grow overflow-hidden">
                <ScrollArea className="h-full">
                    {cart.length === 0 ? (
                        <div className="text-center p-10 mt-16 flex flex-col items-center">
                            <ShoppingCart className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4"/>
                            <h2 className="text-xl font-bold text-foreground/80 mb-2">Your cart is empty</h2>
                            <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
                            <Button onClick={() => setCurrentView('menu')} variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                Browse Menu
                            </Button>
                        </div>
                    ) : (
                        <div className="p-4 space-y-4 pb-40">
                            {cart.map(item => {
                                const selectedOption = item.item.referenceImages?.find(
                                    opt => opt.image === item.customization.referenceImage
                                );
                                const styleName = selectedOption?.name;

                                return (
                                <Card key={item.cartId} className="overflow-hidden">
                                    <CardContent className="p-3 flex items-start gap-4">
                                        <Image 
                                            src={item.item.image} 
                                            alt={item.item.name} 
                                            width={80} 
                                            height={80} 
                                            className="rounded-lg object-cover w-20 h-20 bg-secondary"
                                            data-ai-hint={item.item.aiHint}
                                         />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-foreground text-md">{item.item.name}</h3>
                                                    { styleName &&
                                                        <p className="text-muted-foreground text-xs mt-1">
                                                            Style: {styleName}
                                                        </p>
                                                    }
                                                </div>
                                                <Button variant="ghost" size="icon" onClick={() => handleRemoveFromCart(item.cartId)} className="text-muted-foreground hover:text-destructive -mr-2 -mt-2">
                                                    <Trash2 className="w-5 h-5"/>
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-end mt-2">
                                                <div className="flex items-center justify-end gap-3">
                                                    <Button onClick={() => updateCartQuantity(item.cartId, item.customization.quantity - 1)} size="icon" className="bg-secondary hover:bg-accent h-8 w-8 rounded-full">
                                                        <Minus className="w-4 h-4 text-secondary-foreground"/>
                                                    </Button>
                                                    <span className="text-lg font-bold text-foreground w-6 text-center">{item.customization.quantity}</span>
                                                    <Button onClick={() => updateCartQuantity(item.cartId, item.customization.quantity + 1)} size="icon" className="bg-secondary hover:bg-accent h-8 w-8 rounded-full">
                                                        <Plus className="w-4 h-4 text-secondary-foreground"/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )})}
                        </div>
                    )}
                </ScrollArea>
            </main>
            
            {cart.length > 0 && (
                <footer className="sticky bottom-0 left-0 right-0 z-10 bg-card p-4 border-t shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                   <Button onClick={sendToWhatsApp} size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg text-base">
                       <ShoppingCart className="w-5 h-5 mr-2" /> Order via WhatsApp
                   </Button>
                </footer>
            )}
        </div>
    );
}

export default CartView;
