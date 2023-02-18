import { Restaurants } from '../types/filterableProductTable';

type RestaurantListViewProps = {
  restaurant: Restaurants
}

function RestaurantListView({ restaurant }: RestaurantListViewProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        {
          restaurant.menu.map((menuItem) => (
            <ul key={menuItem.id}>
              <li>{`${menuItem.name}(${menuItem.price})`}</li>
            </ul>

          ))
        }
      </td>
    </tr>
  );
}

export default RestaurantListView;
