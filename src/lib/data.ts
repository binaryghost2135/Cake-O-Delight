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

const boxOf4BrownieReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/nh698Qs4/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/BbMPRYDb/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/0QCzJWVn/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/pXcnZSR1/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/HW2MJxKm/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/vZ1xSvm8/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/Y9740Kzj/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/L681jSK1/Whats-App-Image-2025-06-23-at-1.jpg' },
];

const boxOf6BrownieReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/ZnyXMgXF/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/C153jdN2/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/JtVSVxLw/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/V6h341Zk/Whats-App-Image-2025-06-23-at-1.jpg' },
];

const boxOf9BrownieReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/y6kjc2qW/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/6QM3W2qb/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/QCTxJfbv/Whats-App-Image-2025-06-23-at-1.jpg' },
];

const brownieBitesReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/wjKw62GM/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/q7wwxTM6/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/Cxjmd83N/Whats-App-Image-2025-06-23-at-1.jpg' },
    { name: '', image: 'https://i.postimg.cc/mrBV9DRG/Whats-App-Image-2025-06-23-at-1.jpg' },
];

const brownieTubReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/Vk1WkQTh/Whats-App-Image-2025-06-23-at-11.jpg' },
    { name: '', image: 'https://i.postimg.cc/9FHGLHWf/Whats-App-Image-2025-06-23-at-11.jpg' },
    { name: '', image: 'https://i.postimg.cc/MG375cTk/Whats-App-Image-2025-06-23-at-11.jpg' },
    { name: '', image: 'https://i.postimg.cc/fymYMBvZ/Whats-App-Image-2025-06-23-at-11.jpg' },
    { name: '', image: 'https://i.postimg.cc/jjS6y6RQ/Whats-App-Image-2025-06-23-at-11.jpg' },
];

const halfKgCheesecakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/XqZf9LWB/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/4xp18W9z/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/D0mgBFrZ/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/yYZhdLnw/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/Qt8SKcVc/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/YSpQdMkH/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/Fz2jpSFW/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/k59vLWQL/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/yx5TG5jT/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/rw21t5Pz/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/nzSKs5yt/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/02TfdTbk/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/Kz0fP4gw/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/jjZP9mdJ/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/h4wbck8L/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/c15T6gW8/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/GpJqpX3c/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/8zdhds24/Whats-App-Image-2025-06-23-at-7.jpg' },
];

const miniCheesecakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/dtN0bF8F/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/9MPMKqBg/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/c1mCcwCr/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/wBm35rRp/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/fR3bZPK9/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/VvY68LGf/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/28S69yLT/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/RFxhgTwn/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/sxw2Ddqp/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/BnyXK36p/Whats-App-Image-2025-06-23-at-7.jpg' },
];

const jarCheesecakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/bw8s0gHD/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/MG3HSSkV/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/wxCtMg1k/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/3Nmxm0kF/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/bwTdmn36/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/gJwJcTd5/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/m27PFJMW/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/tTLgsN4g/Whats-App-Image-2025-06-23-at-7.jpg' },
];

const tiramisuJarCakeReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/h4zzKftj/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/wMVnC9Zd/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/NMR3x6xF/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/PfQGpMxF/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/hvgHZXCr/Whats-App-Image-2025-06-23-at-7.jpg' },
];

const bomboloniReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/g0sRL5C2/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/mkzFqrtP/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/XJv5fLWc/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/WzBJPPkX/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/Bv4H6swz/Whats-App-Image-2025-06-23-at-7.jpg' },
    { name: '', image: 'https://i.postimg.cc/d1Sy4CtM/Whats-App-Image-2025-06-23-at-7.jpg' },
];

const cookiesReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/3wz1nW8c/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/Xqkgj8wR/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/8zKtftqD/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/Yq8xTd2g/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/NMT4VYLf/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/T2V0JRZt/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/VNJ4qX8t/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/DwZch1mN/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/GtCQnNsP/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/J4RqTf8M/Whats-App-Image-2025-06-23-at-8.jpg' },
];

const chocolatesReferenceImages: Option[] = [
    { name: '', image: 'https://i.postimg.cc/xChdkDPH/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/dtM1wF3c/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/3wLNTD4t/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/WzZ1gW9y/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/15pzzdVn/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/zBVBXXT8/Whats-App-Image-2025-06-23-at-8.jpg' },
    { name: '', image: 'https://i.postimg.cc/1RVtkX9K/Whats-App-Image-2025-06-23-at-8.jpg' },
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
    { id: 6, name: "Box of 4", description: "A box of 4 fudgy brownies.", image: "https://i.postimg.cc/0QCzJWVn/Whats-App-Image-2025-06-23-at-1.jpg", category: "Brownies", aiHint: "brownie box", referenceImages: boxOf4BrownieReferenceImages },
    { id: 25, name: "Box of 6", description: "A box of 6 delicious brownies.", image: "https://i.postimg.cc/JtVSVxLw/Whats-App-Image-2025-06-23-at-1.jpg", category: "Brownies", aiHint: "brownie box", referenceImages: boxOf6BrownieReferenceImages },
    { id: 26, name: "Box of 9", description: "A box of 9 delicious brownies.", image: "https://i.postimg.cc/y6kjc2qW/Whats-App-Image-2025-06-23-at-1.jpg", category: "Brownies", aiHint: "brownie box", referenceImages: boxOf9BrownieReferenceImages },
    { id: 27, name: "Brownie Bites", description: "A tub of delicious brownie bites.", image: "https://i.postimg.cc/q7wwxTM6/Whats-App-Image-2025-06-23-at-1.jpg", category: "Brownies", aiHint: "brownie bites", referenceImages: brownieBitesReferenceImages },
    { id: 28, name: "Brownie Tub", description: "A tub full of brownie goodness.", image: "https://i.postimg.cc/MG375cTk/Whats-App-Image-2025-06-23-at-11.jpg", category: "Brownies", aiHint: "brownie tub", referenceImages: brownieTubReferenceImages },
    
    // Cheesecakes
    { id: 7, name: "1/2 Kg Cheesecake", description: "Half a kilogram of creamy cheesecake.", image: "https://i.postimg.cc/nzSKs5yt/Whats-App-Image-2025-06-23-at-7.jpg", category: "Cheesecakes", aiHint: "cheesecake", referenceImages: halfKgCheesecakeReferenceImages },
    { id: 8, name: "Mini cheesecake", description: "A personal-sized mini cheesecake.", image: "https://i.postimg.cc/28S69yLT/Whats-App-Image-2025-06-23-at-7.jpg", category: "Cheesecakes", aiHint: "mini cheesecake", referenceImages: miniCheesecakeReferenceImages },

    // Jar cakes
    { id: 9, name: "Jar Cheese Cake", description: "Creamy cheesecake layered in a convenient jar.", image: "https://i.postimg.cc/J0yFtjdP/Whats-App-Image-2025-06-23-at-7.jpg", category: "Jar cakes", aiHint: "jar cheesecake", referenceImages: jarCheesecakeReferenceImages },
    { id: 10, name: "Tiramisu Jar Cake", description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cheese in a jar.", image: "https://i.postimg.cc/h4zzKftj/Whats-App-Image-2025-06-23-at-7.jpg", category: "Jar cakes", aiHint: "tiramisu jar cake", referenceImages: tiramisuJarCakeReferenceImages },

    // Bombolonis
    { id: 11, name: "Bomboloni", description: "Italian doughnut filled with delicious cream.", image: "https://i.postimg.cc/g0sRL5C2/Whats-App-Image-2025-06-23-at-7.jpg", category: "Bombolonis", aiHint: "bomboloni doughnut", referenceImages: bomboloniReferenceImages, hasCustomization: true },

    // Chocolates
    { id: 21, name: "Chocolates", description: "A box of fine assorted chocolates.", image: "https://i.postimg.cc/WzZ1gW9y/Whats-App-Image-2025-06-23-at-8.jpg", category: "Chocolates", aiHint: "assorted chocolates", referenceImages: chocolatesReferenceImages, hasCustomization: true },

    // Cookies
    { id: 23, name: "Cookies", description: "Classic cookies with chocolate chips.", image: "https://i.postimg.cc/3xcFxWvx/Whats-App-Image-2025-06-23-at-8.jpg", category: "Cookies", aiHint: "cookies", referenceImages: cookiesReferenceImages, hasCustomization: true },

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
