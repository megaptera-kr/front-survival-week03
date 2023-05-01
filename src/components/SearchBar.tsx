type props = {
  setKeyword: (prev: string | '') => void;
};

function SearchBar({ setKeyword }: props) {
  return (
    <section className="flex gap-4">
      <div>검색</div>
      <div>
        <input
          className="border-solid border border-slate-600"
          type="text"
          name="검색"
          onChange={(e) => setKeyword(e.target.value.trim())}
          placeholder="식당 이름"
        />
      </div>
    </section>
  );
}

export default SearchBar;
