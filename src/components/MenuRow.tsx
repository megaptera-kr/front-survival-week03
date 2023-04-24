import { Menu } from '../types/types';

interface MenuRowProps {
    menu : Menu;
}
function MenuRow({ menu } : MenuRowProps) {
  return (
    <li>
      {menu.name}
      (
      {menu.price.toLocaleString()}
      원)
    </li>
  );
}

export default MenuRow;
