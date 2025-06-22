import type { BakeryItem, Category, Option } from './types';

export const bakeryItems: BakeryItem[] = [
    // Cakes
    { id: 1, name: "Bento Cake", description: "A cute, personal-sized bento cake.", originalPrice: 300, discountedPrice: 250, discount: 17, image: "https://i.postimg.cc/1zXr0pGQ/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cakes", aiHint: "bento cake" },
    { id: 2, name: "1/2 Kg Cake", description: "Half a kilogram of delicious cake.", originalPrice: 600, discountedPrice: 500, discount: 17, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "half kg cake" },
    { id: 17, name: "1 Kg Cake", description: "A full kilogram of cake for your celebration.", originalPrice: 1200, discountedPrice: 1000, discount: 17, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "one kg cake" },
    { id: 18, name: "Dry Cake", description: "A classic dry cake, perfect with tea.", originalPrice: 400, discountedPrice: 350, discount: 13, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "dry cake" },

    // Cupcakes
    { id: 3, name: "Blueberry Cupcake", description: "A fluffy cupcake with blueberry frosting.", originalPrice: 90, discountedPrice: 72, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "blueberry cupcake" },
    { id: 4, name: "Chocolate Chip Cupcake", description: "Classic vanilla cupcake with chocolate chips.", originalPrice: 80, discountedPrice: 64, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "chocolate chip cupcake" },

    // Brownies
    { id: 5, name: "Walnut Brownie", description: "A gooey brownie with crunchy walnuts.", originalPrice: 100, discountedPrice: 80, discount: 20, image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "walnut brownie" },
    { id: 6, name: "Fudge Brownie", description: "Extra chocolaty and fudgy brownie.", originalPrice: 90, discountedPrice: 72, discount: 20, image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "fudge brownie" },
    
    // Cheesecakes
    { id: 7, name: "New York Cheesecake", description: "A slice of classic New York style cheesecake.", originalPrice: 250, discountedPrice: 200, discount: 20, image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "new york cheesecake" },
    { id: 8, name: "Blueberry Cheesecake", description: "Creamy cheesecake with a blueberry topping.", originalPrice: 280, discountedPrice: 224, discount: 20, image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "blueberry cheesecake" },

    // Jar cakes
    { id: 9, name: "Red Velvet Jar Cake", description: "Layers of red velvet cake and cream cheese in a jar.", originalPrice: 180, discountedPrice: 144, discount: 20, image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "red velvet jar cake" },
    { id: 10, name: "Chocolate Jar Cake", description: "Delicious chocolate cake in a convenient jar.", originalPrice: 170, discountedPrice: 136, discount: 20, image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "chocolate jar cake" },

    // Bombolonis
    { id: 11, name: "Custard Bomboloni", description: "Italian doughnut filled with creamy custard.", originalPrice: 120, discountedPrice: 96, discount: 20, image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "custard bomboloni" },
    { id: 12, name: "Chocolate Bomboloni", description: "Soft doughnut filled with rich chocolate.", originalPrice: 120, discountedPrice: 96, discount: 20, image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "chocolate bomboloni" },

    // HAMPERS
    { id: 13, name: "Festive Hamper", description: "A beautiful hamper with assorted goodies.", originalPrice: 1500, discountedPrice: 1200, discount: 20, image: "https://placehold.co/100x100.png", category: "HAMPERS", aiHint: "festive hamper" },
    { id: 14, name: "Celebration Hamper", description: "The perfect gift hamper for any celebration.", originalPrice: 2000, discountedPrice: 1600, discount: 20, image: "https://placehold.co/100x100.png", category: "HAMPERS", aiHint: "celebration hamper" },

    // Combos
    { id: 15, name: "Cake & Coffee Combo", description: "A slice of cake with your choice of coffee.", originalPrice: 300, discountedPrice: 240, discount: 20, image: "https://placehold.co/100x100.png", category: "Combos", aiHint: "cake coffee" },
    { id: 16, name: "Cupcake Combo Box", description: "A box of 4 assorted cupcakes.", originalPrice: 320, discountedPrice: 256, discount: 20, image: "https://placehold.co/100x100.png", category: "Combos", aiHint: "cupcake box" },
];

export const categories: Category[] = [
    { name: 'Cakes' },
    { name: 'Cupcakes' },
    { name: 'Brownies' },
    { name: 'Cheesecakes' },
    { name: 'Jar cakes' },
    { name: 'Bombolonis' },
    { name: 'HAMPERS' },
    { name: 'Combos' },
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
