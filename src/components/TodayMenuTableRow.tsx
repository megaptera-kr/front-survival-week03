import { Restaurant } from '../types';

interface TodayMenuTableRowProps {
  restaurant: Restaurant;
}

function TodayMenuTableRow({ restaurant }: TodayMenuTableRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        {restaurant.menu.map((menu) => (
          <li key={menu.id}>
            {`${menu.name}(${menu.price.toLocaleString()}원)`}
          </li>
        ))}
      </td>
    </tr>
  );
}

export default TodayMenuTableRow;
