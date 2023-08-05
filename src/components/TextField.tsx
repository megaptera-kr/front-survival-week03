type TextFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  searchText: string;
  setSearchText: (value: string) => void;
};

export default function TextField({
  id,
  label,
  searchText,
  placeholder,
  setSearchText,
}: TextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
  };

  return (
    <div>
      <label
        htmlFor={id}
        style={{ paddingRight: '1rem' }}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}
