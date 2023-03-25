function TextField() {
  return (
    <>
      <label htmlFor="filteredMenu" style={{ marginRight: 15 }}>검색</label>
      <input id="filteredMenu" placeholder="식당 이름" />
    </>
  );
}

export default TextField;
