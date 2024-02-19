import RestaurantMenu from './RestaurantMenuType';

type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: RestaurantMenu[];
};

export default Restaurant;
