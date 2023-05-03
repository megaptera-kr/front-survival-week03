import Menu from './menu';

interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}

export default Restaurant;
