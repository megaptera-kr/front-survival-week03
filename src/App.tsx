import { ChangeEvent, useState } from 'react';
import data from '../restaurants.json';

interface Menulist {
  id: string,
  name: string,
  price: number
}

export default function App() {
  const [shopName, setShopName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const { restaurants } = data;
  const categoryNames = ['전체', ...new Set(restaurants.map((shop) => shop.category))];

  const inputShopName = (e: ChangeEvent<HTMLInputElement>) => setShopName(e.target.value.trim());

  const filteredRestaurant = selectedCategory === '전체'
    ? restaurants.filter((s) => s.name.includes(shopName))
    : restaurants.filter((s) => s.category === selectedCategory && s.name.includes(shopName));

  const onRenderMenuList = (menu: Menulist[]) => menu.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  const onRenderRestaurantRow = () => filteredRestaurant.map((shop) => {
    const {
      id, name, category, menu,
    } = shop;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{category}</td>
        <td>
          <ul>
            {onRenderMenuList(menu)}
          </ul>
        </td>
      </tr>
    );
  });

  const onRenderCategoryBtns = () => categoryNames.map((shop) => (
    <li key={shop} style={{ marginRight: '1rem' }}>
      <button type="button" onClick={() => setSelectedCategory(shop)}>{shop}</button>
    </li>
  ));

  return (
    <>
      <h1>오늘의 메뉴</h1>

      <div>
        <div>
          <label htmlFor="input-검색" style={{ paddingRight: '1rem' }}>검색</label>
          <input id="input-검색" type="text" placeholder="식당 이름" value={shopName} onChange={inputShopName} />
        </div>

        <ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
          {onRenderCategoryBtns()}
        </ul>

      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th style={{ paddingInline: '2rem' }}>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </tr>

          </thead>
          <tbody>
            {onRenderRestaurantRow()}
          </tbody>
        </table>
      </div>
    </>
  );
}
