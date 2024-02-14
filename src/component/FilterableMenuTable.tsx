import Restaurant from '../types/RestaurantType';

type FiterableMenuTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableMenuTable({
  restaurants,
}: FiterableMenuTableProps) {
  return (
    <>
      <div className='filtered-menu-container'>
        <div>오늘의 메뉴</div>
        <div>
          <label htmlFor='input-menu-search'>검색</label>
          <input type='text' id='input-menu-search' placeholder='식당 이름' />
        </div>
        <div>
          <button type='button'>전체</button>
          <button type='button'>중식</button>
          <button type='button'>한식</button>
          <button type='button'>일식</button>
        </div>
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
      </div>
    </>
  );
}
