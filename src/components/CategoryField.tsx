import FilterButton from './FilterButton';

type CategoryFieldProps = {
  categories: string[];
  filterCategory: string;
  setFilterCategory: (value: string) => void;
};

export default function CategoryField({
  categories,
  filterCategory,
  setFilterCategory,
}: CategoryFieldProps) {
  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: '0px' }}>
      {categories.map((category) => (
        <FilterButton
          buttonLabel={category}
          key={category}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
