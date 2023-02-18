type TextFiledProps = {
  label: string;
  placeholder: string;
  filterText: string;
  setFilterText: (value: string) => void;
}

export default function TextFiled({
  label, placeholder, filterText, setFilterText,
}: TextFiledProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label
        style={{ paddingRight: '1rem' }}
        htmlFor={`input-${label}`}
      >
        {label}
      </label>
      <input
        type="text"
        id={`input-${label}`}
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
