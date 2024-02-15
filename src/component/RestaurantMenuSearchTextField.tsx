type RestaurantMenuTextFieldProps = {
  placeholder: string;
  textField: string;
  handleTextField: (value: string) => void;
};

export default function RestaurantMenuTextField({
  placeholder,
  textField,
  handleTextField,
}: RestaurantMenuTextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleTextField(value);
  };

  return (
    <>
      <label htmlFor='input-menu-search'>검색</label>
      <input
        type='text'
        id='input-menu-search'
        placeholder={placeholder}
        value={textField}
        onChange={handleChange}
      />
    </>
  );
}
