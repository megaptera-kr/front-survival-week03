import { restaurants } from '../restaurants.json';

// type 적용 하기..
type Menu = {
  id: number;
  name: string;
  price: number;
}
type Restaurant = {
  id: number;
  category: string;
  name: string;
  menu: Menu[];
}
export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      {/* 눕혀야함 */}
      <div>
        <label htmlFor="restaurant-name">검색</label>
        <input type="search" placeholder="식당 이름" name="resturant-name" />
      </div>
      {/* Category iterate */}
      <ul>
        <li><button type="button">전체</button></li>
        <li><button type="button">중식</button></li>
        <li><button type="button">한식</button></li>
        <li><button type="button">일식</button></li>
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
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                <ul>
                  {restaurant.menu.map((menu) => (
                    <li key={menu.id}>
                      {`${menu.name}(${menu.price.toLocaleString()}원)`}
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
