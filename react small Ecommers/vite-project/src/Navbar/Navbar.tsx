import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="navbar-container">
        <div className="top-nav">
          <div className="top-nav-container">
            <span className="logo">SHOPPING</span>
            <p>Feel the differece</p>
            <a href="Register.html">
              <button className="login">Login --or-- Register</button>
            </a>

            <span className="material-symbols-outlined search"> search </span>
          </div>
        </div>
        <div className="main-nav-container">
          <div className="main-nav">
            <ul>
              <li className="home">
                <a href="index.html">Home</a>
              </li>
              <li>Mega Menu</li>
              <li>Drop Down</li>
              <li>About</li>
              <li>Product</li>
              <li>
                <a href="Contact.html">Contact</a>
              </li>
            </ul>
            <div className="cart-shop">
              <span className="material-symbols-outlined sc">
                {" "}
                shopping_cart{" "}
              </span>
              <p>Cart</p>
              <span className="cash">$0.00</span>
            </div>
          </div>
        </div>

        <div className="navbar-navigator-container">
          <div className="navbar-navigator">
            <div className="my-account">
              <span className="material-symbols-outlined"> person </span>
              <p>My Account</p>
            </div>
            <div className="shop-cart">
              <span className="material-symbols-outlined sc">
                {" "}
                shopping_cart{" "}
              </span>
              <p>Shopping Chart</p>
            </div>
            <div className="checkout">
              <span className="material-symbols-outlined">
                shopping_cart_checkout
              </span>
            </div>
            <p>Checkout</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
