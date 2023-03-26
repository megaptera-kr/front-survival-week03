import { restaurants } from '../restaurants.json';
import { RestaurantsMenuViewer } from './components/RestaurantsMenuViewer';

export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <RestaurantsMenuViewer restaurants={restaurants} />
    </>
  );
}
