import CategoryContainer from './CategoryContainer';
import SearchBar from './SearchBar';

type FilterContainerProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value:string) => void;
  filterCategory: string;
  setFilterCategory: (value:string) => void;
}

export default function FilterContainer(
  {
    categories,
    filterText,
    setFilterText,
    filterCategory,
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
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
