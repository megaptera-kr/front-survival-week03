import RestaurantMenu from '../types/RestaurantMenuType';

type RestaurantMenuProps = {
  menu: RestaurantMenu;
};

export default function RestaurantMenu({ menu }: RestaurantMenuProps) {
  return (
    <>
      <ul key={menu.id}>
        <li>
          {menu.name}({menu.price})
        </li>
      </ul>
    </>
  );
}
