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

export default Restaurant;
