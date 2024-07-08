import { Restaurant } from '../types';
import TodayMenuTableRow from './TodayMenuTableRow';

interface TodayMenuTableProps {
  filteredRestaurants: Restaurant[];
}

function TodayMenuTable({ filteredRestaurants }: TodayMenuTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredRestaurants.map((restaurant) => (
          <TodayMenuTableRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}

export default TodayMenuTable;
