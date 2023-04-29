type props = {
  data: false | Restaurant[];
};

function ProductRow({ data }: props) {
  return (
    <div>
      {Array.isArray(data)
        && data.map((item) => (
          <section key={item.id}>
            <div>{item.name}</div>
            <div>{item.category}</div>
          </section>
        ))}
    </div>
  );
}

export default ProductRow;
