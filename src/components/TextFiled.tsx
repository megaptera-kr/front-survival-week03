import React from 'react';

type TextFiledProps = {
    filterText: string;
    setFilterText: (value:string) => void;
    placeholder: string;
}

export default function TextFiled({ filterText, setFilterText, placeholder } :TextFiledProps) {
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
