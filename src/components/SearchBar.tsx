import { restaurants } from '../../restaurants.json';

import Category from './Category';
import TextFiled from './TextField';

import Restaurant from '../types/restaurant';

type SearchBarProps = {
  filterText: string;
  setFilterText: (value: string) => void;
  setSelectedCategory: (value: string)=> void;
}

export default function SearchBar({
  filterText,
  setFilterText,
  setSelectedCategory,
}: SearchBarProps) {
  const categories = restaurants.reduce(
    (acc: string[], restaurant: Restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category])
    , [],
  );

  return (
    <div>
      <TextFiled
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ul style={{
        display: 'flex',
        padding: '0px',
        listStyle: 'none',
      }}
      >
        <li style={{ marginRight: '1rem' }}>
          <button
            type="button"
            onClick={() => { setSelectedCategory(''); }}
          >
            전체

          </button>
        </li>
        {
          categories.map((category) => (
            <Category
              key={category}
              category={category}
              setSelectedCategory={setSelectedCategory}
            />
          ))
        }
      </ul>
    </div>
  );
}
