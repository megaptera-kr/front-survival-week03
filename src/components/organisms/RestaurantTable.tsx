import { Restaurant } from '../../models/Restaurant';
import TableRow from '../molecules/TableRow';

interface Props {
  restaurants: Restaurant[];
}

function RestaurantTable({ restaurants }: Props) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>식당 이름</th>
            <th style={{ paddingInline: '2rem' }}>종류</th>
            <th style={{ paddingInline: '2rem' }}>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </section>

  );
}

export default RestaurantTable;
