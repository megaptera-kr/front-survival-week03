import Restaurant from '../type/Restaurant';
import Food from './Food';

type RestaurantRowProps = {
  restaurant: Restaurant
}

export default function RestarurantRow({
  restaurant,
}: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        {restaurant.menu.map((food) => (
          <Food
            key={food.id}
            food={food}
          />
        ))}
      </td>
    </tr>
  );
}
