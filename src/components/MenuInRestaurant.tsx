import Menu from '../type/Menu';

type MenuInRestaurantProps = {
  menus: Menu[];
}

export default function MenuInRestaurant({
  menus,
}: MenuInRestaurantProps) {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          {menu.name}
          (
          {menu.price}
          원)
        </li>
      ))}
    </ul>
  );
}
