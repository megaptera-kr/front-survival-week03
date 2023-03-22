import { RestaurantCategory } from '../types/app';

const RESTAURANT_TYPES: RestaurantCategory[] = ['전체', '중식', '한식', '일식'];

type RestaurantCategoryFilterProps = {
  onSelect: (type: RestaurantCategory) => void
}
export default function RestaurantCategoryFilter({ onSelect }: RestaurantCategoryFilterProps) {
  const handleSelectMenu = (type: RestaurantCategory) => () => {
    onSelect(type);
  };

  return (
    <ul className="restaurant-filter-list">
      {RESTAURANT_TYPES.map((type) => (
        <li className="restaurant-filter-item" key={type}><button type="button" onClick={handleSelectMenu(type)}>{type}</button></li>
      ))}
    </ul>
  );
}
