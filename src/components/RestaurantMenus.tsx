import IRestaurantMenu from '../types/menu';

type RestaurantMenusProps = {
  menus: IRestaurantMenu[];
};

export default function RestaurantMenus({ menus }: RestaurantMenusProps) {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          {`${menu.name}(${menu.price.toLocaleString()}원)`}
        </li>
      ))}
    </ul>
  );
}
