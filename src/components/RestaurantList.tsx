import Restaurant from '../types/restaurant';

type RestaurantListProps = {
  restaurant : Restaurant
}

export default function RestaurantList({ restaurant }: RestaurantListProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <li key={menu.id}>
              {`${menu.name}(${menu.price.toLocaleString('ko-KR')}원)`}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
