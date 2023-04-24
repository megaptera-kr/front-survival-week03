import { Restaurants } from '../types/Restaurants';
import RestaurantItem from './RestaurantItem';

interface RestaurantsRowProps {
  filteredMenus: Restaurants[];
}

function RestaurantsRow({ filteredMenus }: RestaurantsRowProps) {
  return (
    <tbody>
      {
        filteredMenus.map((filteredMenu) => (
          <RestaurantItem key={filteredMenu.name} restaurant={filteredMenu} />
        ))
      }
    </tbody>
  );
}

export default RestaurantsRow;
