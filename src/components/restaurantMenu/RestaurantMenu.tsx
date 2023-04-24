import { Menu } from '../../types/restaurants';

interface RestaurantMenuProps {
  menus: Menu[]
}

export default function RestaurantMenu({ menus }: RestaurantMenuProps) {
  return (
    <ul>
      {menus.map((mennu) => (
        <li key={mennu.id}>
          {mennu.name}
          (
          {mennu.price}
          )
          원
        </li>
      ))}
    </ul>
  );
}
