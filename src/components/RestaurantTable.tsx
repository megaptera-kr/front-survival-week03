import Restaurant from '../types/Restaurant';
import RestaurantTableRow from './RestaurantTableRow';

type RestaurantTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }:
  RestaurantTableProps) {
  return (
    <table className="restaurant-table">
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((item: Restaurant) => (
          <RestaurantTableRow key={item.id} restaurant={item} />
        ))}
      </tbody>
    </table>
  );
}
