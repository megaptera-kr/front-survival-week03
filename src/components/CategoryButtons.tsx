import React from 'react';
import { Category } from '../types/Restaurants';

const categories : Array<{id : string, name :Category}> = [
  { id: 'all', name: '전체' },
  { id: 'chinese', name: '중식' },
  { id: 'korea', name: '한식' },
  { id: 'japanese', name: '일식' },
];

type CategoryButtonsProps = {
    setCategory : React.Dispatch<React.SetStateAction<Category>>;
}

function CategoryButtons({ setCategory } : CategoryButtonsProps) {
  const handleClick = (filterCategory : Category) => {
    setCategory(filterCategory);
  };

  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      marginBottom: '20px',
    }}
    >
      {categories.map(({ id, name }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
