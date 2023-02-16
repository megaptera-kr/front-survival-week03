export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
};

type Menu = {
  id: string;
  name: string;
  price: number;
};
