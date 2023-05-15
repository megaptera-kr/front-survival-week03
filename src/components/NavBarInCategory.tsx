type NavBarInCategoryProps = {
    foodCategory: string[];
    setClickCategory: (value: string) => void;
}

export default function NavBarInCategory({ foodCategory, setClickCategory }
    : NavBarInCategoryProps) {
  return (
    <ul style={{
      display: 'flex',
      padding: 0,
      listStyle: 'none',
    }}
    >
      {foodCategory.map((category: string) => (
        <li
          key={category}
          style={{
            marginRight: '1rem',
          }}
        >
          <button
            type="button"
            onClick={() => { setClickCategory(category); }}
          >
            {category}
          </button>

        </li>
      ))}
    </ul>
  );
}
