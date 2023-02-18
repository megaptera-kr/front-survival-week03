import Button from '../common/Button';

const CATEGORY_BUTTON_MAP = [{
  id: 10,
  label: '전체',
}, {
  id: 20,
  label: '중식',
}, {
  id: 30,
  label: '한식',
}, {
  id: 40,
  label: '일식',
}];

const buttonStyles = {
  display: 'flex',
  gap: '16px',
};

function FilterCategoryButtonGroup() {
  return (
    <div className="filter-action-button" style={buttonStyles}>
      {CATEGORY_BUTTON_MAP.map((button) => (
        <Button key={button.id} label={button.label} />
      ))}
    </div>
  );
}

export default FilterCategoryButtonGroup;
