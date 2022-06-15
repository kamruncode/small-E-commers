import "./App.css";

import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import SecProduct from "./secProducts/secProduct";
import ProductSlider from "./productSlider";
import "./App.css";
import img1 from "./images/cap/cap.jpg";
import img2 from "./images/jacket/jacket.jpg";
import img3 from "./images/snickers/snickers.jpg";
import img4 from "./images/trousers/trousers.jpg";
import img5 from "./images/clock/clock.jpg";
import img6 from "./images/cap/cap2.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="slider-container">
        <div className="arrows">
          <span className="material-symbols-outlined arrow prev">
            keyboard_double_arrow_up
          </span>
          <span className="material-symbols-outlined arrow next">
            keyboard_double_arrow_down
          </span>
        </div>

        <div className="slider-bar">
          <div className="sliders">
            <ProductSlider
              img={img1}
              title="Cap"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Amet similique veniam atque numquam eaque ipsa, deserunt nihil
 quae mollitia distinctio plac ducimus beatae adipisci debitis"
              price="155"
            />
            <ProductSlider
              img={img2}
              title="Cap"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Amet similique veniam atque numquam eaque ipsa, deserunt nihil
 quae mollitia distinctio plac ducimus beatae adipisci debitis"
              price="134"
            />
            <ProductSlider
              img={img3}
              title="Cap"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Amet similique veniam atque numquam eaque ipsa, deserunt nihil
 quae mollitia distinctio plac ducimus beatae adipisci debitis"
              price="132"
            />
            <ProductSlider
              img={img4}
              title="Cap"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Amet similique veniam atque numquam eaque ipsa, deserunt nihil
 quae mollitia distinctio plac ducimus beatae adipisci debitis"
              price="239"
            />
          </div>
        </div>
      </div>

      <div className="Featured-Products">
        <p>Featured Products</p>
        <div className="secSlider-bar">
          <div className="secsliders">
            <SecProduct
              image={img1}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio quis
         "
            />
            <SecProduct
              image={img2}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio quis"
            />
            <SecProduct
              image={img3}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio quis"
            />
            <SecProduct
              image={img4}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio quis"
            />
            <SecProduct
              image={img5}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio quis"
            />
            <SecProduct
              image={img6}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus distinctio quis"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
