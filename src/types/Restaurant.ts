import { Category } from './Category';

type Menu = {
  id: string;
  name:string;
  price:number
}

export type Restaurant = {
  id:string;
  category:Category;
  name:string;
  menu: Menu[]
}
