export default function TextField() {
  return (
    <div>
      <label htmlFor="search" style={{ marginRight: '10px' }}>검색</label>
      <input type="text" id="search" placeholder="식당 이름" />
    </div>
  );
}
