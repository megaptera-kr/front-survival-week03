import React from 'react';

import { FilterOptions } from '../types/types';

interface FilterInputProps{
  label: string;
  placeholder: string;
  setFilterOptions : React.Dispatch<React.SetStateAction<FilterOptions>>;
}

function FilterInput({
  label, placeholder, setFilterOptions,
} : FilterInputProps) {
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilterOptions((filterOptions) => ((
      { ...filterOptions, name: value.trim() }
    )));
  };

  return (
    <div>
      <label style={{ paddingRight: '10px' }} htmlFor={label}>검색</label>
      <input
        name={label}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterInput;
