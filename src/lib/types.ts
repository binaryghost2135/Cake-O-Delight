export type BakeryCategory = 'Cakes' | 'Cupcakes' | 'Brownies' | 'Cheesecakes' | 'Jar cakes' | 'Bombolonis' | 'Chocolates' | 'Cookies' | 'HAMPERS' | 'Combos';

export type Category = {
  name: string;
};

export type BakeryItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: BakeryCategory;
  aiHint: string;
  referenceImages?: Option[];
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
};

export type Option = {
    name?: string;
    image: string;
};
