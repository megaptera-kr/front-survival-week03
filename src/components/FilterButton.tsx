type FilterButtonProps = {
  category: string;
}

export default function FilterButton({ category }: FilterButtonProps) {
  const handleClickCategory = () => {
    //
  };

  return (
    <button type="button" onClick={handleClickCategory}>{category}</button>
  );
}
