import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJwt } from "../actions/authActions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {motion} from 'framer-motion'


function Login() {
  const [loginButtonText, setLoginButtonText] = useState("Login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const authState = useSelector(state => state.auth);
  const authState = Cookies.get('jwt')
  console.log('AUTHSTATE', authState)

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmailError("");
    setPasswordError("");
    setIsLoading(true);
    setLoginButtonText(<AiOutlineLoading3Quarters className="animate-spin" />);

    try {
      const response = await axios.post(
        // "http://localhost:3000/login-post",
        "https://ecommerce-jwt-api.onrender.com/login-post",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const jwtToken = response.data.jwt;
      dispatch(addJwt(jwtToken));
      console.log("LOGIN");
      Cookies.set("jwt", jwtToken, { expires: 7, secure: true});

      // console.log("JWT:", jwtToken);
      console.log("Cookies set");

      // Redirect or perform any necessary actions
      // window.location.href = "/";
      navigate("/");
      // navigate("/", {replace: true});
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data && error.response.data.errors) {
        const { email, password } = error.response.data.errors;
        setEmailError(email);
        setPasswordError(password);
      }
    } finally {
      setLoginButtonText("Login");
      setIsLoading(false);
    }
  };


  return (

    <motion.div className="min-h-[70vh] max-w-screen p-4 flex items-center justify-center flex-col bg-black text-balck" 
    // initial={{ opacity: 0}}
    // animate={{ opacity: 1}}
    // exit={{ opacity: 0 }}
    >
      <div className="flex justify-center w-screen gap-20">
        <h1 className="text-2xl text-white">Login</h1>

        <Link to="/signup">
          <h1 className="text-2xl text-gray-500 opacity-80 hover:text-white hover:opacity-100 transition-3 transition-all duration-200">
            Sign up
          </h1>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-fit flex flex-col justify-center items-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-md p-3 my-3"
        />
        <div className="text-red-500">{emailError}</div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-md p-3 my-3 mt-0"
        />
        <div className="text-red-500">{passwordError}</div>
        <button
          type="submit"
          className="bg-teal-200 p-4 px-8 rounded-md text-center text-black mb-3"
        >
          {loginButtonText}
        </button>
      </form>

      {/* <div className="text-start mt-2">
        <h1>Signup doesn't work? try login:</h1>
        <p>email: g@g.com</p>
        <p>password: qwertyuiop</p>
      </div> */}
      <div>
        <p className="text-white text-sm italic">*Free server by render, sometimes takes upto 15 seconds to fire up for the first time and log you in. Thanks for being patient.</p>
      </div>
    </motion.div>
    
  );
}

export default Login;
