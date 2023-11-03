import React from 'react';

type TextFieldrops = {
    query : string,
    setQuery : React.Dispatch<React.SetStateAction<string>>;
}

function TextField({ query, setQuery } : TextFieldrops) {
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div style={{
      marginBottom: '20px',
    }}
    >
      <label style={{ marginRight: '18px' }} htmlFor="search">검색</label>
      <input id="search" value={query} onChange={handleChange} placeholder="식당 이름" />
    </div>
  );
}

export default TextField;
