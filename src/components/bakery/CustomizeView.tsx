"use client"

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import type { MenuItem, Customization, Option } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type CustomizeViewProps = {
    selectedItem: MenuItem;
    customization: Customization;
    setCustomization: React.Dispatch<React.SetStateAction<Customization>>;
    handleAddToCart: () => void;
    setCurrentView: (view: 'menu' | 'customize' | 'cart') => void;
    sizeOptions: Option[];
    beverageOptions: Option[];
    addonOptions: Option[];
    calculateItemCustomizationPrice: () => number;
};

const isBakeryItem = (item: MenuItem): item is import('@/lib/types').BakeryItem => 'category' in item;

const CustomizeView: React.FC<CustomizeViewProps> = ({
    selectedItem, customization, setCustomization, handleAddToCart, setCurrentView,
    sizeOptions, beverageOptions, addonOptions, calculateItemCustomizationPrice
}) => {
    const isCake = isBakeryItem(selectedItem);

    return (
        <div className="flex flex-col h-screen bg-background animate-fade-in">
            <header className="bg-card px-4 py-4 flex items-center shadow-sm sticky top-0 z-20 border-b">
                <Button variant="ghost" size="icon" onClick={() => setCurrentView('menu')} className="mr-4 text-primary">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-bold text-foreground">Customise Item</h1>
            </header>

            <main className="flex-grow overflow-y-auto p-4 space-y-4 pb-40">
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
                            <h3 className="font-bold text-foreground text-lg">{selectedItem.name.replace(' Combo', '')}</h3>
                            <p className="text-lg font-bold text-foreground/80 mt-1">
                                ₹{isCake ? selectedItem.discountedPrice : selectedItem.price}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {isCake && (
                    <>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Choice of Size</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    {sizeOptions.map(option => (
                                        <Button key={option.name} variant={customization.size === option.name ? 'default' : 'outline'} onClick={() => setCustomization({...customization, size: option.name})}
                                            className="h-auto p-3 flex flex-col gap-1 border-2 transition-all data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                                            <span className="text-2xl font-bold">{option.icon}</span>
                                            <span className="block text-sm font-medium">
                                                {option.name} {option.price > 0 && <span className="text-xs text-muted-foreground"> (+₹{option.price})</span>}
                                            </span>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Choice of Beverage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4">
                                    {beverageOptions.map(option => (
                                        <Button key={option.name} variant={customization.beverage === option.name ? 'default' : 'outline'} onClick={() => setCustomization({...customization, beverage: option.name})}
                                            className="h-auto flex flex-col items-center p-3 gap-2 border-2 transition-all">
                                            <span className="text-3xl">{option.icon}</span>
                                            <span className="text-sm font-medium text-center">
                                                {option.name} {option.price > 0 && <span className="block text-xs text-muted-foreground">(+₹{option.price})</span>}
                                            </span>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Choice of Add-on</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4">
                                    {addonOptions.map(option => (
                                        <Button key={option.name} variant={customization.addon === option.name ? 'default' : 'outline'} onClick={() => setCustomization({...customization, addon: option.name})}
                                            className="h-auto flex flex-col items-center p-3 gap-2 border-2 transition-all">
                                            <span className="text-3xl">{option.icon}</span>
                                            <span className="text-xs text-center font-medium">
                                                {option.name} {option.price > 0 && <span className="block text-xs text-muted-foreground">(+₹{option.price})</span>}
                                            </span>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </>
                )}
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
                        Add - ₹{calculateItemCustomizationPrice() * customization.quantity}
                    </Button>
                </div>
            </footer>
        </div>
    );
}

export default CustomizeView;
