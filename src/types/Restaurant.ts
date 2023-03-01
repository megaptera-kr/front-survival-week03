import menu from './Menu';

type Restaurant = {
    id:number;
    name:string;
    category:string;
    menus: menu[];
  }

export default Restaurant;
