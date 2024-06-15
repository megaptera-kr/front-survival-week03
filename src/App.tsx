import { restaurants } from '../restaurants.json';
import Restaurant from './type/Restaurant';

export default function App() {
  const categories = restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);

  return (
    <div className="filterable-restaurant-table">
      <h1>오늘의 메뉴</h1>
      <div>
        <div className="search-bar">
          <div>
            <label
              htmlFor="input-검색"
              style={{
                paddingRight: '1rem',
              }}
            >
              검색
            </label>
            <input
              id="input-검색"
              type="text"
              placeholder="식당 이름"
            />
          </div>
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
              {restaurants.map((restaurant) => (
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
