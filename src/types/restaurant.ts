import IRestaurantMenu from './menu';

interface IRestaurant {
  id: string;
  category: string;
  name: string;
  menu: IRestaurantMenu[];
}

export default IRestaurant;
