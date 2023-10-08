import Menu from './Menu';

export default interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}
