import { useState } from 'react';
import { restaurants } from '../restaurants.json';
import selectCategories from './utils/selectCategories';
import TextFiled from './components/TextField';
import filterRestaurants from './utils/filterRestaurants';

export default function App() {
  const [textFiled, setTextField] = useState<string>('');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, textFiled);

  return (
    <div className="filterable-restaurant-table">
      <h1>오늘의 메뉴</h1>
      <div>
        <div className="search-bar">
          <TextFiled
            label="검색"
            placeholder="식당 이름"
            textField={textFiled}
            setTextField={setTextField}
          />
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              padding: 0,
            }}
          >
            {['전체', ...categories].map((category) => (
              <li
                key={category}
                style={{
                  paddingRight: '1rem',
                }}
              >
                <button
                  type="button"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
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
