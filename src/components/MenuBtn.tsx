type MenuBtnType = {
  categories: string[],
  setFilterCategories: (text: string) => void,
}

export default function MenuBtn({ categories, setFilterCategories }:MenuBtnType) {
  return (
    <div>
      {['전체', ...categories].map((category: string) => (
        <button
          key={category}
          type="button"
          onClick={() => setFilterCategories(category)}
        >
          {category}
        </button>
      ))}
      <input type="checkbox" id="only-stock" />
      <label htmlFor="only-stock">
        Only show products in stock
      </label>
    </div>
  );
}
