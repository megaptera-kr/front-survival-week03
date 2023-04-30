import restaurantsData from '../restaurants.json';

import selectCategories from './utils/selectCategories';

import Header from './components/common/Header';
import FilterableRestaurantsTables from './components/FilterableRestaurantsTable';

export default function App() {
  const { restaurants } = restaurantsData;
  const categories: string[] = selectCategories(restaurants);

  return (
    <>
      <Header />
      <FilterableRestaurantsTables
        categories={categories}
        restaurants={restaurants}
      />
    </>
  );
}
