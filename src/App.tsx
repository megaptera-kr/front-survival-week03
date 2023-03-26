import { restaurants } from '../restaurants.json';
import FitleredRestaurants from './components/FilteredRestaurants';

export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <FitleredRestaurants restaurants={restaurants} />
    </>
  );
}
