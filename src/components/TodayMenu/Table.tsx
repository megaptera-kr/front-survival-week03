import type { Restaurant } from '../../types/todayMenu';

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
  const filteredRestaurants = restaurants
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
        {filteredRestaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <ul>
                {restaurant.menu.map((menuElem) => (
                  <li key={menuElem.id}>
                    {menuElem.name}
                    (
                    {menuElem.price}
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
