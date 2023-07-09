import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/productsActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "../actions/cartActions";
import { motion } from "framer-motion";
function Home() {
  const dispatch = useDispatch();
  const productsObject = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <motion.div
      className="p-4 bg-black text-white min-h-screen"
    //   initial={{ opacity: 0}}
    // animate={{ opacity: 1}}
    // exit={{ opacity: 0 }}
    >
      {/* <h1 className="text-xl mb-4">Homepage</h1> */}
      <img
        src="/sale2.png"
        alt="sale"
        className="w-screen object-cover rounded-xl mb-4 border border-white"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {productsObject && productsObject.length !== 0 ? (
          productsObject.products.map(product => (
            <div
              key={product.id}
              className="bg-green-500 rounded-lg w-fit h-fit"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-cover rounded-lg"
                />
              </Link>
              {/* <button
                onClick={() => dispatch(addToCart(product))}
                className="absolute bottom-4 right-4 bg-yellow-500 p-2 rounded-full text-black-400"
              >
                +
              </button> */}
            </div>
          ))
        ) : (
          <p>loadig products...</p>
        )}
      </div>
    </motion.div>
  );
}

export default Home;
