import TextFiled from './TextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextFiled
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          padding: 0,
        }}
      >
        {['전체', ...categories].map((category) => (
          <li
            key={category}
            style={{
              paddingRight: '1rem',
            }}
          >
            <button
              type="button"
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
