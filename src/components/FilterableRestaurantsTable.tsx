import RestaurantsTable from './RestaurantsTable';

import { restaurants } from '../../restaurants.json';

export default function FilterableRestaurantsTable() {
  return (
    <RestaurantsTable restaurants={restaurants} />
  );
}
