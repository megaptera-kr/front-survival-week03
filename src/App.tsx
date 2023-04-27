import food from '../restaurants.json';

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <div>
        <label htmlFor="input">검색</label>
        <input type="text" placeholder="식당 이름" />
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
          <tr>
            <td>{food.restaurants[0].name}</td>
          </tr>
          <tr>
            <td>{food.restaurants[1].name}</td>
          </tr>
          <tr>
            <td>{food.restaurants[2].name}</td>
          </tr>
          <tr>
            <td>{food.restaurants[3].name}</td>
          </tr>
          <tr>
            <td>{food.restaurants[4].name}</td>
          </tr>
          <tr>
            <td>{food.restaurants[5].name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
