type InputBarProps = {
    placeholder: string;
    label: string;
    filterText: string;
    setFilterText: (value: string) => void;
  }

export default function InputBar(
  {
    placeholder,
    label,
    filterText,
    setFilterText,
  }: InputBarProps,
) {
  const id = `${label}-검색`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div className="input-bar">
      <label htmlFor={id} style={{ paddingRight: '1rem' }}>검색</label>
      <input id={id} placeholder={placeholder} value={filterText} onChange={handleChange} />
    </div>
  );
}
