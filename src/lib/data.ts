import type { BakeryItem, Category, Option } from './types';

const bentoCakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/ZKmPsk8j/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/W4y65h8J/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/g2NK6M6s/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/sXZPqsHH/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/8kMBbk6j/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/1zXr0pGQ/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/C5TCVXWh/Whats-App-Image-2025-06-22-at-8.jpg' },
];

const halfKgCakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/KzJNtJVx/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/440vZ7RL/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/sfHmXH7J/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/NFK1mYmk/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/Z5pxwTgf/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/3NNZ125p/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/fR9B173f/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/FsJyKr99/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/BQ8g15Cf/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/283H7NrJ/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/bvPHM7fq/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/3NqFcWYq/Whats-App-Image-2025-06-22-at-8.jpg' },
];

const oneKgCakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/LsnqXvpr/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/SQ8MCZM4/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/BbWPRFRR/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/25M1Bvj3/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/nLPDYg2F/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/htCzc6HL/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/XqwBWJbq/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/ydRkhdWj/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/j5nJ8c3z/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/02Y7Rtkn/Whats-App-Image-2025-06-22-at-8.jpg' },
];

const dryCakeReferenceImages: Option[] = [
    { name: 'Mava Cake', image: 'https://i.postimg.cc/50wpZVn3/Whats-App-Image-2025-06-22-at-11.jpg' },
    { name: '', image: 'https://i.postimg.cc/Xq4xWzP0/Whats-App-Image-2025-06-22-at-11.jpg' },
    { name: '', image: 'https://i.postimg.cc/50cn70qy/Whats-App-Image-2025-06-22-at-11.jpg' },
    { name: '', image: 'https://i.postimg.cc/T1003c85/Whats-App-Image-2025-06-22-at-11.jpg' },
];

const boxOf2CupcakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/h423gSKy/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/sxHnJJnd/Whats-App-Image-2025-06-22-at-8.jpg' },
];

const boxOf4CupcakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/Hn0MYWyS/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/Y9WgPzqB/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/FF03gpBj/Whats-App-Image-2025-06-22-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/KjhLh3Rk/Whats-App-Image-2025-06-22-at-8.jpg' },
];

const boxOf6CupcakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/T3sJHwqm/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/nr11dG0c/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/vHqrcBKj/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/nz4Kz18Y/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/SQG7bVfm/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/gcy4kGmF/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/138p6Shz/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/3N3XDDYM/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/rsTJCPGP/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/1tQ6LNgg/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/kXXNJ8TK/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/63JLtmPp/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/5NxgXD2H/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/xdWgqCXY/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/mgK7ynBy/Whats-App-Image-2025-06-23-at-12.jpg' },
];

const boxOf12CupcakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/ryvdbrvq/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/fRvJJgkb/Whats-App-Image-2025-06-23-at-12.jpg' },
    { name: '', image: 'https://i.postimg.cc/23Rfwm9f/Whats-App-Image-2025-06-23-at-12.jpg' },
];

const boxOf2BrownieReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/bNpRM4Xy/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/J4xQWKmb/Whats-App-Image-2025-06-23-at-1.jpg' },
];

export const bakeryItems: BakeryItem[] = [
    // Cakes
    { id: 1, name: "Bento Cake", description: "A cute, personal-sized bento cake.", image: "https://i.postimg.cc/1zXr0pGQ/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cakes", aiHint: "bento cake", referenceImages: bentoCakeReferenceImages },
    { id: 2, name: "1/2 Kg Cake", description: "Half a kilogram of delicious cake.", image: "https://i.postimg.cc/KzJNtJVx/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cakes", aiHint: "half kg cake", referenceImages: halfKgCakeReferenceImages },
    { id: 17, name: "1 Kg Cake", description: "A full kilogram of cake for your celebration.", image: "https://i.postimg.cc/ydRkhdWj/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cakes", aiHint: "one kg cake", referenceImages: oneKgCakeReferenceImages },
    { id: 18, name: "Dry Cake", description: "A classic dry cake, perfect with tea.", image: "https://i.postimg.cc/T1003c85/Whats-App-Image-2025-06-22-at-11.jpg", category: "Cakes", aiHint: "dry cake", referenceImages: dryCakeReferenceImages },

    // Cupcakes
    { id: 3, name: "Box of 2", description: "A box containing two delicious cupcakes.", image: "https://i.postimg.cc/h423gSKy/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cupcakes", aiHint: "cupcake box", referenceImages: boxOf2CupcakeReferenceImages },
    { id: 4, name: "Box of 4", description: "A box containing four delicious cupcakes.", image: "https://i.postimg.cc/fTZXHdG1/Whats-App-Image-2025-06-22-at-8.jpg", category: "Cupcakes", aiHint: "cupcake box", referenceImages: boxOf4CupcakeReferenceImages },
    { id: 19, name: "Box of 6", description: "A box containing six delicious cupcakes.", image: "https://i.postimg.cc/rsTJCPGP/Whats-App-Image-2025-06-23-at-12.jpg", category: "Cupcakes", aiHint: "cupcake box", referenceImages: boxOf6CupcakeReferenceImages },
    { id: 20, name: "Box of 12", description: "A box containing twelve delicious cupcakes.", image: "https://i.postimg.cc/ryvdbrvq/Whats-App-Image-2025-06-23-at-12.jpg", category: "Cupcakes", aiHint: "cupcake box", referenceImages: boxOf12CupcakeReferenceImages },

    // Brownies
    { id: 5, name: "Box of 2", description: "A box of 2 gooey brownies.", image: "https://i.postimg.cc/bNpRM4Xy/Whats-App-Image-2025-06-23-at-1.jpg", category: "Brownies", aiHint: "brownie box", referenceImages: boxOf2BrownieReferenceImages },
    { id: 6, name: "Box of 4", description: "A box of 4 fudgy brownies.", image: "https://i.postimg.cc/0QCzJWVn/Whats-App-Image-2025-06-23-at-1.jpg", category: "Brownies", aiHint: "brownie box" },
    { id: 25, name: "Box of 6", description: "A box of 6 delicious brownies.", image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "brownie box" },
    { id: 26, name: "Box of 9", description: "A box of 9 delicious brownies.", image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "brownie box" },
    { id: 27, name: "Brownie Bites", description: "A tub of delicious brownie bites.", image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "brownie bites" },
    { id: 28, name: "Brownie Tub", description: "A tub full of brownie goodness.", image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "brownie tub" },
    
    // Cheesecakes
    { id: 7, name: "New York Cheesecake", description: "A slice of classic New York style cheesecake.", image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "new york cheesecake" },
    { id: 8, name: "Blueberry Cheesecake", description: "Creamy cheesecake with a blueberry topping.", image: "https://placehold.co/100x100.png", category: "Cheesecakes", aiHint: "blueberry cheesecake" },

    // Jar cakes
    { id: 9, name: "Red Velvet Jar Cake", description: "Layers of red velvet cake and cream cheese in a jar.", image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "red velvet jar cake" },
    { id: 10, name: "Chocolate Jar Cake", description: "Delicious chocolate cake in a convenient jar.", image: "https://placehold.co/100x100.png", category: "Jar cakes", aiHint: "chocolate jar cake" },

    // Bombolonis
    { id: 11, name: "Custard Bomboloni", description: "Italian doughnut filled with creamy custard.", image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "custard bomboloni" },
    { id: 12, name: "Chocolate Bomboloni", description: "Soft doughnut filled with rich chocolate.", image: "https://placehold.co/100x100.png", category: "Bombolonis", aiHint: "chocolate bomboloni" },

    // Chocolates
    { id: 21, name: "Assorted Chocolates Box", description: "A box of fine assorted chocolates.", image: "https://placehold.co/100x100.png", category: "Chocolates", aiHint: "assorted chocolates" },
    { id: 22, name: "Chocolate Bar", description: "A rich and decadent chocolate bar.", image: "https://placehold.co/100x100.png", category: "Chocolates", aiHint: "chocolate bar" },

    // Cookies
    { id: 23, name: "Chocolate Chip Cookies", description: "Classic cookies with chocolate chips.", image: "https://placehold.co/100x100.png", category: "Cookies", aiHint: "chocolate chip cookies" },
    { id: 24, name: "Oatmeal Cookies", description: "Healthy and delicious oatmeal cookies.", image: "https://placehold.co/100x100.png", category: "Cookies", aiHint: "oatmeal cookies" },

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
    { name: 'Chocolates' },
    { name: 'Cookies' },
    { name: 'HAMPERS' },
    { name: 'Combos' },
];
