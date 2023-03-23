import ButtonArea from "./ButtonArea";
import TextField from "./TextField";

interface SearchBarProps {
  restaurantName: string;
  setRestaurantName: (value: string) => void;
  setMenuCategory: (value: string) => void;
}

export default function SearchBar({
  restaurantName,
  setRestaurantName,
  setMenuCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        restaurantName={restaurantName}
        setRestaurantName={setRestaurantName}
      />
      <ButtonArea setMenuCategory={setMenuCategory} />
    </div>
  );
}
