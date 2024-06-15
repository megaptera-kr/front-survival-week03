import { useState } from 'react';
import { restaurants } from '../restaurants.json';
import selectCategories from './utils/selectCategories';
import filterRestaurants from './utils/filterRestaurants';
import SearchBar from './components/SearchBar';

export default function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
    <div className="filterable-restaurant-table">
      <h1>오늘의 메뉴</h1>
      <div>
        <SearchBar
          categories={categories}
          filterText={filterText}
          setFilterText={setFilterText}
          setFilterCategory={setFilterCategory}
        />
        <div className="restaurants">
          <table>
            <thead>
              <tr>
                <th
                  style={{
                    paddingInline: '2rem',
                  }}
                >
                  식당 이름
                </th>
                <th>종류</th>
                <th>메뉴</th>
              </tr>
            </thead>
            <tbody>
              {filteredRestaurants.map((restaurant) => (
                <tr
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.category}</td>
                  <td>
                    {restaurant.menu.map((food) => (
                      <ul
                        key={food.id}
                        style={{
                          margin: 0,
                        }}
                      >
                        <li>
                          {food.name}
                          (
                          {food.price}
                          원)
                        </li>
                      </ul>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
