import TableHeadRow from './TableHeadRow';
import Restaurant from './Restaurant';

import { IRestaurant } from '../types/restaurant';

type RestaurantTableProps = {
  heads: string[]
  restaurants: IRestaurant[];
};

function RestaurantTable({ heads, restaurants }: RestaurantTableProps) {
  return (
    <table style={{ width: 600 }}>
      <thead>
        <TableHeadRow heads={heads} />
      </thead>
      <tbody>
        {restaurants.map((restaurant: IRestaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
