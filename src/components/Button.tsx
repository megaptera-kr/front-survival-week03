import React from 'react';

const MenuButtons = ['전체', '중식', '한식', '일식'];

interface ButtonProps {
    filterCategory: string;
    setFilterCategory: (value: string) => void;
}

function Button({ filterCategory, setFilterCategory }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target;
    setFilterCategory(name);
  };

  return (
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      {MenuButtons.map((menuButton) => (
        <button
          type="button"
          key={menuButton}
          name={menuButton}
          style={{ marginRight: 15 }}
          value={filterCategory}
          onClick={handleClick}
        >
          {menuButton}
        </button>
      ))}
    </div>
  );
}

export default Button;
