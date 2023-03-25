import RestaurantItem from './RestaurantItem';
import { restaurants } from '../../restaurants.json';

function RestaurantsRow() {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.name} restaurant={restaurant} />
      ))}
    </tbody>
  );
}

export default RestaurantsRow;
