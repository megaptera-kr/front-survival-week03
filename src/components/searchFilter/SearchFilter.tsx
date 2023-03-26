import Input from '../input/Input';

interface SearchFilterProps {
  searchText: string;
  categories: string[];
  onChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCategoryFilter: (ctg: string) => () => void;
}

export default function SearchFilter({
  searchText, categories, onChangeSearchText, onClickCategoryFilter,
}: SearchFilterProps) {
  return (
    <div>
      <Input
        id="search"
        label="검색"
        placeholder="식당 이름"
        value={searchText}
        onChange={onChangeSearchText}
      />
      <ul style={{ display: 'flex', columnGap: '8px', padding: 0 }}>
        {['전체', ...categories].map((ctg) => (
          <li key={ctg} style={{ listStyle: 'none' }}>
            <button type="button" onClick={onClickCategoryFilter(ctg)}>{ctg}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
