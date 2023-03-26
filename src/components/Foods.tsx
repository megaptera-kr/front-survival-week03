import Food from "../types/Food";

interface FoodProps {
  menu: Food[];
}
export default function Foods({ menu }: FoodProps) {
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.id}>{`${item.name}(${item.price}원)`}</li>
      ))}
    </ul>
  );
}
