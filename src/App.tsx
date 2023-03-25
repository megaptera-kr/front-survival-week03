import { restaurants } from '../restaurants.json';

interface RestaurantsProps {
    id: number;
    category: string;
    name: string;
    menu: object[];
}

// - 사용자는 식당 이름, 종류, 메뉴가 보이는 식당 목록을 볼 수 있다.
// - 사용자는 식당 이름을 입력하여 이름이 (부분)일치하는 식당 목록을 골라 볼 수 있다.
// - 사용자는 식당 종류 버튼을 눌러서 종류가 일치하는 식당 목록만 골라 볼 수 있다.
// - 사용자는 입력한 식당 이름과 선택한 종류가 모두 일치하는 식당 목록만 골라 볼 수 있다.

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <label htmlFor="filteredMenu" style={{ marginRight: 15 }}>검색</label>
      <input id="filteredMenu" placeholder="식당 이름" />
      <div style={{ marginTop: 15, marginBottom: 15 }}>
        <button type="button" style={{ marginRight: 15 }}>전체</button>
        <button type="button" style={{ marginRight: 15 }}>중식</button>
        <button type="button" style={{ marginRight: 15 }}>한식</button>
        <button type="button" style={{ marginRight: 15 }}>일식</button>
      </div>

      <table className="menuProductTable">
        <thead className="ProductCategoryRow">
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr className="ProductRow" key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                {restaurant.menu.map((menuItem) => (
                  <ul key={menuItem.id} style={{ margin: 0 }}>
                    <li>
                      {menuItem.name}
                      {`(${menuItem.price}원)`}
                    </li>
                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
