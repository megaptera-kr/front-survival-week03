export type RestaurantType = {
  id: string;
  category: string;
  name: string;
  menu: {
    id: string;
    name: string;
    price: number;
  }[];
};
