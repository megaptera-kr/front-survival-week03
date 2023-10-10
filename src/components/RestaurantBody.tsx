import IRestaurant from '../types/restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantBodyProps = {
  restaurants: IRestaurant[];
};

export default function RestaurantBody({ restaurants }: RestaurantBodyProps) {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <RestaurantRow key={restaurant.id} restaurant={restaurant} />
      ))}
    </tbody>
  );
}
