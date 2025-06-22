import type { BakeryItem, Category, Option } from './types';

const bentoCakeReferenceImages: Option[] = [
    { name: 'Style 1', image: 'https://i.postimg.cc/ZKmPsk8j/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 2', image: 'https://i.postimg.cc/W4y65h8J/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 3', image: 'https://i.postimg.cc/g2NK6M6s/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 4', image: 'https://i.postimg.cc/sXZPqsHH/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 5', image: 'https://i.postimg.cc/8kMBbk6j/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 6', image: 'https://i.postimg.cc/1zXr0pGQ/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 7', image: 'https://i.postimg.cc/C5TCVXWh/Whats-App-Image-2025-06-22-at-8.jpg' },
];

const halfKgCakeReferenceImages: Option[] = [
    { name: 'Style 1', image: 'https://i.postimg.cc/KzJNtJVx/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 2', image: 'https://i.postimg.cc/440vZ7RL/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 3', image: 'https://i.postimg.cc/sfHmXH7J/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 4', image: 'https://i.postimg.cc/NFK1mYmk/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 5', image: 'https://i.postimg.cc/Z5pxwTgf/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 6', image: 'https://i.postimg.cc/3NNZ125p/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 7', image: 'https://i.postimg.cc/fR9B173f/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 8', image: 'https://i.postimg.cc/FsJyKr99/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 9', image: 'https://i.postimg.cc/BQ8g15Cf/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 10', image: 'https://i.postimg.cc/283H7NrJ/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 11', image: 'https://i.postimg.cc/bvPHM7fq/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 12', image: 'https://i.postimg.cc/3NqFcWYq/Whats-App-Image-2025-06-22-at-8.jpg' },
];

const oneKgCakeReferenceImages: Option[] = [
    { name: 'Style 1', image: 'https://i.postimg.cc/LsnqXvpr/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 2', image: 'https://i.postimg.cc/SQ8MCZM4/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 3', image: 'https://i.postimg.cc/BbWPRFRR/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 4', image: 'https://i.postimg.cc/25M1Bvj3/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 5', image: 'https://i.postimg.cc/nLPDYg2F/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 6', image: 'https://i.postimg.cc/htCzc6HL/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 7', image: 'https://i.postimg.cc/XqwBWJbq/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 8', image: 'https://i.postimg.cc/ydRkhdWj/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 9', image: 'https://i.postimg.cc/j5nJ8c3z/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: 'Style 10', image: 'https://i.postimg.cc/02Y7Rtkn/Whats-App-Image-2025-06-22-at-8.jpg' },
];


export const bakeryItems: BakeryItem[] = [
    // Cakes
    { id: 1, name: "Bento Cake", description: "A cute, personal-sized bento cake.", image: "https://i.postimg.cc/1zXr0pGQ/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cakes", aiHint: "bento cake", referenceImages: bentoCakeReferenceImages },
    { id: 2, name: "1/2 Kg Cake", description: "Half a kilogram of delicious cake.", image: "https://i.postimg.cc/KzJNtJVx/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cakes", aiHint: "half kg cake", referenceImages: halfKgCakeReferenceImages },
    { id: 17, name: "1 Kg Cake", description: "A full kilogram of cake for your celebration.", image: "https://i.postimg.cc/ydRkhdWj/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cakes", aiHint: "one kg cake", referenceImages: oneKgCakeReferenceImages },
    { id: 18, name: "Dry Cake", description: "A classic dry cake, perfect with tea.", image: "https://i.postimg.cc/T1003c85/Whats-App-Image-2025-06-22-at-11.jpg", category: "Cakes", aiHint: "dry cake" },

    // Cupcakes
    { id: 3, name: "Blueberry Cupcake", description: "A fluffy cupcake with blueberry frosting.", image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "blueberry cupcake" },
    { id: 4, name: "Chocolate Chip Cupcake", description: "Classic vanilla cupcake with chocolate chips.", image: "https://placehold.co/100x100.png", category: "Cupcakes", aiHint: "chocolate chip cupcake" },

    // Brownies
    { id: 5, name: "Walnut Brownie", description: "A gooey brownie with crunchy walnuts.", image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "walnut brownie" },
    { id: 6, name: "Fudge Brownie", description: "Extra chocolaty and fudgy brownie.", image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "fudge brownie" },
    
    // Cheesecakes
    { id: 7, name: "New York Cheesecake", description: "A slice of classic New York style cheesecake.", image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "new york cheesecake" },
    { id: 8, name: "Blueberry Cheesecake", description: "Creamy cheesecake with a blueberry topping.", image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "blueberry cheesecake" },

    // Jar cakes
    { id: 9, name: "Red Velvet Jar Cake", description: "Layers of red velvet cake and cream cheese in a jar.", image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "red velvet jar cake" },
    { id: 10, name: "Chocolate Jar Cake", description: "Delicious chocolate cake in a convenient jar.", image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "chocolate jar cake" },

    // Bombolonis
    { id: 11, name: "Custard Bomboloni", description: "Italian doughnut filled with creamy custard.", image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "custard bomboloni" },
    { id: 12, name: "Chocolate Bomboloni", description: "Soft doughnut filled with rich chocolate.", image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "chocolate bomboloni" },

    // HAMPERS
    { id: 13, name: "Festive Hamper", description: "A beautiful hamper with assorted goodies.", image: "https://placehold.co/100x100.png", category: "HAMPERS", aiHint: "festive hamper" },
    { id: 14, name: "Celebration Hamper", description: "The perfect gift hamper for any celebration.", image: "https://placehold.co/100x100.png", category: "HAMPERS", aiHint: "celebration hamper" },

    // Combos
    { id: 15, name: "Cake & Coffee Combo", description: "A slice of cake with your choice of coffee.", image: "https://placehold.co/100x100.png", category: "Combos", aiHint: "cake coffee" },
    { id: 16, name: "Cupcake Combo Box", description: "A box of 4 assorted cupcakes.", image: "https://placehold.co/100x100.png", category: "Combos", aiHint: "cupcake box" },
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
