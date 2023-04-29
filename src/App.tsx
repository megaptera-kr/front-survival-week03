import FilterableRestaurantsTableProps from './components/FilterableRestaurantsTable';
import data from '../restaurants.json';

export default function App() {
  return (
    <FilterableRestaurantsTableProps restaurants={data.restaurants} />
  );
}
