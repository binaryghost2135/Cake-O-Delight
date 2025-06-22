import type { BakeryItem, Category, Option } from './types';

export const bakeryItems: BakeryItem[] = [
    // Cakes
    { id: 1, name: "Red Velvet Cake", description: "Classic red velvet cake with cream cheese frosting.", originalPrice: 320, discountedPrice: 256, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "red velvet cake" },
    { id: 2, name: "Chocolate Fudge Cake", description: "Rich, moist chocolate cake with fudge frosting.", originalPrice: 300, discountedPrice: 240, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "fudge cake" },

    // Cupcakes
    { id: 3, name: "Blueberry Cupcake", description: "Fresh baked blueberry cupcake bursting with flavor.", originalPrice: 150, discountedPrice: 120, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "blueberry cupcake" },
    { id: 4, name: "Chocolate Chip Cupcake", description: "Classic chocolate chip cupcake with premium chips.", originalPrice: 140, discountedPrice: 112, discount: 20, image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "chocolate cupcake" },

    // Brownies
    { id: 5, name: "Double Chocolate Brownie", description: "Rich, fudgy double chocolate brownie.", originalPrice: 180, discountedPrice: 145, discount: 19, image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "chocolate brownie" },
    { id: 6, name: "Walnut Brownie", description: "Decadent brownie loaded with crunchy walnuts.", originalPrice: 220, discountedPrice: 175, discount: 20, image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "walnut brownie" },

    // Cheesecakes
    { id: 7, name: "New York Cheesecake", description: "Creamy, classic New York style cheesecake.", originalPrice: 350, discountedPrice: 280, discount: 20, image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "new york cheesecake" },
    { id: 8, name: "Strawberry Cheesecake", description: "Cheesecake topped with fresh strawberry sauce.", originalPrice: 380, discountedPrice: 304, discount: 20, image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "strawberry cheesecake" },
    
    // Jar cakes
    { id: 9, name: "Red Velvet Jar Cake", description: "Layers of red velvet cake and cream cheese frosting in a jar.", originalPrice: 250, discountedPrice: 200, discount: 20, image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "jar cake" },
    { id: 10, name: "Chocolate Jar Cake", description: "Decadent chocolate cake and fudge in a convenient jar.", originalPrice: 240, discountedPrice: 192, discount: 20, image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "chocolate jar cake" },

    // Bombolonis
    { id: 11, name: "Custard Bomboloni", description: "Italian doughnut filled with creamy custard.", originalPrice: 180, discountedPrice: 144, discount: 20, image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "custard bomboloni" },
    { id: 12, name: "Chocolate Bomboloni", description: "Soft doughnut filled with rich chocolate cream.", originalPrice: 190, discountedPrice: 152, discount: 20, image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "chocolate bomboloni" },

    // HAMPERS
    { id: 13, name: "Festive Hamper", description: "A beautiful hamper with a selection of our best treats.", originalPrice: 1500, discountedPrice: 1200, discount: 20, image: "https://placehold.co/100x100.png", category: "HAMPERS", aiHint: "gift hamper" },
    { id: 14, name: "Celebration Hamper", description: "The perfect hamper for any celebration.", originalPrice: 2000, discountedPrice: 1600, discount: 20, image: "https://placehold.co/100x100.png", category: "HAMPERS", aiHint: "celebration hamper" },

    // Combos
    { id: 15, name: "Coffee & Cake Combo", description: "Your choice of coffee with a slice of cake.", originalPrice: 400, discountedPrice: 320, discount: 20, image: "https://placehold.co/100x100.png", category: "Combos", aiHint: "coffee cake" },
    { id: 16, name: "Brownie & Ice Cream", description: "A warm brownie served with a scoop of vanilla ice cream.", originalPrice: 300, discountedPrice: 240, discount: 20, image: "https://placehold.co/100x100.png", category: "Combos", aiHint: "brownie ice cream" },
];

export const categories: Category[] = [
    { name: 'Cakes' },
    { name: 'Cupcakes' },
    { name: 'Brownies' },
    { name: 'Cheesecakes' },
    { name: 'Jar cakes' },
    { name: 'Bombolonis' },
    { name: 'HAMPERS' },
    { name: 'Combos' }
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
