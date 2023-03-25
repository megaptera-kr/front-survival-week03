import commaNumber from '../utils/commaNumber';
import { Menu } from '../types/Restaurants';

function MenuItem({ menuItem }: {menuItem: Menu}) {
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
