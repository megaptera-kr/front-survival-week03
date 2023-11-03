import { Menu } from '../types/Restaurants';

function MenuRow({ menu } : {menu : Menu}) {
  return (
    <li key={menu.id}>
      {menu.name}
      (
      {menu.price}
      원)
    </li>
  );
}

export default MenuRow;
