
export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category: string;
  unitLabel?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export enum MenuTab {
  COMBOS = 'COMBOS',
  KITS = 'KITS',
  INDIVIDUAL = 'INDIVIDUAL'
}
