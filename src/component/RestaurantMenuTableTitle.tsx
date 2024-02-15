type RestaurantMenuTableTitleProps = {
  title: string;
};

function RestaurantMenuTableTitle({ title }: RestaurantMenuTableTitleProps) {
  return <h1>{title}</h1>;
}

export default RestaurantMenuTableTitle;
