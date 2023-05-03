import Restaurant from '../types/Restaurant';

type RestaurantNameRowProps = {
    restaurant: Restaurant;
  }

export default function RestaurantNameRow({ restaurant }: RestaurantNameRowProps) {
  return (<td className="restaurant-name-row">{restaurant.name}</td>);
}
