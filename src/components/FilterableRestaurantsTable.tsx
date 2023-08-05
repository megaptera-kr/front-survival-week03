import RestaurantsTable from './RestaurantsTable';

import { restaurants } from '../../restaurants.json';
import SearchBar from './SearchBar';

export default function FilterableRestaurantsTable() {
  return (
    <>
      <SearchBar />
      <RestaurantsTable restaurants={restaurants} />
    </>
  );
}
