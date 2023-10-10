import IRestaurant from '../types/restaurant';
import RestaurantMenus from './RestaurantMenus';

type RestaurantRowProps = {
  restaurant: IRestaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <RestaurantMenus menus={menu} />
      </td>
    </tr>
  );
}
