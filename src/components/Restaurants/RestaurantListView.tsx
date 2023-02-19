import { RestaurantsTable } from '../../types/filterableRestaurant';
import RestaurantMenu from './RestaurantMenu';

type RestaurantListViewProps = {
  restaurant: RestaurantsTable
}

function RestaurantListView({ restaurant }: RestaurantListViewProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td><RestaurantMenu menu={restaurant.menu} /></td>
    </tr>
  );
}

export default RestaurantListView;
