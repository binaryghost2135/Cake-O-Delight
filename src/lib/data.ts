import type { BakeryItem, Category, Option } from './types';

export const bakeryItems: BakeryItem[] = [
    { id: 1, name: "Double Chocolate Brownie", description: "Rich, fudgy double chocolate brownie.", originalPrice: 180, discountedPrice: 145, discount: 19, image: "https://placehold.co/100x100.png", category: "Bento Cakes", aiHint: "chocolate brownie" },
    { id: 2, name: "Walnut Brownie", description: "Decadent brownie loaded with crunchy walnuts.", originalPrice: 220, discountedPrice: 175, discount: 20, image: "https://placehold.co/100x100.png", category: "Bento Cakes", aiHint: "walnut brownie" },
    { id: 3, name: "Blueberry Muffin", description: "Fresh baked blueberry muffin bursting with flavor.", originalPrice: 200, discountedPrice: 160, discount: 20, image: "https://placehold.co/100x100.png", category: "1/2 Kg Cakes", aiHint: "blueberry muffin" },
    { id: 4, name: "Chocolate Chip Muffin", description: "Classic chocolate chip muffin with premium chips.", originalPrice: 190, discountedPrice: 152, discount: 20, image: "https://placehold.co/100x100.png", category: "1/2 Kg Cakes", aiHint: "chocolate muffin" },
    { id: 5, name: "Chocolate Croissant", description: "Buttery, flaky croissant filled with rich chocolate.", originalPrice: 250, discountedPrice: 200, discount: 20, image: "https://placehold.co/100x100.png", category: "Dry Cakes", aiHint: "chocolate croissant" },
    { id: 6, name: "Almond Croissant", description: "Traditional French almond croissant.", originalPrice: 280, discountedPrice: 224, discount: 20, image: "https://placehold.co/100x100.png", category: "Dry Cakes", aiHint: "almond croissant" },
    { id: 7, name: "Red Velvet Cake Slice", description: "Classic red velvet cake with cream cheese frosting.", originalPrice: 320, discountedPrice: 256, discount: 20, image: "https://placehold.co/100x100.png", category: "Cake Slices", aiHint: "red velvet cake" },
    { id: 8, name: "Chocolate Fudge Cake", description: "Rich, moist chocolate cake with fudge frosting.", originalPrice: 300, discountedPrice: 240, discount: 20, image: "https://placehold.co/100x100.png", category: "Cake Slices", aiHint: "fudge cake" },
    { id: 9, name: "Apple Cinnamon Danish", description: "Flaky danish pastry with spiced apple filling.", originalPrice: 220, discountedPrice: 176, discount: 20, image: "https://placehold.co/100x100.png", category: "Danish", aiHint: "apple danish" },
    { id: 10, name: "Cheese Danish", description: "Traditional cheese danish with creamy cheese.", originalPrice: 200, discountedPrice: 160, discount: 20, image: "https://placehold.co/100x100.png", category: "Danish", aiHint: "cheese danish" }
];

export const categories: Category[] = [
    { name: 'Cakes' },
    { name: 'Bento Cakes' },
    { name: '1/2 Kg Cakes' },
    { name: 'Dry Cakes' },
    { name: 'Cake Slices' },
    { name: 'Danish' }
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
