import Restaurant from '../types/Restaurant';
import MenuHeader from './MenuHeader';
import RestaurantsInCategory from './RestaurantsInCategory';

type RestaurantTableProps = {
    filteredResFood: Restaurant[];
}

export default function RestaurantTable({ filteredResFood }: RestaurantTableProps) {
  return (
    <div>
      <table>
        <thead>
          <MenuHeader />
        </thead>
        <tbody>
          <RestaurantsInCategory restaurant={filteredResFood} />
        </tbody>
      </table>
    </div>
  );
}
