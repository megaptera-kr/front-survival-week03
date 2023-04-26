type CategoryButtonProps = {
  category: string;
  setSelectCategory: (value:string) => void;
}
export default function CategoryButton({
  category, setSelectCategory,
}:CategoryButtonProps) {
  return (
    <li style={{ marginRight: '1rem' }}>
      <button
        type="button"
        onClick={() => setSelectCategory(category)}
      >
        {category}
      </button>
    </li>
  );
}
