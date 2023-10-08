import RestaurantBody from './RestaurantBody';
import RestaurantHead from './RestaurantHead';

import IRestaurant from '../types/restaurant';

type RestaurantTableProps = {
  restaurants: IRestaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table>
      <RestaurantHead />
      <RestaurantBody restaurants={restaurants} />
    </table>
  );
}
