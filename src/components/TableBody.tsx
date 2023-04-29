import { Restaurant, Restaurants } from '../types/Restaurant';
import TableMenuList from './TableMenuList';

export default function TableBody({ restaurants }: Restaurants) {
  return (
    <tbody>
      {restaurants.map((restaurant: Restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            <TableMenuList menus={restaurant.menu} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
