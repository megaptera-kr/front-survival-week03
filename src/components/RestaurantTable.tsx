import RestaurantTableHead from './RestaurantTableHead';
import RestaurantTableBody from './RestauantTableBody';

import Restaurant from '../types/Restaurant';

type RestaurantTableProps = {
    restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table className="restaurant-table">
      <RestaurantTableHead />
      <RestaurantTableBody restaurants={restaurants} />
    </table>
  );
}
