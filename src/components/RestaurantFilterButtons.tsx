import FilterButton from './FilterButton';

type RestaurantFilterButtonsProps = {
  categories: string[];
  setFilterCategory: (category: string) => void;
};

export default function RestaurantFilterButtons({
  categories,
  setFilterCategory,
}: RestaurantFilterButtonsProps) {
  const handleFilterButton = (category: string) => setFilterCategory(category);

  return (
    <div>
      {categories.map((name) => (
        <FilterButton
          key={`${name}`}
          label={name}
          onClick={() => handleFilterButton(name)}
        />
      ))}
    </div>
  );
}
