import data from '../restaurants.json';

export default function App() {
  const { restaurants } = data;
  return (
    <div>
      <h1>
        오늘의 메뉴
      </h1>
      <div className="search-field">
        <label htmlFor="search-bar">검색</label>
        <input id="search-bar" type="text" placeholder="식당 이름" />
      </div>
      <div className="filter-buttons">
        <button type="button">전체</button>
        <button type="button">중식</button>
        <button type="button">한식</button>
        <button type="button">일식</button>
      </div>
      <table className="restaurants-table">
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                <ul>
                  {restaurant.menu.map((menu) => (
                    <li key={menu.id}>
                      {menu.name}
                      (
                      {menu.price}
                      원)
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
