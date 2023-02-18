import data from '../restaurants.json';

export default function App() {
  return (
    <div className="filterable-table">
      <h1>오늘의 메뉴</h1>

      <div className="search-bar">
        <label htmlFor="restaurant-name">검색</label>
        <input type="text" id="restaurant-name" />
      </div>

      <div className="filter-action-button">
        <button type="button">전체</button>
        <button type="button">중식</button>
        <button type="button">한식</button>
        <button type="button">일식</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {data.restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                {
                  restaurant.menu.map((menuItem) => (
                    <ul key={menuItem.id}>
                      <li>{`${menuItem.name}(${menuItem.price})`}</li>
                    </ul>

                  ))
                }
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
