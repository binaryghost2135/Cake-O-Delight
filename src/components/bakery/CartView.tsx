"use client"

import React from 'react';
import Image from 'next/image';
import { ShoppingCart, ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import type { CartItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type CartViewProps = {
    cart: CartItem[];
    setCurrentView: (view: 'menu' | 'customize' | 'cart') => void;
    handleRemoveFromCart: (cartId: number) => void;
    updateCartQuantity: (cartId: number, newQuantity: number) => void;
    getTotalPrice: () => number;
    sendToWhatsApp: () => void;
};

const isBakeryItem = (item: any): item is import('@/lib/types').BakeryItem => 'category' in item;


const CartView: React.FC<CartViewProps> = ({ cart, setCurrentView, handleRemoveFromCart, updateCartQuantity, getTotalPrice, sendToWhatsApp }) => {
    return (
        <div className="flex flex-col h-screen bg-background animate-fade-in">
            <header className="bg-card px-4 py-4 flex items-center shadow-sm sticky top-0 z-10 border-b">
                <Button variant="ghost" size="icon" onClick={() => setCurrentView('menu')} className="mr-4 text-primary">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-bold text-foreground">Your Cart</h1>
            </header>
            
            <main className="flex-grow overflow-y-auto">
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
                        {cart.map(item => (
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
                                                { isBakeryItem(item.item) &&
                                                    <p className="text-muted-foreground text-xs mt-1">
                                                        {item.customization.size}, {item.customization.beverage}, {item.customization.addon}
                                                    </p>
                                                }
                                            </div>
                                            <Button variant="ghost" size="icon" onClick={() => handleRemoveFromCart(item.cartId)} className="text-muted-foreground hover:text-destructive -mr-2 -mt-2">
                                                <Trash2 className="w-5 h-5"/>
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="font-bold text-foreground text-lg">₹{item.itemCurrentPrice * item.customization.quantity}</p>
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
                        ))}
                    </div>
                )}
            </main>
            
            {cart.length > 0 && (
                <footer className="sticky bottom-0 left-0 right-0 z-10 bg-card p-4 border-t shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                     <div className="flex justify-between items-center mb-4">
                       <span className="text-muted-foreground font-semibold text-lg">Total</span>
                       <span className="text-2xl font-bold text-foreground">₹{getTotalPrice()}</span>
                    </div>
                   <Button onClick={sendToWhatsApp} size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg text-base">
                       <ShoppingCart className="w-5 h-5 mr-2" /> Order via WhatsApp
                   </Button>
                </footer>
            )}
        </div>
    );
}

export default CartView;
