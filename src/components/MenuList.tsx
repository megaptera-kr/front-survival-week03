import Menu from '../types/restaurants';

type MenuListProps = {
    menu : Menu[];
}

export default function MenuList({
  menu,
}:MenuListProps) {
  return (
    <td>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </td>
  );
}
