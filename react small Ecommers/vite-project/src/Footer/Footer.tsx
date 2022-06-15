import "./footer.css";
import t from "../images/twitter.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="Twitter-u">
          <span className="title">Twitter Updates</span>
          <p>
            Check out this great #themeforest item for you 'Simpler Landing'
            http://t.co/LbLwldb6
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            dolor incidunt earum reiciendis .
          </p>
          <button>
            <img src={t} />
            Follow us on twitter
          </button>
        </div>
        <div className="Newsletter-S">
          <span className="title">Newsletter Signup</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aut at
            nostrum provident labore doloremque quam quos porro placeat earum,
            voluptas sequi id, fuga eos odit sunt, assumenda necessitatibus
            debitis.
          </p>
          <form>
            <p>Your Email address</p>
            <input type="email" placeholder="Enter email" />
            <button>Sign up</button>
          </form>
        </div>
        <div className="shopping">
          <span className="title">Shopping</span>
          <div className="shops">
            <span className="material-symbols-outlined"> phone_in_talk </span>
            <p>+387 123 456, +387 123 456, +387 123 456</p>
          </div>
          <div className="shops">
            <span className="material-symbols-outlined"> phone_android </span>
            <p>+387-123-456-1, +387-123-456-2</p>
          </div>
          <div className="shops">
            <span className="material-symbols-outlined a"> drafts </span>
            <p>your@email.com, customer.care@mail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bootom">
        <div className="navigator-footer"></div>
        <div className="social-nw"></div>
      </div>
    </div>
  );
}

export default Footer;
