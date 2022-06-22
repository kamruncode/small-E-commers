import { useContext, useEffect, useState } from "react";
import { IData } from "./type/type";
import "./style.css";
import Product from "./components/product";
import { MyContext } from "./App";

export default function Shopping() {
  const { data } = useContext(MyContext);
  return (
    <div className="shop-container">
      <div>
        {data.map((s) => (
          <Product
            key={s.id}
            info={s.info}
            title={s.title}
            price={s.price}
            image={s.image}
          />
        ))}
      </div>
    </div>
  );
}
