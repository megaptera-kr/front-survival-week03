import type { RestaurantList } from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable({ data }: { data: RestaurantList }) {
  return (
    <div>
      <div>
        <label htmlFor="current" style={{ paddingRight: '1rem' }}>
          검색
        </label>
        <input
          type="text"
          id="current"
          // onChange={handleChange}
        />
      </div>
      <div>
        <ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
          <li style={{ marginRight: '1rem' }}><button type="button">전체</button></li>
          <li style={{ marginRight: '1rem' }}><button type="button">중식</button></li>
          <li style={{ marginRight: '1rem' }}><button type="button">한식</button></li>
          <li style={{ marginRight: '1rem' }}><button type="button">일식</button></li>
        </ul>
      </div>
      <div>
        <RestaurantTable data={data} />
      </div>
    </div>
  );
}
