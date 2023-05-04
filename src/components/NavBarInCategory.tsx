import '../App.css';

type NavBarInCategoryProps = {
    foodCategory: string[];
    setClickCategory: (value: string) => void;
}

export default function NavBarInCategory({ foodCategory, setClickCategory }
    : NavBarInCategoryProps) {
  return (
    <ul className="menuSelect">
      {foodCategory.map((category: string) => (
        <li key={category} className="menuButton">
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
