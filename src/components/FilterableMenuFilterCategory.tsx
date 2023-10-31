import CategoryList from '../constants/CategoryList';
import CategoryType from '../types/categoryType';

type FilterableMenuFilterCategory = {
  handleClickFilterCategory: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilterableMenuFilterCategory({
  handleClickFilterCategory,
}: FilterableMenuFilterCategory) {
  return (
    <ul
      style={{
        display: 'flex',
        padding: 0,
        listStyle: 'none',
        gap: '16px',
      }}
    >
      {CategoryList.map((item) => (
        <li key={item}>
          <button
            type="button"
            value={item}
            onClick={handleClickFilterCategory}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
