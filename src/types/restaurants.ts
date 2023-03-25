export interface Menu {
  id: string;
  name: string;
  price: number;
}

export interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}

export interface RestaurantFilter {
  searchText: string;
  category: string
}

export type RestaurantTableColumns = Exclude<keyof Restaurant, 'id'>
