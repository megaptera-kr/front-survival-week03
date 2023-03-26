import Restaurant from '../types/restaurant';

export default function RestaurantTable({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
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
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <ul>
                {restaurant.menu.map((food) => (
                  <li key={food.id}>{`${food.name}(${food.price}원)`}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
