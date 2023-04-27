import Menu from '../types/menu';

type RestaurantsTableRowMenuProps = {
  menu: Menu;
}

export default function RestaurantsTableRowMenu({ menu }: RestaurantsTableRowMenuProps) {
  return (
    <li key={menu.id}>
      {menu.name}
      (
      {menu.price}
      )
    </li>
  );
}
