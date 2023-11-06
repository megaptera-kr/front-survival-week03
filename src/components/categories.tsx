type CategoryProps = {
    categories: string[];
    setCategory: (category: string) => void;
}

export default function Categories({ categories, setCategory }: CategoryProps) {
  return (
    <ul className="category">
      {
        categories.map((category) => (
          <li key={category}>
            <button type="button" onClick={() => setCategory(category)}>{category}</button>
          </li>
        ))
      }
    </ul>
  );
}
