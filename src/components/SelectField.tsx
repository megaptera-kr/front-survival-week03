import selectCategory from '../utils/selectCategory';

type SelectFieldProps = {
  setCategory: (value:string) => void;
  selectCategories: string[];
}

export default function SelectField({ setCategory, selectCategories } : SelectFieldProps) {
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setCategory(value);
  };

  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
      {
        selectCategories.map((_category) => (
          <li key={_category} style={{ marginLeft: '10px' }}>
            <button type="button" value={_category} onClick={handleClick}>{_category}</button>
          </li>
        ))
      }
    </ul>
  );
}
