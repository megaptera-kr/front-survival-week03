type ButtonProps = {
  buttonLabel: string;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
};

export default function FilterButton({
  buttonLabel,
  filterCategory,
  setFilterCategory,
}: ButtonProps) {
  const handleClick = () => {
    setFilterCategory(buttonLabel);
  };

  return (
    <li style={{ paddingRight: '1rem' }}>
      <button type="button" value={filterCategory} onClick={handleClick}>
        {buttonLabel}
      </button>
    </li>
  );
}
