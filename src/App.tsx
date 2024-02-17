/**
오늘의 메뉴를 고를 수 있도록 아래 조건에 따라 식당 목록을 볼 수 있도록 만들어 주세요.

- 사용자는 식당 이름, 종류, 메뉴가 보이는 식당 목록을 볼 수 있다.
- 사용자는 식당 이름을 입력하여 이름이 (부분)일치하는 식당 목록을 골라 볼 수 있다.
- 사용자는 식당 종류 버튼을 눌러서 종류가 일치하는 식당 목록만 골라 볼 수 있다.
- 사용자는 입력한 식당 이름과 선택한 종류가 모두 일치하는 식당 목록만 골라 볼 수 있다.
 */
import jsonData from '../restaurants.json';

export default function App() {
  const { restaurants } = jsonData;

  return (
    <>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.category}</p>
          <ul>
            {restaurant.menu.map((menu) => (
              <li key={menu.id}>
                {menu.name}
                {' '}
                -
                {menu.price}
                원
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
