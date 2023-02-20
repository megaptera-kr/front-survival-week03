type CategoryProps = {
  category : string;
  setSelectedCategory: (value: string)=> void;
}

export default function Category({
  category,
  setSelectedCategory,
}: CategoryProps) {
  return (
    <li style={{ marginRight: '1rem' }}>
      <button
        type="button"
        onClick={() => { setSelectedCategory(category); }}
      >
        {category}
      </button>
    </li>
  );
}
