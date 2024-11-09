import MenuList from './MenuList';

import Restaurant from '../types/restaurants';

type RestaurantsListProps = {
    restaurants: Restaurant[];
}

export default function RestaurantsList({
  restaurants,
}: RestaurantsListProps) {
  return (
    <>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <MenuList menu={restaurant.menu} />
        </tr>
      ))}
    </>
  );
}
