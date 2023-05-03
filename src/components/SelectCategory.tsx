type SelectCategoryProps = {
  categories: string[];
  setfilterCategory: (value: string) => void;
}

export default function SelectCategory({
  categories, setfilterCategory,
}: SelectCategoryProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setfilterCategory(value);
  };

  return (
    <div className="select-category">
      <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
        {categories.map((category) => (
          <li style={{ marginRight: '1rem' }} key={category}><button type="button" value={category} onClick={handleClick}>{category}</button></li>
        ))}
      </ul>
    </div>
  );
}
