import type { Menu } from '../types/restaurants';

type RestaurantMenuProps = {
  food: Menu;
}

function RestaurantMenu({ food }: RestaurantMenuProps) {
  return (
    <li key={food.id}>
      <span>
        {`${food.name}(${food.price.toLocaleString()}원)`}
      </span>
    </li>
  );
}

export default RestaurantMenu;
