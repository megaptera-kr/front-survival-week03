import { Restaurant } from '../types/app';

type RestaurantMenu = Restaurant['menu'][0]

type RestaurantListProps = {
  restaurants: Restaurant[]
}
function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <div>
      <ul className="restaurant-list">
        <li className="restaurant-item restaurant-item-title">
          <h3>식당 이름</h3>
          <h3>종류</h3>
          <h3>메뉴</h3>
        </li>
        {restaurants?.map((restaurant) => (
          <li key={restaurant.id} className="restaurant-item">
            <span>{restaurant.name}</span>
            <span>{restaurant.category}</span>
            <span>
              <ul>
                {restaurant.menu.map((menu: RestaurantMenu) => (
                  <li key={menu.id}>
                    {menu.name}
                    {' '}
                    (
                    {menu.price}
                    원)
                  </li>
                ))}
              </ul>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
