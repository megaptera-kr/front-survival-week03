type CategoryBtn = {
  category: string;
  setSelectedCategory: (value: string) => void;
}

function CategoryBtn({
  category, setSelectedCategory,
}: CategoryBtn) {
  const handleClick = () => {
    setSelectedCategory(category);
  };

  return (
    <li style={{ marginRight: '1rem' }}>
      <button
        type="button"
        onClick={handleClick}
      >
        {category}
      </button>
    </li>
  );
}

export default CategoryBtn;
