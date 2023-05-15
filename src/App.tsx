import restaurants from '../restaurants.json';

import TotalMenu from './components/TotalMenu';

const restaurant = restaurants.restaurants;

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <TotalMenu restaurant={restaurant} />
    </div>
  );
}
