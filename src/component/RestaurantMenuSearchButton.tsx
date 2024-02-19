type RestaurantMenuSearchButtonProps = {
  text: string;
  category: string;
  handleButton: (value: string) => void;
};

function RestaurantMenuSearchButton({
  text,
  category,
  handleButton,
}: RestaurantMenuSearchButtonProps) {
  const hanleOnClick = () => {
    handleButton(category);
  };

  return (
    <li style={{ marginRight: '1rem' }}>
      <button type='button' value={category} onClick={hanleOnClick}>
        {text || '전체 '}
      </button>
    </li>
  );
}

export default RestaurantMenuSearchButton;
