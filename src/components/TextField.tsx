import { ChangeEvent } from 'react';

interface TextFieldProps {
  label: string;
  placeholder: string;
  restaurantName: string;
  setRestaurantName: (value: string) => void;
}
export default function TextField({
  label,
  placeholder,
  restaurantName,
  setRestaurantName,
}: TextFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRestaurantName(value);
  };

  return (
    <div className="search-bar">
      <label htmlFor="search" style={{ paddingRight: '1rem' }}>
        {label}
      </label>
      <input
        id="search"
        type="text"
        value={restaurantName}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
