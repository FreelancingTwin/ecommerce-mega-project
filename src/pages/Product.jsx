import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../actions/productsActions";
import { addToCart } from "../actions/cartActions";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


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
    productsObj && productsObj.length !== 0 ? productsObj.products.filter(p => p.id === Number(productId)) : null;

  // product && console.log("PRODUCT", product);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <motion.div
    // initial={{ opacity: 0}}
    // animate={{ opacity: 1}}
    // exit={{ opacity: 0 }}
     className="bg-black text-white"
     
     >
      <h1 className="p-4">Product Details:</h1>
      {product[0].images && (
       <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
       autoHeight={true}
       spaceBetween={50}
       slidesPerView={1}
       navigation
    //    pagination={{ clickable: true, type: 'fraction' 
    //  }}
       loop={true}
      //  scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       className=""
       autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
     >
          {product[0].images.map((image, idx) => (
            <SwiperSlide
              key={idx}
              className="rounded-xl flex justify-center w-screen"
            >
              <img
                src={image}
                alt={idx}
                className="object-cover m-auto rounded-lg mb-4"
              />
            </SwiperSlide>
          ))}
    
        </Swiper>
      )}
      {/* <img src={product[0].thumbnail} alt={product[0].title} /> */}
      <div className="mx-4">
        <p className="font-black text-2xl text-center">{product[0].title}</p>
        <p><span className="opacity-70">Brand: </span>{product[0].brand}</p>
        <p><span className="opacity-70">Description: </span>{product[0].description}</p>
        <p><span className="opacity-70">Price: </span>${product[0].price}</p>
        <p><span className="opacity-70">Rating: </span> {product[0].rating}</p>
      </div>
<div className='flex justify-center p-4'>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-yellow-500 p-2 rounded-full text-black-400"
        >
          <Link to="/cart">

        Add to Cart
          </Link>
      </button>
        </div>
      
    </motion.div>
  );
}

export default ProductDetails;
