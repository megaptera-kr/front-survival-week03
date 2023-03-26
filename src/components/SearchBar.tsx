import { TextInput } from './TextInput';

export interface SearchBarProps {
    categories: string[];
    filterText: string;
    setFilterText: (text: string) => void;
    setFilterCategory: (text: string) => void;
}

export function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextInput
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ul style={{
        display: 'flex',
        padding: 0,
        listStyle: 'none',
      }}
      >
        {['전체', ...categories].map((c: string) => (
          <li
            key={c}
            style={{ paddingRight: '1rem' }}
          >
            <button
              type="button"
              onClick={() => { setFilterCategory(c); }}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
