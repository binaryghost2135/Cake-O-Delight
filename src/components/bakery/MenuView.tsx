"use client";

import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Plus } from 'lucide-react';
import type { MenuItem, CartItem, Category } from '@/lib/types';
import { categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type MenuViewProps = {
    getFilteredItems: () => MenuItem[];
    cart: CartItem[];
    handleSelectItem: (item: MenuItem) => void;
    setCurrentView: (view: 'menu' | 'customize' | 'cart') => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    currentSection: 'cakes' | 'gifts';
    setCurrentSection: (section: 'cakes' | 'gifts') => void;
};

const isBakeryItem = (item: MenuItem): item is import('@/lib/types').BakeryItem => 'category' in item;

const MenuItemCard: React.FC<{ item: MenuItem, onAdd: () => void }> = ({ item, onAdd }) => {
    const isCake = isBakeryItem(item);

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
                    <div className="flex items-baseline my-2 gap-2">
                        {isCake ? (
                            <>
                                <span className="text-lg font-bold text-foreground">₹{item.discountedPrice}</span>
                                <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                            </>
                        ) : (
                            <span className="text-lg font-bold text-foreground">₹{item.price}</span>
                        )}
                    </div>
                    <Button onClick={onAdd} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                        Add <Plus className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const MenuView: React.FC<MenuViewProps> = ({
    getFilteredItems, cart, handleSelectItem, setCurrentView,
    selectedCategory, setSelectedCategory, currentSection, setCurrentSection
}) => {
    const totalCartItems = cart.reduce((acc, item) => acc + item.customization.quantity, 0);
    const filteredItems = getFilteredItems();

    return (
        <div className="flex flex-col h-screen bg-background">
            <header className="bg-card px-4 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20 border-b">
                <h1 className="text-2xl font-pacifico text-primary">Cake-O-Delight</h1>
                <Button onClick={() => setCurrentView('cart')} variant="ghost" size="icon" className="relative text-primary">
                    <ShoppingCart className="w-6 h-6" />
                    {totalCartItems > 0 && (
                        <Badge variant="destructive" className="absolute -top-1 -right-2 h-6 w-6 rounded-full flex items-center justify-center p-0">
                            {totalCartItems}
                        </Badge>
                    )}
                </Button>
            </header>
            
            <div className="bg-card py-2 px-4 shadow-sm sticky top-[68px] z-20 border-b">
                <div className="flex justify-around rounded-lg bg-muted p-1">
                    <Button
                        onClick={() => { setCurrentSection('cakes'); setSelectedCategory('Cakes'); }}
                        variant={currentSection === 'cakes' ? 'default' : 'ghost'}
                        className="flex-1 transition-all"
                    >
                        Cakes
                    </Button>
                    <Button
                        onClick={() => setCurrentSection('gifts')}
                        variant={currentSection === 'gifts' ? 'default' : 'ghost'}
                        className="flex-1 transition-all"
                    >
                        Gifts
                    </Button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {currentSection === 'cakes' && (
                    <nav className="w-28 bg-card border-r pt-4 overflow-y-auto">
                        <div className="space-y-1">
                            {categories.map((category: Category) => (
                                <button key={category.name} onClick={() => setSelectedCategory(category.name)}
                                    className={`w-full h-16 p-2 text-sm font-medium flex items-center justify-center text-center transition-all duration-200 rounded-none ${selectedCategory === category.name ? 'bg-accent text-accent-foreground border-r-4 border-primary' : 'text-muted-foreground hover:bg-accent/50'}`}>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </nav>
                )}
                <main className="flex-1 p-4 overflow-y-auto pb-8">
                     <h2 className="text-xl font-bold text-foreground mb-4">{currentSection === 'cakes' ? selectedCategory : 'Gift Collection'}</h2>
                    <div className="space-y-4">
                        {filteredItems.map((item) => (
                           <MenuItemCard key={item.id} item={item} onAdd={() => handleSelectItem(item)} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MenuView;
