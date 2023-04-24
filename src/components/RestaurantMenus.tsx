import { MenuType } from '../types/MenuType';

type RestaurantMenusProps = {
  menu: MenuType[];
};

export default function RestaurantMenus({ menu }: RestaurantMenusProps) {
  return (
    <td>
      <ul>
        {menu.map(({ id, name, price }) => (
          <li key={id}>{`${name} (${price.toLocaleString('ko-KR')}원)`}</li>
        ))}
      </ul>
    </td>
  );
}
