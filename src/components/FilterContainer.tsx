import CategoryContainer from './CategoryContainer';
import SearchBar from './SearchBar';

type FilterContainerProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value:string) => void;
  setFilterCategory: (value:string) => void;
}

export default function FilterContainer(
  {
    categories,
    filterText,
    setFilterText,
    setFilterCategory,
  } : FilterContainerProps,
) {
  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CategoryContainer
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
