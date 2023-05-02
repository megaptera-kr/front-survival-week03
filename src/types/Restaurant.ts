interface Menu {
    id: string;
    name: string;
    price: number;
  }

  interface Restaurant {
    id: string;
    category: string;
    name: string;
    menu: Menu[];
  }

  interface RestaurantList {
    restaurants: Restaurant[];
  }

export { Restaurant, RestaurantList };
