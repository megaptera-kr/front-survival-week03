export default function CategorySelectBar(
  {
    setFilterCate,
  }: {
    setFilterCate: React.Dispatch<React.SetStateAction<string>>
  },
) {
  const handleFilterCate = function handleFilterCate(filterCateText: string) {
    setFilterCate(filterCateText);
  };
  return (
    <div>
      <button
        type="button"
        style={{
          margin: '10px',
        }}
        onClick={() => handleFilterCate('')}
      >
        전체
      </button>
      <button
        type="button"
        style={{
          margin: '10px',
        }}
        onClick={() => handleFilterCate('중식')}
      >
        중식
      </button>
      <button
        type="button"
        style={{
          margin: '10px',
        }}
        onClick={() => handleFilterCate('한식')}
      >
        한식
      </button>
      <button
        type="button"
        style={{
          margin: '10px',
        }}
        onClick={() => handleFilterCate('일식')}
      >
        일식
      </button>
    </div>
  );
}
