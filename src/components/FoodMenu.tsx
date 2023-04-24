import Food from '../types/Food';

type FoodMenuProps = {
  menu: Food[];
}

export default function FoodMenu({ menu }: FoodMenuProps) {
  return (
    <ul>
      {menu.map((food) => {
        const { name, price } = food;

        return (
          <li
            key={name}
          >
            {name}
            (
            {price.toLocaleString()}
            원)
          </li>
        );
      })}
    </ul>
  );
}
