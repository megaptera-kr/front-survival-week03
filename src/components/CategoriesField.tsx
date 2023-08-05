type CategoriesFieldProps = {
  categories: string[];
  handleClickCategory: (category: string) => void;
}

export default function CategoriesField({
  categories,
  handleClickCategory,
}: CategoriesFieldProps) {
  return (
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        padding: 0,
      }}
    >
      {
        categories.map((category) => (
          <li
            key={category}
            style={{
              marginRight: '1rem',
            }}
          >
            <button
              type="button"
              onClick={() => handleClickCategory(category)}
            >
              {category}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
