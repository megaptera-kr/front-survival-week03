import thousandSeparator from '../utils/thousandSeparator';

import Restaurant from '../types/Restaurant';

type MenusProps = {
  restaurant: Restaurant;
}
export default function Menus({ restaurant }: MenusProps) {
  return (
    <ul>
      {restaurant.menu.map((item) => (
        <li key={item.id}>
          {item.name}
          (
          {thousandSeparator(item.price)}
          원)
        </li>
      ))}
    </ul>
  );
}
