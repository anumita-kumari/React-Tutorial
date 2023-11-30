import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClick}
      >
        Clear Cart
      </button>
      {cartItems?.length === 0 && (
        <h1>Cart is empty. Please add any item to proceed further.</h1>
      )}

      {cartItems.map((item) => (
        <ItemList key="item.itemDetail?.card?.info?.id" itemDetail={item} />
      ))}
    </div>
  );
};
export default Cart;
