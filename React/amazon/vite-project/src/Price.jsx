export default function Price({ oldPrice, newPrice }) {
  return (
    <div className="price-container">
      <span style={{ textDecoration: "line-through", marginRight: "10px" }}>
        {oldPrice}
      </span>
      <span>{newPrice}</span>
    </div>
  );
}