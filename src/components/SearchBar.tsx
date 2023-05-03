import SearchBoxField from './SearchBoxField';
import ButtonBoxField from './ButtonBoxField';

type SearchBarProps={
  filterText : string,
  setFilterText : (value:string)=>void
  category : string,
  setCategory : (value : string) => void
}
export default function SearchBar({
  filterText, setFilterText, category, setCategory,
}: SearchBarProps) {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchBoxField filterText={filterText} setFilterText={setFilterText} />
      <ButtonBoxField category={category} setCategory={setCategory} />
    </>
  );
}
