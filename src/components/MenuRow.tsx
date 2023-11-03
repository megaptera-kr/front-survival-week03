import { Menu } from '../types/Restaurants';

function MenuRow({ menu } : {menu : Menu}) {
  return (
    <li key={menu.id}>
      {menu.name}
      (
      {menu.price}
      )
    </li>
  );
}

export default MenuRow;
