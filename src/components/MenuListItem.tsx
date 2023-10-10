import Menu from '../types/Menu';

type MenuListItemProps = {
  menu: Menu
}

export default function MenuListItem({ menu }: MenuListItemProps) {
  return (
    <li key={menu.name}>
      {menu.name}
      (
      {menu.price.toLocaleString('ko-kr')}
      원)
    </li>
  );
}
