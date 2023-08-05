import React from 'react';

type InputFiledProps ={
    placeholder: string;
    filterText: string;
    setFilterText: (value:string) => void;
}

export default function InputFiled({ placeholder, filterText, setFilterText }:InputFiledProps) {
  const handleTextFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div>
      <label htmlFor="input" style={{ margin: '10px' }}>검색</label>
      <input
        id="input"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleTextFilterChange}
      />
    </div>
  );
}
