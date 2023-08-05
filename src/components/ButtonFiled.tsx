import React from 'react';

type ButtonFiledProps = {
    category: string;
    setFilterButton: (value:string) => void;
}

export default function ButtonFiled({ category, setFilterButton }:ButtonFiledProps) {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.target as HTMLButtonElement;
    setFilterButton(value);
  };
  return (
    <button
      style={{ margin: '0.5rem' }}
      type="button"
      value={category}
      onClick={handleButtonClick}
    >
      {category}
    </button>
  );
}
