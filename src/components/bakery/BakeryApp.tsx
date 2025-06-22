"use client";

import React, { useState, useRef } from 'react';
import type { MenuItem, Customization, CartItem } from '@/lib/types';
import { bakeryItems } from '@/lib/data';
import MenuView from './MenuView';
import CustomizeView from './CustomizeView';
import CartView from './CartView';

const BakeryApp = () => {
    const [currentView, setCurrentView] = useState<'menu' | 'customize' | 'cart'>('menu');
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('Cakes');
    const [customization, setCustomization] = useState<Customization>({
        quantity: 1,
    });
    const cartIdCounter = useRef(0);

    const handleSelectItem = (item: MenuItem) => {
        setSelectedItem(item);
        const initialCustomization: Customization = { quantity: 1 };
        if (item.referenceImages && item.referenceImages.length > 0) {
            initialCustomization.referenceImage = item.referenceImages[0].name;
        }
        setCustomization(initialCustomization);
        setCurrentView('customize');
    };

    const handleAddToCart = () => {
        if (!selectedItem) return;
        cartIdCounter.current += 1;
        const cartItem: CartItem = { 
            item: selectedItem, 
            customization, 
            cartId: cartIdCounter.current, 
        };
        setCart([...cart, cartItem]);
        setCurrentView('menu');
        setSelectedItem(null);
    };

    const handleRemoveFromCart = (cartId: number) => {
        setCart(cart.filter(item => item.cartId !== cartId));
    };

    const updateCartQuantity = (cartId: number, newQuantity: number) => {
        if (newQuantity < 1) {
            handleRemoveFromCart(cartId);
            return;
        }
        setCart(cart.map(item => 
            item.cartId === cartId ? { ...item, customization: { ...item.customization, quantity: newQuantity } } : item
        ));
    };

    const sendToWhatsApp = () => {
        const orderDetails = cart.map(cartItem => {
            let itemDetail = `${cartItem.item.name} (x${cartItem.customization.quantity})`;
            if (cartItem.customization.referenceImage) {
                itemDetail += `\n  - Style: ${cartItem.customization.referenceImage}`;
            }
            return itemDetail;
        }).join('\n\n');
        const message = `Hi! I'd like to place an order for the following items:\n\n${orderDetails}`;
        const whatsappUrl = `https://wa.me/917405526423?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    
    const getFilteredItems = () => {
        return bakeryItems.filter(item => item.category === selectedCategory);
    };


    if (currentView === 'customize' && selectedItem) {
        return <CustomizeView
            selectedItem={selectedItem}
            customization={customization}
            setCustomization={setCustomization}
            handleAddToCart={handleAddToCart}
            setCurrentView={setCurrentView}
        />;
    }

    if (currentView === 'cart') {
        return <CartView
            cart={cart}
            setCurrentView={setCurrentView}
            handleRemoveFromCart={handleRemoveFromCart}
            updateCartQuantity={updateCartQuantity}
            sendToWhatsApp={sendToWhatsApp}
        />;
    }

    return <MenuView 
        getFilteredItems={getFilteredItems}
        cart={cart}
        handleSelectItem={handleSelectItem}
        setCurrentView={setCurrentView}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
    />;
};

export default BakeryApp;
