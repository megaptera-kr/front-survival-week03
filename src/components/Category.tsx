type CategoryProps = {
  category: string,
  categories: string[],
  setCategory: (value: string) => void
}

export default function Category({ category, categories, setCategory }: CategoryProps) {
  const handleCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <ul className="categories">
      {
        categories.map((cate) => (
          <li key={cate}>
            <button type="button" className={category === cate ? 'is-active' : ''} onClick={() => { handleCategory(cate); }}>{cate}</button>
          </li>
        ))
      }
    </ul>
  );
}
