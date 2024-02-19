import Field from './Field';
import CategoryButton from './CategoryButton';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setCategory: (text: string) => void;
};

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  setCategory,
}: SearchBarProps) {
  return (
    <>
      <Field filterText={filterText} setFilterText={setFilterText} />
      <CategoryButton categories={categories} setCategory={setCategory} />
    </>
  );
}
