import commaNumber from '../utils/commaNumber';
import { Menu } from '../types/Restaurants';

interface MenuItemProps {
    menuItem: Menu;
}

function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <ul key={menuItem.id} style={{ margin: 0 }}>
      <li>
        {menuItem.name}
        {commaNumber(menuItem.price)}
      </li>
    </ul>
  );
}

export default MenuItem;
