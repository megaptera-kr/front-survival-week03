import TextField from './TextField';

export default function Search() {
  return (
    <div>
      <TextField />

      <div style={{
        display: 'flex', flexDirection: 'row', gap: '10px', margin: '10px 0',
      }}
      >
        <button type="button">전체</button>
        <button type="button">중식</button>
        <button type="button">한식</button>
        <button type="button">일식</button>
      </div>
    </div>
  );
}
