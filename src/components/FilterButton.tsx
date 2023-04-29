import FILTER_LIST from '../constants/constants';

type FilterType = (typeof FILTER_LIST)[number];
type props = {
  data: FilterType[];
  setFilterType: (prev: FilterType) => void;
};

function FilterButton({ data, setFilterType }: props) {
  return (
    <section>
      {Array.isArray(data)
        && data.map((item: (typeof data)[number]) => (
          <button type="button" key={item} onClick={() => setFilterType(item)}>
            {item}
          </button>
        ))}
    </section>
  );
}

export default FilterButton;
