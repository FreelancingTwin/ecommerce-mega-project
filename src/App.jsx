import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from './pages/Product'
import NotFound from './pages/NotFound'

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import ProctedRoutes from "./components/ProctedRoutes";

function App() {
  return (
    <Router>
      <Header className="w-screen bg-black-800" />

      <Routes>
        <Route element={<ProctedRoutes />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:productId" element={<Product />}/>
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
