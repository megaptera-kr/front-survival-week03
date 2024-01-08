import { Menu } from '../types/Menu';

type RestaurantMenu = {
  menu: Menu;
};

function RestaurantMenus({ menu }: RestaurantMenu) {
  return <li>{`${menu.name}(${menu.price}원)`}</li>;
}

export default RestaurantMenus;
