import { RestaurantMenu } from '../types/Restaurant';

type RestaurantMeneProps = {
    restaurantMenu: RestaurantMenu;
  }

export default function RestaurantMenuList({ restaurantMenu }:RestaurantMeneProps) {
  return (
    <ul>
      <li key={restaurantMenu.id}>
        <span>
          {restaurantMenu.name}
        </span>
        <span>
          (
          {restaurantMenu.price}
          원)
        </span>
      </li>
    </ul>
  );
}
