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

  return (
    <>
      <button type='button' value={text} onClick={hanleOnClick}>
        {text || '전체 '}
      </button>
    </>
  );
}
