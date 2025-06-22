import type { BakeryItem, Category, Option } from './types';

export const bakeryItems: BakeryItem[] = [
    // Cakes
    { id: 1, name: "Bento Cakes", description: "A small, cute bento cake for any occasion.", originalPrice: 320, discountedPrice: 256, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "bento cake" },
    { id: 2, name: "1/2 Kg Cakes", description: "A delicious 1/2 Kg cake, perfect for small celebrations.", originalPrice: 300, discountedPrice: 240, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "cake" },

    // Cupcakes
    { id: 3, name: "1Kg Cakes", description: "A full 1Kg cake to celebrate in style.", originalPrice: 150, discountedPrice: 120, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "cake" },
    { id: 4, name: "Dry Cakes", description: "A variety of delicious and flavorful dry cakes.", originalPrice: 140, discountedPrice: 112, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "dry cake" },
];

export const categories: Category[] = [
    { name: 'Cakes' },
    { name: 'Cupcakes' },
];

export const referenceImageOptions: Option[] = [
    { name: 'Style 1', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 2', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 3', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 4', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 5', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 6', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 7', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 8', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 9', image: 'https://placehold.co/90x90.png' },
    { name: 'Style 10', image: 'https://placehold.co/90x90.png' }
];
