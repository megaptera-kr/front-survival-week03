import RestaurantMenu from '../types/RestaurantMenuType';

import { moneyformat } from '../utils/common';

type RestaurantMenuProps = {
  menu: RestaurantMenu;
};

export default function RestaurantMenu({ menu }: RestaurantMenuProps) {
  const { id, name, price } = menu;

  return (
    <>
      <ul key={id}>
        <li>
          {name}({moneyformat(price)}원)
        </li>
      </ul>
    </>
  );
}
