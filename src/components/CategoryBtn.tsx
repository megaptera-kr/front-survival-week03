type CategoryBtn = {
  category: string;
}

function CategoryBtn({ category }: CategoryBtn) {
  return (
    <li style={{ marginRight: '1rem' }}>
      <button type="button">
        {category}
      </button>
    </li>
  );
}

export default CategoryBtn;
