import { MouseEvent } from 'react';

const Btns = ['전체', '중식', '한식', '일식'];

type ButtonsProps = {
  setFoodType: (value: string) => void;
}

function Buttons({ setFoodType }: ButtonsProps) {
  const handleClickBtn = (e: MouseEvent<HTMLElement>) => {
    const { value } = e.target as HTMLButtonElement;
    setFoodType(value);
  };

  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
      {Btns.map((btn) => (
        <li key={btn}>
          <button
            type="button"
            value={btn}
            onClick={handleClickBtn}
            style={{ marginRight: '1rem' }}
          >
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Buttons;
