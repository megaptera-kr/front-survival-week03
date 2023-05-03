import { Menu } from '../types';

type MenuItemProps = {
  menu: Menu
}

export default function MenuItem({ menu }:MenuItemProps) {
  return (
    <li>
      {menu.name}
      (
      {menu.price}
      원)
    </li>
  );
}
