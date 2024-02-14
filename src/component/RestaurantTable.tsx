import Restaurant from '../types/RestaurantType';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <>
      <table className='menu-table'>
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
                {restaurant.menu.map((item) => (
                  <ul key={item.id}>
                    <li>
                      {item.name}({item.price})
                    </li>
                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
