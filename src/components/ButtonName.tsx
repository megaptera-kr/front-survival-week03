type ButtonNameProps = {
  category: string;
  setFilterButton: (value: string) => void;
}

export default function ButtonName({
  category,
  setFilterButton,
}: ButtonNameProps) {
  const handleClick = () => {
    setFilterButton(category);
  };
  return (
    <li style={{ marginRight: '1rem' }}>
      <button type="button" onClick={handleClick}>
        {category}
      </button>
    </li>
  );
}
