import FilterableRestaurantTable from './components/FilterableRestaurantTable';

export default function App() {
  const MainTitle = '오늘의 메뉴';
  return (
    <div>
      <h2>{MainTitle}</h2>
      <FilterableRestaurantTable />
    </div>
  );
}
