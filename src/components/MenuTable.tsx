import FilteredMenuRow from './FilteredMenuRow';

type MenuTableProps = {
  restaurantList: Restaurant[];
};

export default function MenuTable({ restaurantList }: MenuTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>식당이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurantList.map((restaurant) => (
          <FilteredMenuRow restaurant={restaurant} key={restaurant.id} />
        ))}
      </tbody>
    </table>
  );
}
