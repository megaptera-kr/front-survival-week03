import { Restaurant } from '../types/Menu';

type RestaurantsProps = {
    restaurants: Restaurant[];
    restaurantName: string;
    category: string;
};
export default function MenuTable({
    restaurants,
    restaurantName,
    category,
}: RestaurantsProps) {
    const filteredRestaurants = restaurants
        .filter((restaurant) => restaurant.name.includes(restaurantName))
        .filter((restaurant) => {
            if (category === '전체') return true;

            return restaurant.category === category;
        });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>식당 이름</th>
                        <th>종류</th>
                        <th>메뉴</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRestaurants.map((list) => (
                        <tr key={list.id}>
                            <td>{list.name}</td>
                            <td>{list.category}</td>
                            <td>
                                <ul>
                                    {list.menu.map((menu) => (
                                        <li key={menu.id}>
                                            {menu.name}[{menu.price}]
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
