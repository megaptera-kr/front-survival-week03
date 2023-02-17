type FilterButtonProps = {
  category: string;
  setFilterCategory: (text: string) => void;
}

export default function FilterButton({
  category, setFilterCategory,
}: FilterButtonProps) {
  const handleClickCategory = (value: string) => {
    setFilterCategory(value);
  };

  return (
    <button type="button" onClick={() => handleClickCategory(category)}>{category}</button>
  );
}
