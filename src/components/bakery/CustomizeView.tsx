"use client"

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import type { MenuItem, Customization } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

type CustomizeViewProps = {
    selectedItem: MenuItem;
    customization: Customization;
    setCustomization: React.Dispatch<React.SetStateAction<Customization>>;
    handleAddToCart: () => void;
    setCurrentView: (view: 'menu' | 'customize' | 'cart') => void;
};

const CustomizeView: React.FC<CustomizeViewProps> = ({
    selectedItem, customization, setCustomization, handleAddToCart, setCurrentView
}) => {

    return (
        <div className="flex flex-col h-screen bg-background animate-fade-in">
            <header className="bg-card px-4 py-4 flex items-center shadow-sm sticky top-0 z-20 border-b">
                <Button variant="ghost" size="icon" onClick={() => setCurrentView('menu')} className="mr-4 text-primary">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-bold text-foreground">Customise Item</h1>
            </header>

            <main className="flex-grow overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="p-4 space-y-4 pb-40">
                        <Card>
                            <CardContent className="p-4 flex items-center gap-4">
                                <Image 
                                    src={selectedItem.image} 
                                    alt={selectedItem.name} 
                                    width={80} 
                                    height={80} 
                                    className="rounded-lg object-cover w-20 h-20 bg-secondary"
                                    data-ai-hint={selectedItem.aiHint}
                                />
                                <div className="flex-1">
                                    <h3 className="font-bold text-foreground text-lg">{selectedItem.name}</h3>
                                </div>
                            </CardContent>
                        </Card>

                        {selectedItem.referenceImages && selectedItem.referenceImages.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Reference Images</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        {selectedItem.referenceImages.map(option => (
                                            <Button key={option.name} variant={customization.referenceImage === option.name ? 'default' : 'outline'} onClick={() => setCustomization({...customization, referenceImage: option.name})}
                                                className="h-auto p-1 border-2 transition-all data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                                                <Image src={option.image} alt={option.name} width={160} height={160} className="rounded-md object-cover" data-ai-hint="cake style" />
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </ScrollArea>
            </main>

            <footer className="sticky bottom-0 left-0 right-0 z-20 bg-card p-4 border-t shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                         <Button onClick={() => setCustomization(c => ({...c, quantity: Math.max(1, c.quantity - 1)}))} size="icon" className="bg-secondary hover:bg-accent h-10 w-10 rounded-full">
                            <Minus className="w-5 h-5 text-secondary-foreground"/>
                        </Button>
                        <span className="text-2xl font-bold text-foreground w-8 text-center">{customization.quantity}</span>
                        <Button onClick={() => setCustomization(c => ({...c, quantity: c.quantity + 1}))} size="icon" className="bg-secondary hover:bg-accent h-10 w-10 rounded-full">
                            <Plus className="w-5 h-5 text-secondary-foreground"/>
                        </Button>
                    </div>
                    <Button onClick={handleAddToCart} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">
                        Add to Cart
                    </Button>
                </div>
            </footer>
        </div>
    );
}

export default CustomizeView;
