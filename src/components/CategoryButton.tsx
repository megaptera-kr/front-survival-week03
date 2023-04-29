type CategoryButtonProps = {
  category : string;
}
export default function CategoryButton(
  { category } : CategoryButtonProps,
) {
  const handleClick = () => {
    console.log(`${category} clicked`);
  };

  return (
    <li><button type="button" onClick={handleClick}>{category}</button></li>
  );
}
