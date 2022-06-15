function SecProduct(props: any) {
  return (
    <div className="SecProduct">
      <img src={props.image} className="prod-img" />
      <span>{props.text}</span>
    </div>
  );
}

export default SecProduct;
