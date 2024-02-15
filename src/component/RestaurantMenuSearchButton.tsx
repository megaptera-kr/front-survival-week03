type RestaurantMenuSearchButtonProps = {
  text: string;
};

export default function RestaurantMenuSearchButton({
  text,
}: RestaurantMenuSearchButtonProps) {
  return (
    <>
      <button type='button'>{text}</button>
    </>
  );
}
