type TextFieldProps = {
  label: string;
  placeholder: string;
  valueText: string;
  setValueText: (value: string) => void;
}

export default function TextField({
  label, placeholder, valueText, setValueText,
}: TextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValueText(value);
  };

  return (
    <div>
      <label htmlFor="search" style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="text"
        id="search"
        placeholder={placeholder}
        value={valueText}
        onChange={handleChange}
      />
    </div>
  );
}
