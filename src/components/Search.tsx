import TextField from './TextField';

type SearchProps = {
  valueText: string;
  setValueText: (text: string) => void;
  categories: string[];
  setSelectCategory: (text: string) => void;
}

export default function Search({
  valueText, setValueText, categories, setSelectCategory,
}: SearchProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        valueText={valueText}
        setValueText={setValueText}
      />

      <div style={{
        display: 'flex', flexDirection: 'row', gap: '10px', margin: '10px 0',
      }}
      >
        {['전체', ...categories].map((category: string) => (
          <button
            type="button"
            key={category}
            onClick={() => setSelectCategory(category)}
          >
            {category}
          </button>

        ))}
      </div>
    </div>
  );
}
