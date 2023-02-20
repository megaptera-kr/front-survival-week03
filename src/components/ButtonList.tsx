import ButtonName from './ButtonName';

type ButtonListProps = {
  categories: string[];
  setFilterButton: (value: string) => void;
}

export default function ButtonList({
  categories,
  setFilterButton,
}: ButtonListProps) {
  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
      {categories.map((category: string) => (
        <ButtonName
          key={category}
          category={category}
          setFilterButton={setFilterButton}
        />
      ))}
    </ul>
  );
}
