import Menu from '../types/Menu';

type MenuProps = {
    menu: Menu
}
export default function Menu({ menu }: MenuProps) {
  return (
    <li>
      {`${menu.name}(${menu.price}원)`}
    </li>
  );
}
