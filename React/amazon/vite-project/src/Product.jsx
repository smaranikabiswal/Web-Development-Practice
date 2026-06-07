import "./ProductTab.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let OldPrices = ["12,495", "11,900", "1,599", "599"];
  let NewPrices = ["5,999", "7,599", "590", "239"];
  let Description = ["8000 DPI", "intuitive surface", "designed for ipad pro", "wireless"];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{Description[idx]}</p>
      <Price oldPrice={OldPrices[idx]} newPrice={NewPrices[idx]} />
    </div>
  );
}

export default Product;