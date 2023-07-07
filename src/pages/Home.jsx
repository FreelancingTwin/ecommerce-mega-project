import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/productsActions";
import {Link } from 'react-router-dom'
import { useEffect } from "react";
import { addToCart } from "../actions/cartActions";

function Home() {
  const dispatch = useDispatch();
  const productsObject = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Homepage</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {productsObject && productsObject.length !== 0 ? (
          productsObject.products.map(product => (
            <div key={product.id} className="bg-green-500 rounded-lg w-fit h-fit">
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
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
