import { Restaurant } from '../../types/Restaurant';

type RestaurantRowProps = {
  restaurant: Restaurant
}
export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <li key={food.id}>
              {food.name}
              (
              {`${food.price.toLocaleString('ko-kr')}원`}
              )
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
