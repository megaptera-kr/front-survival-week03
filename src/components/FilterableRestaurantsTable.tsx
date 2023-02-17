import SearchField from './SearchField';
import RestaurantsTable from './RestaurantsTable';

import Restaurant from '../types/Restaurant';

type FilterableRestaurantsTableProps = {
    restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  return (
    <>
      <SearchField restaurants={restaurants} />
      <RestaurantsTable restaurants={restaurants} />
    </>
  );
}
