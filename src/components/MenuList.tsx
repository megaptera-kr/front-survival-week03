import Menu from '../types/Menu';

type MenuListProps = {
  menu: Menu[];
};

export default function MenuList({ menu }: MenuListProps) {
  return (
    <ul>
      {menu.map((food) => {
        const { name, price } = food;

        return (
          <li key={name}>
            {name}({price.toLocaleString()}
            원)
          </li>
        );
      })}
    </ul>
  );
}
