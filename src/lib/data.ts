import type { BakeryItem, GiftItem, Category, Option } from './types';

export const bakeryItems: BakeryItem[] = [
    { id: 1, name: "Double Chocolate Brownie", description: "Rich, fudgy double chocolate brownie.", originalPrice: 180, discountedPrice: 145, discount: 19, image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "chocolate brownie" },
    { id: 2, name: "Walnut Brownie", description: "Decadent brownie loaded with crunchy walnuts.", originalPrice: 220, discountedPrice: 175, discount: 20, image: "https://placehold.co/100x100.png", category: "Brownies", aiHint: "walnut brownie" },
    { id: 3, name: "Blueberry Muffin", description: "Fresh baked blueberry muffin bursting with flavor.", originalPrice: 200, discountedPrice: 160, discount: 20, image: "https://placehold.co/100x100.png", category: "Muffins", aiHint: "blueberry muffin" },
    { id: 4, name: "Chocolate Chip Muffin", description: "Classic chocolate chip muffin with premium chips.", originalPrice: 190, discountedPrice: 152, discount: 20, image: "https://placehold.co/100x100.png", category: "Muffins", aiHint: "chocolate muffin" },
    { id: 5, name: "Chocolate Croissant", description: "Buttery, flaky croissant filled with rich chocolate.", originalPrice: 250, discountedPrice: 200, discount: 20, image: "https://placehold.co/100x100.png", category: "Croissants", aiHint: "chocolate croissant" },
    { id: 6, name: "Almond Croissant", description: "Traditional French almond croissant.", originalPrice: 280, discountedPrice: 224, discount: 20, image: "https://placehold.co/100x100.png", category: "Croissants", aiHint: "almond croissant" },
    { id: 7, name: "Red Velvet Cake Slice", description: "Classic red velvet cake with cream cheese frosting.", originalPrice: 320, discountedPrice: 256, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "red velvet cake" },
    { id: 8, name: "Chocolate Fudge Cake", description: "Rich, moist chocolate cake with fudge frosting.", originalPrice: 300, discountedPrice: 240, discount: 20, image: "https://placehold.co/100x100.png", category: "Cakes", aiHint: "fudge cake" },
    { id: 9, name: "Apple Cinnamon Danish", description: "Flaky danish pastry with spiced apple filling.", originalPrice: 220, discountedPrice: 176, discount: 20, image: "https://placehold.co/100x100.png", category: "Danish", aiHint: "apple danish" },
    { id: 10, name: "Cheese Danish", description: "Traditional cheese danish with creamy cheese.", originalPrice: 200, discountedPrice: 160, discount: 20, image: "https://placehold.co/100x100.png", category: "Danish", aiHint: "cheese danish" }
];

export const categories: Category[] = [
    { name: 'Signature Collection', icon: '⭐' },
    { name: 'Brownies', icon: '🍫' },
    { name: 'Muffins', icon: '🧁' },
    { name: 'Croissants', icon: '🥐' },
    { name: 'Cakes', icon: '🍰' },
    { name: 'Danish', icon: '🥧' }
];

export const referenceImageOptions: Option[] = [
    { name: 'Style 1', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 2', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 3', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 4', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 5', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 6', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 7', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 8', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 9', image: 'https://placehold.co/100x100.png' },
    { name: 'Style 10', image: 'https://placehold.co/100x100.png' }
];

export const giftItems: GiftItem[] = [
    { id: 101, name: "Birthday Gift Basket", description: "Curated basket with chocolates, cookies, and a card.", price: 750, image: "https://placehold.co/100x100.png", aiHint: "gift basket" },
    { id: 102, name: "Gourmet Coffee Kit", description: "Premium coffee beans, elegant French press, and mugs.", price: 1200, image: "https://placehold.co/100x100.png", aiHint: "coffee kit" },
    { id: 103, name: "Assorted Cookie Box", description: "A delightful selection of 12 artisan cookies.", price: 450, image: "https://placehold.co/100x100.png", aiHint: "cookie box" },
    { id: 104, name: "Customized Photo Mug", description: "Personalized mug with your favorite photo and message.", price: 300, image: "https://placehold.co/100x100.png", aiHint: "photo mug" },
    { id: 105, name: "Chocolate Truffle Collection", description: "A luxurious box of handmade chocolate truffles.", price: 600, image: "https://placehold.co/100x100.png", aiHint: "chocolate truffles" },
];
