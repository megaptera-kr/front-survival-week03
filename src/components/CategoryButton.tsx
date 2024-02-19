type CategoryButtonProps = {
  categories: string[];
  setCategory: (text: string) => void;
};

export default function CategoryButton({
  categories,
  setCategory,
}: CategoryButtonProps) {
  return (
    <div>
      {categories.map((category: string) => (
        <button
          type="button"
          key={category}
          onClick={() => {
            setCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
