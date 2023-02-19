import Restaurant from '../types/Restaurant';

type RestaurantTableRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantTableRow({ restaurant }:
  RestaurantTableRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((list) => (
            <li key={list.id}>
              {list.name}
              (
              {list.price.toLocaleString()}
              원)
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
