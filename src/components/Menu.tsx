type MenuProps = {
  menuItems: Menu[];
};

export default function Menu({ menuItems }: MenuProps) {
  return (
    <td>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
            (
            {menu.price}
            원)
          </li>
        ))}
      </ul>
    </td>
  );
}
