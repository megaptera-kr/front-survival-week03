import Food from '../type/Food';

type FoodProps = {
  food: Food;
}

export default function Food({
  food,
}: FoodProps) {
  return (
    <ul
      key={food.id}
      style={{
        margin: 0,
      }}
    >
      <li>
        {food.name}
        (
        {food.price}
        원)
      </li>
    </ul>
  );
}
