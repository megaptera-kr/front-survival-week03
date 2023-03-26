import Restaurant from '../types/Restaurant';
import { RestaurantRow } from './RestaurantRow';

export interface RestaurantTableProps {
    filteredRestaurants: Restaurant[]
}

export function RestaurantTable({ filteredRestaurants }: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{
            paddingInline: '2rem',
          }}
          >
            식당 이름
          </th>
          <th>
            종류
          </th>
          <th>
            메뉴
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredRestaurants.map((r) => (
          <RestaurantRow
            key={r.id}
            restaurant={r}
          />
        ))}
      </tbody>
    </table>
  );
}
