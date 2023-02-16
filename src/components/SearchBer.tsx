type SearchBerProps = {
    searchBer: string;
    setSearchBer: (value: string) => void;
};
export default function SearchBer({ searchBer, setSearchBer }: SearchBerProps) {
    return (
        <div>
            <label htmlFor="searchBer">검색</label>
            <input
                type="text"
                name="검색"
                placeholder="식당 이름"
                value={searchBer}
                onChange={(e) => setSearchBer(e.target.value)}
            />
        </div>
    );
}
