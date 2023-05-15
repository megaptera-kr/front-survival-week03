import TableHeader from './TableHeader';

import RestaurantsType from '../types/RestaurantsType';
import TableBody from './TableBody';

type TableType = {
  restaurants: RestaurantsType[]
}

export default function Table({ restaurants }:TableType) {
  return (
    <table className="product-table">
      <TableHeader />
      <TableBody restaurants={restaurants} />
    </table>
  );
}
