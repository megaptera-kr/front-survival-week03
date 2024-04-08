import { Category } from '../../types/Category';
import { Restaurant } from '../../types/Restaurant';
import filterRestaurantByCategory from '../../utils/filterRestaurantByCategory';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  restaurants: Restaurant[]
  currentCategory:Category;
  filterText:string;
}

export default function RestaurantTable({
  restaurants,
  currentCategory,
  filterText,
}: RestaurantTableProps) {
  const filteredRestaurantByCategory = filterRestaurantByCategory(
    restaurants,
    {
      category: currentCategory,
      filterText,
    },
  );
  return (
    <table>
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredRestaurantByCategory.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}
