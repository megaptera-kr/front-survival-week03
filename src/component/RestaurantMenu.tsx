import moneyformat from '../utils/common';

import RestaurantMenu from '../types/RestaurantMenuType';

type RestaurantMenuProps = {
  menu: RestaurantMenu;
};

function RestaurantMenu({ menu }: RestaurantMenuProps) {
  const { name, price } = menu;

  return (
    <li>
      {name}({moneyformat(price)}
      원)
    </li>
  );
}

export default RestaurantMenu;
