import CategoryContainer from './CategoryContainer';
import SearchBar from './SearchBar';

type FilterContainerProps = {
  categories: string[];
}

export default function FilterContainer(
  { categories } : FilterContainerProps,
) {
  return (
    <>
      <SearchBar />
      <CategoryContainer categories={categories} />
    </>
  );
}
