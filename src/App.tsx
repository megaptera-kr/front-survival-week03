import data from '../restaurants.json';
import Restaurant from './components/Restaurant';

export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <Restaurant data={data.restaurants} />
    </>

  );
}
