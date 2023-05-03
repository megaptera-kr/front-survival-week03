type TableMenuListProps = {
    menus: {
        id: string,
        name: string,
        price: number
    }[]
}

export default function TableMenuList({ menus }: TableMenuListProps) {
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
