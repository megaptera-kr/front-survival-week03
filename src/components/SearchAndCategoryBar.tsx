import selectCategories from '../utils/selectCategories';
import { Restaurants } from '../types/Restaurants';
import SearchBar from './SearchBar';
import CategoryBtn from './CategoryBtn';

type SearchAndCategoryBarProps = {
  restaurants: Restaurants[]
}

function SearchAndCategoryBar({ restaurants }: SearchAndCategoryBarProps) {
  const categories = selectCategories(restaurants);
  return (
    <div>
      <SearchBar label="검색" />
      <ul style={{ display: 'flex', padding: '0px', listStyleType: 'none' }}>
        {categories
          ? (categories.map((category) => (
            <CategoryBtn key={category} category={category} />
          )))
          : (<div>Loading...</div>)}
      </ul>
    </div>
  );
}

export default SearchAndCategoryBar;
