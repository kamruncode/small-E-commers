import { useContext } from "react";
import { MyContext } from "../App";
import { IData } from "../type/type";
import "./style.css";

export default function Product(p: any) {
  const { card, setCard } = useContext(MyContext);

  // function click(id: any) {
  //   setCard([...card, p]);
  // }

  return (
    <div className="product-container">
      <img src={p.image} />
      <div className="product-info">
        <span className="product-header">
          <h3>{p.title}</h3>
          <div className="price">{p.price}$</div>
        </span>
        <p>{p.info}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
