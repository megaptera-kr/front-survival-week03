/**
오늘의 메뉴를 고를 수 있도록 아래 조건에 따라 식당 목록을 볼 수 있도록 만들어 주세요.

- 사용자는 식당 이름, 종류, 메뉴가 보이는 식당 목록을 볼 수 있다.
- 사용자는 식당 이름을 입력하여 이름이 (부분)일치하는 식당 목록을 골라 볼 수 있다.
- 사용자는 식당 종류 버튼을 눌러서 종류가 일치하는 식당 목록만 골라 볼 수 있다.
- 사용자는 입력한 식당 이름과 선택한 종류가 모두 일치하는 식당 목록만 골라 볼 수 있다.
 */
import jsonData from '../restaurants.json';
import './globals.css';

export default function App() {
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

  return (
    <>
      <h1>오늘의 메뉴</h1>

      <label style={{ display: 'flex', gap: '1rem' }}>
        <p>검색</p>
        <input type="text" placeholder="식당 이름을 검색하세요" />
      </label>

      <ul style={{
        display: 'flex', gap: '1rem', listStyle: 'none', padding: '0',
      }}
      >
        {foodCategories.map((category) => (
          <li key={category}>
            <button type="button" key={category}>{category}</button>
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
          {restaurants.map((restaurant) => (
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
