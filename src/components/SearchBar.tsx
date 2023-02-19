import SearchInput from './SearchInput';

type PropTypes = {
    onChange: (val: string) => void;
}

export default function SearchBar({ onChange }: PropTypes) {
  return (
    <div>
      <SearchInput onChange={onChange} />
    </div>
  );
}
