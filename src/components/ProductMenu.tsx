type props = {
  menu: Menu[];
};

function ProductMenu({ menu }: props) {
  return (
    <ul>
      {menu && menu.map((item) => (
        <li key={item.id}>
          {`${item.name}(${item.price}원)`}
        </li>
      ))}
    </ul>
  );
}

export default ProductMenu;
