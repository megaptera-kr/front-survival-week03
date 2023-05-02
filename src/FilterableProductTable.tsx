import { useState } from 'react';
import ListOfRestaurants from './ListOfRestaurants';
import SearchBar from './SearchBar';

import listofrestaurants from './restaurants.json';

const lorr = listofrestaurants.restaurants;

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState<string>('');

  const [buttonClicked, setButtonClicked] = useState<string>('');

  const filteredRestaurants = (lorr.filter((rstr) => rstr.name.includes(filterText.trim())).filter((rstr) => !buttonClicked
  || buttonClicked === '전체'
  || rstr.category === buttonClicked)
  );

  return (
    <div className="filterable-product-table">
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <table className="product-table">
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          <ListOfRestaurants lorr={filteredRestaurants} />
        </tbody>
      </table>
    </div>
  );
}
