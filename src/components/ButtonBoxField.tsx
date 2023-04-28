type ButtonBoxFieldProps = {
  category : string,
  setCategory : (value : string) => void

}

export default function ButtonBoxField({ category, setCategory }: ButtonBoxFieldProps) {
  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLButtonElement;
    setCategory(id);
  };
  return (
    <div>
      <button type="button" id="전체" onClick={handleCategory}>전체</button>
      <button type="button" id="중식" onClick={handleCategory}>중식</button>
      <button type="button" id="한식" onClick={handleCategory}>한식</button>
      <button type="button" id="일식" onClick={handleCategory}>일식</button>
    </div>
  );
}
