import Menu from '../types/Menu';

type MenuListProps = {
    menu: Menu
};

export default function MenuList({ menu } : MenuListProps) {
  return (
    <li>
      {menu.name}
      (
      {menu.price.toLocaleString('en-US')}
      원)
    </li>
  );
}
