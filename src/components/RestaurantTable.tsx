import type { Restaurant, RestaurantList } from '../types/Restaurant';

export default function RestaurantTable({ data }: { data: RestaurantList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>가게명</th>
          <th>카테고리</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {data.restaurants?.map((v: Restaurant) => (
          <tr key={v.id}>
            <td>{v.name}</td>
            <td>{v.category}</td>
            <td>
              <ul>
                {v.menu.map((menu) => (
                  <li key={menu.id}>
                    {menu.name}
                    {' '}
                    (
                    {menu.price.toLocaleString()}
                    원)
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
