import data from '../restaurants.json';

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <div>
        <label htmlFor="input">
          검색
          <input type="text" placeholder="식당 이름" />
        </label>
        <ul>
          <button type="button">전체</button>
          <button type="button">중식</button>
          <button type="button">한식</button>
          <button type="button">일식</button>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>식당이름</th>
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
                <ul>
                  {restaurant.menu.map((food) => (
                    <li key={food.id}>
                      {food.name}
                      (
                      {food.price.toLocaleString()}
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
