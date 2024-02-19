type FiledProps = {
  filterText: string;
  setFilterText: (value: string) => void;
};

export default function Field({ filterText, setFilterText }: FiledProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor="restaurants_name">검색</label>
      <input
        type="text"
        id="restaurants_name"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
