import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../actions/productsActions";
import { addToCart } from "../actions/cartActions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from 'react-router-dom'

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const productsObj = useSelector(state => state.products);
  console.log("PRODUCTS API", productsObj);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(fetchData());
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch the products if they haven't been loaded yet
    if (productsObj.length === 0 || productsObj === undefined) {
      fetchProducts();
    }
  }, [dispatch, productsObj]);

  let product =
    productsObj && productsObj.products.filter(p => p.id === Number(productId));

  product && console.log("PRODUCT", product);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1 className="m-4 ">Product Details</h1>
      {product[0].images && (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop="true"
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          // Add more Swiper configuration options as needed
        >
          {product[0].images.map((image, idx) => (
            <SwiperSlide
              key={idx}
              className="rounded-xl flex justify-center w-screen"
            >
              <img
                src={image}
                alt={idx}
                className="object-cover m-auto rounded-lg "
              />
            </SwiperSlide>
          ))}
    
        </Swiper>
      )}
      {/* <img src={product[0].thumbnail} alt={product[0].title} /> */}
      <div className="m-4">
        <p>Title: {product[0].title}</p>
        <p>Brand: {product[0].brand}</p>
        <p>Description: {product[0].description}</p>
        <p>Price: {product[0].price}</p>
        <p>Rating: {product[0].rating}</p>
      </div>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="m-4 bg-yellow-500 p-2 rounded-full text-black-400"
      >
          <Link to="/cart">

        Add to Cart
          </Link>
      </button>
      
    </div>
  );
}

export default ProductDetails;
