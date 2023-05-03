import { Restaurants } from '../types/Restaurant';
import TableBody from './TableBody';
import TableHeadRow from './TableHeadRow';

export default function RestaurantsTable({ restaurants }: Restaurants) {
  return (
    <div>
      <table>
        <TableHeadRow />
        <TableBody restaurants={restaurants} />
      </table>
    </div>
  );
}
