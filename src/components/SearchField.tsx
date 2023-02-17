import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

import makeCategories from '../utils/makeCategories';

import Restaurant from '../types/Restaurant';

type SearchFieldProps = {
  restaurants: Restaurant[];
}

export default function SearchField({ restaurants }: SearchFieldProps) {
  const categories = makeCategories(restaurants);

  return (
    <div>
      <SearchBar placeholder="식당 이름" />
      {categories.map((category) => (
        <FilterButton key={category} category={category} />
      ))}
    </div>
  );
}
