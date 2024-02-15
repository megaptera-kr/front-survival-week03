type RestaurantMenuTextFieldProps = {
  placeholder: string;
  searchText: string;
  handleSearchText: (value: string) => void;
};

export default function RestaurantMenuTextField({
  placeholder,
  searchText,
  handleSearchText,
}: RestaurantMenuTextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleSearchText(value);
  };

  return (
    <>
      <label htmlFor='input-menu-search'>검색</label>
      <input
        type='text'
        id='input-menu-search'
        placeholder={placeholder}
        value={searchText}
        onChange={handleChange}
      />
    </>
  );
}
