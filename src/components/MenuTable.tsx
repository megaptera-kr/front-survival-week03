import { Restaurant } from '../types/Menu';

type MenuTableProps = {
  restaurants: Restaurant[];
  restaurantName: string;
  category: string;
};

export default function Table({
  restaurants,
  restaurantName,
  category,
}: MenuTableProps) {
  const filterRestaurants = restaurants
    .filter((restaurant) => restaurant.name.includes(restaurantName))
    .filter((restaurant) => {
      if (category === '전체') return true;

      return restaurant.category === category;
    });

  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filterRestaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <ul>
                {restaurant.menu.map((list) => (
                  <li key={list.id}>
                    {list.name}
                    (
                    {list.price}
                    )
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
