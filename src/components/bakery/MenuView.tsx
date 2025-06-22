"use client";

import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Plus } from 'lucide-react';
import type { MenuItem, CartItem, Category } from '@/lib/types';
import { categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

type MenuViewProps = {
    getFilteredItems: () => MenuItem[];
    cart: CartItem[];
    handleSelectItem: (item: MenuItem) => void;
    setCurrentView: (view: 'menu' | 'customize' | 'cart') => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};

const MenuItemCard: React.FC<{ item: MenuItem, onAdd: () => void }> = ({ item, onAdd }) => {
    return (
        <Card className="overflow-hidden transition-shadow hover:shadow-md animate-fade-in">
            <CardContent className="p-3 flex items-center gap-4">
                 <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={100} 
                    height={100} 
                    className="rounded-lg object-cover w-24 h-24 bg-secondary"
                    data-ai-hint={item.aiHint}
                />
                <div className="flex-1">
                    <h3 className="font-bold text-foreground text-md">{item.name}</h3>
                    <p className="text-muted-foreground text-xs my-1">{item.description}</p>
                    <Button onClick={onAdd} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-2">
                        Add <Plus className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const MenuView: React.FC<MenuViewProps> = ({
    getFilteredItems, cart, handleSelectItem, setCurrentView,
    selectedCategory, setSelectedCategory
}) => {
    const totalCartItems = cart.reduce((acc, item) => acc + item.customization.quantity, 0);
    const filteredItems = getFilteredItems();

    return (
        <div className="flex flex-col h-screen bg-background">
            <header className="bg-card px-4 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20 border-b">
                <div>
                    <h1 className="text-2xl font-pacifico text-primary">Cake-O-Delight</h1>
                </div>
                <Button onClick={() => setCurrentView('cart')} variant="ghost" size="icon" className="relative text-primary">
                    <ShoppingCart className="w-6 h-6" />
                    {totalCartItems > 0 && (
                        <Badge variant="destructive" className="absolute -top-1 -right-2 h-6 w-6 rounded-full flex items-center justify-center p-0">
                            {totalCartItems}
                        </Badge>
                    )}
                </Button>
            </header>
            
            <div className="flex flex-1 overflow-hidden">
                <nav className="w-24 bg-card border-r pt-4">
                    <ScrollArea className="h-full">
                        <div className="space-y-1 pr-2">
                            {categories.map((category: Category) => (
                                <button key={category.name} onClick={() => setSelectedCategory(category.name)}
                                    className={`w-full h-16 p-2 text-sm font-medium flex items-center justify-center text-center transition-all duration-200 rounded-none ${selectedCategory === category.name ? 'bg-accent text-accent-foreground border-r-4 border-primary' : 'text-muted-foreground hover:bg-accent/50'}`}>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </ScrollArea>
                </nav>
                <main className="flex-1 overflow-hidden">
                    <ScrollArea className="h-full">
                        <div className="p-4 pb-8">
                            <h2 className="text-xl font-bold text-foreground mb-4">{selectedCategory}</h2>
                            <div className="space-y-4">
                                {filteredItems.map((item) => (
                                   <MenuItemCard key={item.id} item={item} onAdd={() => handleSelectItem(item)} />
                                ))}
                            </div>
                        </div>
                    </ScrollArea>
                </main>
            </div>
        </div>
    );
};

export default MenuView;
