import type { BakeryItem, Category, Option } from './types';

export const bakeryItems: BakeryItem[] = [
    // Cakes
    { id: 1, name: "Red Velvet Cake", description: "A slice of classic red velvet cake.", originalPrice: 150, discountedPrice: 120, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "red velvet cake" },
    { id: 2, name: "Chocolate Fudge Cake", description: "Rich and decadent chocolate fudge cake slice.", originalPrice: 140, discountedPrice: 112, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "chocolate cake" },

    // Cupcakes
    { id: 3, name: "Blueberry Cupcake", description: "A fluffy cupcake with blueberry frosting.", originalPrice: 90, discountedPrice: 72, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "blueberry cupcake" },
    { id: 4, name: "Chocolate Chip Cupcake", description: "Classic vanilla cupcake with chocolate chips.", originalPrice: 80, discountedPrice: 64, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "chocolate chip cupcake" },
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
