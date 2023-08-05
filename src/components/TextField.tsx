import { ChangeEvent } from 'react';

type TextFieldProps = {
  query: string;
  setQuery: (value: string) => void;
}

function TextField({ query, setQuery }: TextFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div>
      <label htmlFor="input" style={{ paddingRight: '1rem' }}>검색</label>
      <input
        id="input"
        type="text"
        placeholder="식당 이름"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
