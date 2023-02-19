import Button from '../common/Button';

const CATEGORY_BUTTON_MAP = [{
  id: 10,
  value: '0',
  label: '전체',

}, {
  id: 20,
  value: '1',
  label: '중식',
}, {
  id: 30,
  value: '2',
  label: '한식',
}, {
  id: 40,
  value: '3',
  label: '일식',
}];

const buttonStyles = {
  display: 'flex',
  gap: '16px',
  padding: '16px 0',
};

export type TFilterButtonProps = {
  onClickFilterButton: (payload: string) => void
}

function FilterCategoryButtonGroup({ onClickFilterButton }: TFilterButtonProps) {
  return (
    <div className="filter-action-button" style={buttonStyles}>
      {CATEGORY_BUTTON_MAP.map((button) => (
        <Button
          key={button.id}
          label={button.label}
          onClick={() => onClickFilterButton(button.value)}
        />
      ))}
    </div>
  );
}

export default FilterCategoryButtonGroup;
