import { MouseEvent } from 'react';

type CategoryButtonProps = {
  category : string;
  setFilterCategory: (value:string) => void;
}
export default function CategoryButton(
  {
    category,
    setFilterCategory,
  } : CategoryButtonProps,
) {
  const handleCategoryClick = (e : MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setFilterCategory(value);
  };

  return (
    <li>
      <button
        type="button"
        value={category}
        onClick={handleCategoryClick}
        style={{ marginRight: '1rem' }}
      >
        {category}
      </button>
    </li>
  );
}
