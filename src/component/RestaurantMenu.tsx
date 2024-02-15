import RestaurantMenu from '../types/RestaurantMenuType';

type RestaurantMenuProps = {
  menu: RestaurantMenu;
};

export default function RestaurantMenu({ menu }: RestaurantMenuProps) {
  const { id, name, price } = menu;
  const formattedPrice = new Intl.NumberFormat().format(price);

  return (
    <>
      <ul key={id}>
        <li>
          {name}({formattedPrice}원)
        </li>
      </ul>
    </>
  );
}
