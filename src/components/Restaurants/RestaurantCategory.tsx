function RestaurantCategory({ categories }: {categories: string[]}) {
  return (
    <tr>
      {categories.map((category) => (
        <th key={category}>{category}</th>
      ))}
    </tr>
  );
}

export default RestaurantCategory;
