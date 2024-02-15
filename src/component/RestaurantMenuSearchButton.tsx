type RestaurantMenuSearchButtonProps = {
  text: string;
  category: string;
  handleButton: (value: string) => void;
};

export default function RestaurantMenuSearchButton({
  text,
  category,
  handleButton,
}: RestaurantMenuSearchButtonProps) {
  const hanleOnClick = () => {
    category = text;
    handleButton(category);
  };

  const styleButton = {
    backgroundColor: text === category ? 'yellow' : '',
    marginRight: '1rem',
  };

  return (
    <>
      <button
        type='button'
        value={text}
        style={styleButton}
        onClick={hanleOnClick}
      >
        {text || '전체 '}
      </button>
    </>
  );
}
