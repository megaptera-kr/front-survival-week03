import ProductMenu from './ProductMenu';

type props = {
  data: false | Restaurant[];
};

function ProductRow({ data }: props) {
  return (
    <div>
      {Array.isArray(data)
        && data.map((item) => (
          <section key={item.id} className="flex gap-8 pb-2">
            <div className="w-24">{item.name}</div>
            <div className="w-24">{item.category}</div>
            <ProductMenu menu={item.menu} />
          </section>
        ))}
    </div>
  );
}

export default ProductRow;
