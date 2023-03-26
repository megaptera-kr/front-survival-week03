import { ChangeEvent } from 'react';

const MenuButtons = ['전체', '중식', '한식', '일식'];

interface ButtonProps {
    filterMenu: any;
    setFilterMenu: (value: any) => void;
}

function Button({ filterMenu, setFilterMenu }: ButtonProps) {
  const handleClick = (e: ChangeEvent<HTMLButtonElement>) => {
    const { name } = e.target;
    setFilterMenu();
  };

  return (
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      {MenuButtons.map((menuButton) => (
        <button
          type="button"
          key={menuButton}
          name={menuButton}
          style={{ marginRight: 15 }}
          onClick={handleClick}
        >
          {menuButton}
        </button>
      ))}
    </div>
  );
}

export default Button;
