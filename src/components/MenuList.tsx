import Menu from '../types/Menu';

type MenuListProps = {
  menu: Menu[];
};

export default function MenuList({ menu }: MenuListProps) {
  return (
    <ul>
      {menu.map((food) => (
        <li key={food.name}>
          {food.name}
          {food.price.toLocaleString()}
        </li>
      ))}
    </ul>
  );
}
