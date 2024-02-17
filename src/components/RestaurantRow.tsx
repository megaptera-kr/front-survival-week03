import { Restaurant } from '../types';

interface RestaurantRowProps {
  restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }:RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map(({ id, name, price }) => (
            <li key={id}>{`${name}(${price.toLocaleString()}원)`}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
