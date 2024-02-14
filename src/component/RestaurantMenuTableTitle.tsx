type RestaurantMenuTableTitleProps = {
  title: string;
};

export default function RestaurantMenuTableTitle({
  title,
}: RestaurantMenuTableTitleProps) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}
