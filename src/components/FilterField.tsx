import { Dispatch, SetStateAction } from 'react';

import { Category } from '../types';

interface FilterFieldProps {
  setFilter: Dispatch<SetStateAction<Category>>;
}

function FilterField({ setFilter }: FilterFieldProps) {
  const handleChangeFilter = (category: Category) => {
    setFilter(category);
  };

  return (
    <div style={{ display: 'flex' }}>
      <button type="button" onClick={() => handleChangeFilter('전체')}>
        전체
      </button>
      <button type="button" onClick={() => handleChangeFilter('중식')}>
        중식
      </button>
      <button type="button" onClick={() => handleChangeFilter('한식')}>
        한식
      </button>
      <button type="button" onClick={() => handleChangeFilter('일식')}>
        일식
      </button>
    </div>
  );
}

export default FilterField;
