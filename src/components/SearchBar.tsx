import TextField from './TextField';

type SearchBarProps = {
    categories: string[];
    filterText: string;
    setFilterText: (text: string) => void;
    setFilterCategory: (text: string) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  const categoryList = ['전체', ...categories];
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      {categoryList.map((category: string) => (
        <button
          key={category}
          style={{ margin: '10px' }}
          type="button"
          onClick={() => setFilterCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
