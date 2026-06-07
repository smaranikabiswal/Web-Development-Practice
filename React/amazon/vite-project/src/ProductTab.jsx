import Product from "./Product.jsx";

function ProductTab() {
  return (
    <div className="ProductTab">
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd gen)" idx={1} />
      <Product title="Zebronics Zeb-transformer" idx={2} />
      <Product title="Petronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;