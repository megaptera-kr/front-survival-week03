import formatCurrency from '../utils/formatCurrency';
import { Menu } from '../types/Restaurants';

type MenuRow = {
  menu: Menu
}

function MenuRow({ menu }: MenuRow) {
  return (
    <li>
      {menu.name}
      (
      { formatCurrency(menu.price) }
      )
    </li>
  );
}

export default MenuRow;
