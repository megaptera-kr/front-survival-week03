type CategoryProps = {
  categories: string[];
  setFilterCategory: (value: string) => void;
};

export default function Category({
  categories,
  setFilterCategory,
}: CategoryProps) {
  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
        padding: 0,
      }}
    >
      {['전체', ...categories].map((category) => (
        <li key={category}>
          <button type="button" onClick={() => setFilterCategory(category)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
