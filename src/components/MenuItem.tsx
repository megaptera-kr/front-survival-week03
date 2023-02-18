type MenuItemProps = {
    name: string;
    price: number;
}

export default function MenuItem({ name, price }:MenuItemProps) {
  return (
    <li>
      {`${name}(${price.toLocaleString('ko-KR')}원)`}
    </li>
  );
}
