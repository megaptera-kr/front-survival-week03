import TableHead from './TableHead';

export default function RestaurantHead() {
  return (
    <thead>
      <tr>
        <TableHead>식당 이름</TableHead>
        <TableHead>종류</TableHead>
        <TableHead>메뉴</TableHead>
      </tr>
    </thead>
  );
}
