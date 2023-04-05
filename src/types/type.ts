export type Menu = {
  id: string;
  name: string;
  price: number;
}

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
};

export type Category ={
  id: string;
  name: string;
  selected: boolean;
}
