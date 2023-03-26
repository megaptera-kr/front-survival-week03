import Food from "./Food";
interface Restaurant {
  category: string;
  id: string;
  menu: Food[];
  name: string;
}
export default Restaurant;
