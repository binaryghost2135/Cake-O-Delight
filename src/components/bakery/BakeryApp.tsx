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

    const handleDirectAddToCart = (item: MenuItem) => {
        const existingCartItem = cart.find(cartItem => cartItem.item.id === item.id && cartItem.item.hasCustomization === false);

        if (existingCartItem) {
            updateCartQuantity(existingCartItem.cartId, existingCartItem.customization.quantity + 1);
        } else {
            cartIdCounter.current += 1;
            const newCartItem: CartItem = {
                item: item,
                customization: { quantity: 1 },
                cartId: cartIdCounter.current,
            };
            setCart(currentCart => [...currentCart, newCartItem]);
        }
    };

    const handleSelectItem = (item: MenuItem) => {
        if (item.hasCustomization === false) {
            handleDirectAddToCart(item);
            return;
        }

        setSelectedItem(item);
        const initialCustomization: Customization = { quantity: 1 };
        if (item.referenceImages && item.referenceImages.length > 0) {
            initialCustomization.referenceImage = item.referenceImages[0].image;
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
                const selectedOption = cartItem.item.referenceImages?.find(
                    opt => opt.image === cartItem.customization.referenceImage
                );
                const styleName = selectedOption?.name;
                if (styleName) {
                    itemDetail += `\n  - Style: ${styleName}`;
                }
            }
            return itemDetail;
        }).join('\n\n');
        const message = `Hi! I'd like to place an order for the following items:\n\n${orderDetails}`;
        const whatsappUrl = `https://wa.me/919910365323?text=${encodeURIComponent(message)}`;
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
