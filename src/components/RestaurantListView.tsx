import { RestaurantMenu, Restaurants } from '../types/filterableProductTable';

type RestaurantListViewProps = {
  restaurant: Restaurants
}

type RestaurantListMenuProps = {
  menu: RestaurantMenu[]
}

function RestaurantListMenu({ menu }: RestaurantListMenuProps) {
  return (
    <>
      {
        menu.map((menuItem) => (
          <ul key={menuItem.id}>
            <li>{`${menuItem.name}(${menuItem.price})`}</li>
          </ul>

        ))
      }
    </>
  );
}

function RestaurantListView({ restaurant }: RestaurantListViewProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td><RestaurantListMenu menu={restaurant.menu} /></td>
    </tr>
  );
}

export default RestaurantListView;
