type RestaurantMenuTableTitleProps = {
  title: string;
};

export default function RestaurantMenuTableTitle({
  title,
}: RestaurantMenuTableTitleProps) {
  return <h1>{title}</h1>;
}
