import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { useEffect } from "react";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();


  const flatCart = cart.flat(1);
  console.log("FLATCART", flatCart);

  return (
    <div
      className="text-white bg-black h-auto min-h-[65vh]  p-4"
   
    >
      <h1 className="py-4 font-black text-xl">CART:</h1>
      {flatCart && flatCart.length === 0 ? (
        <h1>- CART EMPTY - </h1>
      ) : (
        <ul className="flex flex-wrap justify-center md:justify-evenly ">
          {flatCart &&
            flatCart.map(product => (
              <li
                key={product.id}
                className="border-b border-black mb-4 flex flex-col items-center"
              >
                <img src={product.thumbnail} className="rounded-xl h-56" />
                <h1 className="text-xl mt-4 font-black text-center ">
                  {product.title}
                </h1>
                
                <h1 className="text-xl mt-4">${product.price}</h1>
                <div className="flex justify-center p-4">
                  <button
                    className="bg-orange-500 p-2 rounded-full text-black-400"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    REMOVE FROM CART
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
