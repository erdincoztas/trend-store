import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartContext } from "../../Context/ProductItem";

const HeaderCartButton = ({ onShowCart }) => {
  const CartCnt = useContext(CartContext);

  const totalItemInCart = CartCnt.items.reduce((acumator, item) => {
    return acumator + item.amount;
  },0);

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItemInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
