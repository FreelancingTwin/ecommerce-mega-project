import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(REMOVE_FROM_CART())
  }, [cart]);

  const flatCart = cart.flat(1);
  console.log("FLATCART", flatCart);

  return (
    <motion.div
      className="text-white bg-black h-auto min-h-[65vh]  p-4"
    //   initial={{ opacity: 0, background: 'black'}}
    // animate={{ opacity: 1, background: "black"}}
    // exit={{ opacity: 0 }}
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
                {/* {product[0].images ? (
                  product[0].images.map(image => (
                    <img src={image} key={idx * 23} />
                  ))
                ) : (
                  <img src={product.thumbnail} className="rounded-xl" />
                )} */}
                <img src={product.thumbnail} className="rounded-xl h-56" />
                <h1 className="text-xl mt-4 font-black text-center ">
                  {product.title}
                </h1>
                {/* <h1 className="text-xl mt-4">{product.description}</h1> */}
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
    </motion.div>
  );
}

export default Cart;
