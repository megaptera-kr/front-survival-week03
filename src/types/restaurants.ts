export interface Menu {
  id: string;
  name: string;
  price: number;
}

export interface RestaurantItem {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}

export type Restaurants = RestaurantItem[]
