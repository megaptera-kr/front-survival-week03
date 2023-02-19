import { RestaurantTableMenu } from '../../types/filterableRestaurant';

type RestaurantMenuProps = {
  menu: RestaurantTableMenu[]
}

function RestaurantMenu({ menu }: RestaurantMenuProps) {
  return (
    <>
      {
        menu.map((menuItem) => (
          <ul key={menuItem.id} style={{ margin: '8px 0' }}>
            <li>{`${menuItem.name}(${menuItem.price})원`}</li>
          </ul>

        ))
      }
    </>
  );
}

export default RestaurantMenu;
