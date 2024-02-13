import { useRef } from 'react';

import { Restaurants } from '../types/Restaurants';
import selectCategories from '../utils/selectCategories';
import RestaurantsTable from './RestaurantsTable';

type FilterableProductTableProps = {
  restaurants: Restaurants[]
}

function FilterableProductTable({ restaurants }: FilterableProductTableProps) {
  const label = '검색';

  const id = useRef(`input-${label}`.replace(/ /g, '-').toLowerCase());

  const categories = selectCategories(restaurants);

  return (
    <div>
      <div>
        <div>
          <label htmlFor={id.current} style={{ paddingRight: '1rem' }}>
            {label}
          </label>
          <input type="text" id={id.current} placeholder="식당 이름" />
        </div>
        <ul style={{ display: 'flex', padding: '0px', listStyleType: 'none' }}>
          {categories
            ? (categories.map((category) => (
              <li key={category} style={{ marginRight: '1rem' }}>
                <button type="button">
                  {category}
                </button>
              </li>
            )))
            : (<div>Loading...</div>)}
        </ul>
      </div>
      <RestaurantsTable restaurants={restaurants} />
    </div>
  );
}

export default FilterableProductTable;
