type FilterFieldButtonProps = {
  category: string;
  filterCategoryText: string;
  setFilterCategoryText(value: string): void;
}

export default function FilterFieldButton({
  category, filterCategoryText, setFilterCategoryText,
}: FilterFieldButtonProps) {
  const clickChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setFilterCategoryText(button.value);
  };

  return (
    <button
      type="button"
      key={category}
      value={category}
      onClick={clickChange}
      style={{
        color: filterCategoryText === category ? 'red' : 'black',
        marginRight: '1rem',
      }}
    >
      {category}
    </button>
  );
}
