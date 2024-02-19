import Menu from '../types/Menu';

type MenusProps = {
  menus: Menu[];
};

export default function Menus({ menus }: MenusProps) {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          {menu.name}
          (
          {menu.price.toLocaleString()}
          원)
        </li>
      ))}
    </ul>
  );
}
