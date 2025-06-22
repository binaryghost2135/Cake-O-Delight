export type BakeryCategory = 'Bento Cakes' | '1/2 Kg Cakes' | 'Dry Cakes' | 'Cake Slices' | 'Danish';

export type Category = {
  name: string;
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

export type MenuItem = BakeryItem;

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
