import { IMenu } from '../types/restaurant';

type MenusProps = {
  menus: IMenu[];
};

function Menus({ menus }: MenusProps) {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          {`${menu.name}(${menu.price.toLocaleString()}원)`}
        </li>
      ))}
    </ul>
  );
}

export default Menus;
