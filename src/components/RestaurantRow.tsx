import { Restaurant } from '../types/Restaurant';

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
              {food.price}
              )
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
