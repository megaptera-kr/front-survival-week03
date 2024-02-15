import moneyformat from '../utils/common';

import RestaurantMenu from '../types/RestaurantMenuType';

type RestaurantMenuProps = {
  menu: RestaurantMenu;
};

function RestaurantMenu({ menu }: RestaurantMenuProps) {
  const { name, price } = menu;

  return (
    <ul style={{ margin: '0.1rem' }}>
      <li>
        {name}({moneyformat(price)}
        원)
      </li>
    </ul>
  );
}

export default RestaurantMenu;
