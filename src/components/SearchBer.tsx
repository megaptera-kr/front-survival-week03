import { ChangeEvent } from 'react';

type SearchBarProps = {
  restaurantName: string;
  setSearchBer: (name: string) => void;
};

export default function SearchBar({
  restaurantName,
  setSearchBer,
}: SearchBarProps) {
  const handleChangeRestaurantName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchBer(value.trim());
  };

  return (
    <div>
      <label htmlFor="restaurantName">검색</label>
      <input
        type="text"
        id="restaurantName"
        value={restaurantName}
        onChange={handleChangeRestaurantName}
        placeholder="식당 이름"
      />
    </div>
  );
}
