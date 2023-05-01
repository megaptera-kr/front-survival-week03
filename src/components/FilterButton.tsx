import FILTER_LIST from '../constants/constants';

type FilterType = (typeof FILTER_LIST)[number];
type props = {
  data: FilterType[];
  setFilterType: (prev: FilterType) => void;
  filterType: FilterType;
};

function FilterButton({ data, setFilterType, filterType }: props) {
  return (
    <section className="my-4">
      {Array.isArray(data)
        && data.map((item: (typeof data)[number]) => (
          <button
            className={`bg-slate-200 rounded-lg mx-4 px-2  hover:bg-violet-200 ${filterType === item ? 'bg-violet-300' : ''}`}
            type="button"
            key={item}
            onClick={() => setFilterType(item)}
          >
            {item}
          </button>
        ))}
    </section>
  );
}

export default FilterButton;
