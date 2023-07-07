import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
// console.log("CART", cart[0][0])
const flatCart = cart.flat(1);
// console.log("FLATCART",flatCart)
  return (
    <div className="h-screen m-4 flex flex-col items-center">
      {cart.length === 0 ? (
        <h1>- CART EMPTY - </h1>
      ) : (
        <ul>
          {cart.map((product, idx) => (
            <li key={product[idx].id} className="border-b border-black">
              <img src={product[idx].thumbnail} alt={product[idx].title} className="rounded-xl" />
              <h1 className="text-xl mt-4">{product[idx].title}</h1>
              <button className="m-4 bg-yellow-500 p-2 rounded-full text-black-400" onClick={() => dispatch(removeFromCart(product[idx].id))}>
                REMOVE FROM CART
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
