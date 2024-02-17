import { useState } from 'react';
import jsonData from '../restaurants.json';
import './globals.css';

export default function App() {
  const [filter, setFilter] = useState({
    name: '',
    category: '전체',
  });

  const { restaurants } = jsonData;
  const foodCategories = restaurants.reduce<string[]>(
    (acc, cur) => {
      if (!acc.includes(cur.category)) {
        acc.push(cur.category);
      }
      return acc;
    }
    , ['전체'],
  );

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const nameFilter = filter.name.trim() === '' || restaurant.name.includes(filter.name);
    const categoryFilter = filter.category === '전체' || restaurant.category === filter.category;
    return nameFilter && categoryFilter;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      name: e.target.value.trim(),
    });
  };
  const handleClickCategory = (category: string) => {
    setFilter({
      ...filter,
      category,
    });
  };

  return (
    <>
      <h1>오늘의 메뉴</h1>

      <label style={{ display: 'flex', gap: '1rem' }}>
        <p>검색</p>
        <input type="text" maxLength={20} placeholder="식당 이름을 검색하세요" onChange={(e) => handleFilterChange(e)} />
      </label>

      <ul style={{
        display: 'flex', gap: '1rem', listStyle: 'none', padding: '0',
      }}
      >
        {foodCategories.map((category) => (
          <li key={category}>
            <button type="button" key={category} style={{ backgroundColor: filter.category === category ? 'gray' : undefined }} onClick={() => handleClickCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {filteredRestaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                <ul>
                  {restaurant.menu.map(({ id, name, price }) => (
                    <li key={id}>{`${name}(${price.toLocaleString()}원)`}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}
