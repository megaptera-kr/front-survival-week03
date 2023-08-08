import { RestaurantType } from '../../types';

type FilterRowProps = {
  restaurants: RestaurantType[];
  currentCategory: string;
  keyword: string;
};
export default function FilterRow({
  restaurants,
  currentCategory,
  keyword,
}: FilterRowProps) {
  return (
    <>
      {restaurants
        .filter((restaurant: RestaurantType) => restaurant.category.includes(currentCategory))
        .filter((restaurant: RestaurantType) => restaurant.name.includes(keyword.trim()))
        .map((restaurant: RestaurantType) => (
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
    </>
  );
}
