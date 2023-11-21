import CartItem from "./CartItem";
import products from "../../productData";
import "./Cart.css";
import Offcanvas from "../UI/Offcanvas";
import { useContext } from "react";
import { CartContext } from "../../Context/ProductItem";

const Cart = (props) => {
  const { items, totalAmount ,clearItem} = useContext(CartContext);
  const hasItem = items.length > 0;
  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas onClose={props.onClose}>
      <div className="cart-head">
        <h2>Sepetimm</h2>
        <a href="/" className="cart-close" onClick={props.onClose}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Değer</span>
        <span>{totalAmount}₺</span>
      </div>
      {hasItem && 
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear" onClick={clearItem}>Temizle</button>
        </div>
      }
    </Offcanvas>
  );
};

export default Cart;
