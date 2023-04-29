type props = {
  setKeyword: (prev: string | '') => void;
};

function SearchBar({ setKeyword }: props) {
  return (
    <section>
      <div>검색</div>
      <div>
        <input type="text" onChange={(e) => setKeyword(e.target.value)} placeholder="식당 이름" />
      </div>
    </section>
  );
}

export default SearchBar;
