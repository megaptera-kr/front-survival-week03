import CategoryRow from './CategoryRow';
import RestaurantsRow from './RestaurantsRow';

function MenuTable({ filteredMenus }) {
  return (
    <table>
      <CategoryRow />
      <RestaurantsRow filteredMenus={filteredMenus} />
    </table>
  );
}

export default MenuTable;
