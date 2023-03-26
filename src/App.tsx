import RestaurantMenuTable from './components/RestaurantMenuTable';
import Search from './components/Search';

import { restaurants } from '../restaurants.json';

export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <div>
        <Search />
        <RestaurantMenuTable restaurants={restaurants} />
      </div>
    </>
  );
}
