import React from 'react';

import { FilterOptions } from '../types/types';

interface FilterButtonGroupProps{
  setFilterOptions : React.Dispatch<React.SetStateAction<FilterOptions>>
}

function FilterButtonGroup({ setFilterOptions } : FilterButtonGroupProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.innerText;

    setFilterOptions((filterOptions) => (
      { ...filterOptions, category }
    ));
  };

  return (
    <ul style={{
      listStyle: 'none',
      width: '200px',
      padding: '0',
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <li><button type="button" onClick={handleClick}>전체</button></li>
      <li><button type="button" onClick={handleClick}>중식</button></li>
      <li><button type="button" onClick={handleClick}>한식</button></li>
      <li><button type="button" onClick={handleClick}>일식</button></li>
    </ul>
  );
}

export default FilterButtonGroup;
