import { ChangeEvent } from "react";

interface TextFieldProps {
  restaurantName: string;
  setRestaurantName: (value: string) => void;
}
export default function TextField({
  restaurantName,
  setRestaurantName,
}: TextFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRestaurantName(value);
  };
  return (
    <div className="search-bar">
      <label htmlFor="search">검색</label>
      <input
        id="search"
        type="text"
        value={restaurantName}
        placeholder="식당이름"
        onChange={handleChange}
      />
    </div>
  );
}
