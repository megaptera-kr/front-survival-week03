import TableBody from './TableBody';
import restaurantTableProps from '../types/restaurantTableProps';

export default function RestaurantTable(
  {
    data, filterText, filterCate,
  }: restaurantTableProps,
) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            식당 이름
          </th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {
          data.filter((a) => a.name.includes(filterText.trim()) && a.category.includes(filterCate))
            .map((restaurant) => (
              <TableBody key={restaurant.id} restaurant={restaurant} />
            ))
        }
      </tbody>
    </table>
  );
}
