import { Restaurants } from '../types/Restaurants';
import CategoryRow from './CategoryRow';
import RestaurantsRow from './RestaurantsRow';

interface MenuTableProps {
    filteredMenus: Restaurants[];
}

function MenuTable({ filteredMenus }: MenuTableProps) {
  return (
    <table>
      <CategoryRow />
      <RestaurantsRow filteredMenus={filteredMenus} />
    </table>
  );
}

export default MenuTable;
