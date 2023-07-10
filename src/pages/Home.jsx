import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/productsActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";



function Home() {
  const dispatch = useDispatch();
  const productsObject = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div
      className="p-4 bg-black text-white min-h-screen">
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
            </div>
          ))
        ) : (
          <p>loadig products...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
