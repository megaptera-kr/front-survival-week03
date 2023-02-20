import MenuItem from './MenuItem';

import Menu from '../types/Menu';

type RestaurantMenusProps = {
    menu: Menu[]
}

export default function RestaurantMenus({ menu }:RestaurantMenusProps) {
  return (
    <td>
      <ul>
        {menu.map(({ id, name, price }) => (
          <MenuItem key={id} name={name} price={price} />
        ))}
      </ul>
    </td>
  );
}
