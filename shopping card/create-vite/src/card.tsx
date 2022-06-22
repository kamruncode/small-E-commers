import { useContext } from "react";
import { MyContext } from "./App";
import "./style.css";

export default function Card() {
  const { card } = useContext(MyContext);

  return (
    <div className="card-container">
      {/* {card.map((s) => {
        <div>{s.title}</div>;
      })} */}
    </div>
  );
}
