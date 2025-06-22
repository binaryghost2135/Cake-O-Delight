"use client";

import React, { useState, useRef } from 'react';
import type { BakeryItem, GiftItem, MenuItem, Customization, CartItem } from '@/lib/types';
import { bakeryItems, giftItems, referenceImageOptions } from '@/lib/data';
import MenuView from './MenuView';
import CustomizeView from './CustomizeView';
import CartView from './CartView';

const isBakeryItem = (item: MenuItem): item is BakeryItem => 'category' in item;

const BakeryApp = () => {
    const [currentView, setCurrentView] = useState<'menu' | 'customize' | 'cart'>('menu');
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('Signature Collection');
    const [customization, setCustomization] = useState<Customization>({
        quantity: 1,
    });
    const [currentSection, setCurrentSection] = useState<'cakes' | 'gifts'>('cakes');
    const cartIdCounter = useRef(0);

    const calculateItemCustomizationPrice = (item: MenuItem, customs: Customization) => {
        if (!item) return 0;
        
        if (isBakeryItem(item)) {
            return item.discountedPrice;
        } else {
            return item.price;
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, cartItem) => {
            return total + (cartItem.itemCurrentPrice * cartItem.customization.quantity);
        }, 0);
    };

    const handleSelectItem = (item: MenuItem) => {
        setSelectedItem(item);
        if (isBakeryItem(item)) {
            setCustomization({ referenceImage: 'Style 1', quantity: 1 });
        } else {
            setCustomization({ quantity: 1 });
        }
        setCurrentView('customize');
    };

    const handleAddToCart = () => {
        if (!selectedItem) return;
        const itemCurrentPrice = calculateItemCustomizationPrice(selectedItem, customization);
        cartIdCounter.current += 1;
        const cartItem: CartItem = { 
            item: selectedItem, 
            customization, 
            cartId: cartIdCounter.current, 
            itemCurrentPrice 
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
            let itemDetail = '';
            if (isBakeryItem(cartItem.item)) {
                itemDetail = `${cartItem.item.name} (x${cartItem.customization.quantity}) - ₹${cartItem.itemCurrentPrice * cartItem.customization.quantity}`;
                if (cartItem.customization.referenceImage) {
                    itemDetail += `\n  - Style: ${cartItem.customization.referenceImage}`;
                }
            } else {
                itemDetail = `${cartItem.item.name} (x${cartItem.customization.quantity}) - ₹${cartItem.itemCurrentPrice * cartItem.customization.quantity}`;
            }
            return itemDetail;
        }).join('\n\n');
        const message = `Hi! I'd like to place an order:\n\n${orderDetails}\n\n*Total: ₹${getTotalPrice()}*`;
        const whatsappUrl = `https://wa.me/917405526423?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    
    const getFilteredItems = () => {
        if (currentSection === 'cakes') {
            if (selectedCategory === 'Signature Collection') return bakeryItems.slice(0, 4);
            return bakeryItems.filter(item => item.category === selectedCategory);
        } else {
            return giftItems;
        }
    };


    if (currentView === 'customize' && selectedItem) {
        return <CustomizeView
            selectedItem={selectedItem}
            customization={customization}
            setCustomization={setCustomization}
            handleAddToCart={handleAddToCart}
            setCurrentView={setCurrentView}
            referenceImageOptions={referenceImageOptions}
            calculateItemCustomizationPrice={() => calculateItemCustomizationPrice(selectedItem, customization)}
        />;
    }

    if (currentView === 'cart') {
        return <CartView
            cart={cart}
            setCurrentView={setCurrentView}
            handleRemoveFromCart={handleRemoveFromCart}
            updateCartQuantity={updateCartQuantity}
            getTotalPrice={getTotalPrice}
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
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
    />;
};

export default BakeryApp;
