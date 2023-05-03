import type Menu from '../types/Menu';

type MenuRowProps = {
  menu: Menu;
}

export default function MenuRow(
  { menu } : MenuRowProps,
) {
  return (
    <li>
      {`${menu.name}(${menu.price.toLocaleString()}원)`}
    </li>
  );
}
