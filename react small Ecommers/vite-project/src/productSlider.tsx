function ProductSlider(props: any) {
  return (
    <div className="product">
      {/* <span>props.span</span> */}
      <img className="image" src={props.img} />
      <div className="intro">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button>Add Cart</button>
      </div>
      <p className="price">${props.price}</p>
    </div>
  );
}

export default ProductSlider;
