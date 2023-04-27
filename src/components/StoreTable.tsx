import Restaurants from '../type/restaurantstype';
import StoreInCategory from './StoreInCategory';

type StoreTableProps = {
  restaurants: Restaurants[]
}

export default function StoreTable({ restaurants }: StoreTableProps) {
  return (
    <table className="maintable">
      <thead>
        <tr>
          <th>식당이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((items) => (
          <StoreInCategory key={items.id} items={items} />
        ))}
      </tbody>
    </table>
  );
}
