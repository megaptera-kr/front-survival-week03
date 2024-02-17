interface SearchInputProps {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ handleFilterChange }: SearchInputProps) {
  return (
    <label style={{ display: 'flex', gap: '1rem' }}>
      <p>검색</p>
      <input type="text" maxLength={20} placeholder="식당 이름을 검색하세요" onChange={(e) => handleFilterChange(e)} />
    </label>
  );
}
