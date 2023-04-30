import FilterFieldButton from './FilterFieldButton';

type FilterFieldProps = {
  categories: string[];
  filterCategoryText: string;
  setFilterCategoryText(value: string): void;
}

export default function FilterField({
  categories, filterCategoryText, setFilterCategoryText,
} : FilterFieldProps) {
  return (
    <div
      className="filter-field"
      style={{ margin: '20px 0' }}
    >
      {categories.map((category: string) => (
        <FilterFieldButton
          key={category}
          category={category}
          filterCategoryText={filterCategoryText}
          setFilterCategoryText={setFilterCategoryText}
        />
      ))}
    </div>
  );
}
