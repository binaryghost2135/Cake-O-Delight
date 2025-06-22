export type BakeryCategory = 'Brownies' | 'Muffins' | 'Croissants' | 'Cakes' | 'Danish';

export type Category = {
  name: string;
  icon: string;
};

export type BakeryItem = {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  category: BakeryCategory;
  aiHint: string;
};

export type GiftItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  aiHint: string;
};

export type MenuItem = BakeryItem | GiftItem;

export type Customization = {
  referenceImage?: string;
  quantity: number;
};

export type CartItem = {
  cartId: number;
  item: MenuItem;
  customization: Customization;
  itemCurrentPrice: number;
};

export type Option = {
    name: string;
    image: string;
};
