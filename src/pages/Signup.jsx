import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
function Signup() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signupButtonText, setSignupButtonText] = useState("Sign up");

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmailError("");
    setPasswordError("");
    setSignupButtonText(<AiOutlineLoading3Quarters className="animate-spin" />);

    try {
      await axios.post(
        // "http://localhost:3000/signup-post",
        "https://ecommerce-jwt-api.onrender.com/signup-post",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      return navigate("/login");
    } catch (error) {
      console.log(error.response.data.errors);
      const errorMessage = error.response.data.errors;

      setEmailError(errorMessage.email);
      setPasswordError(errorMessage.password);
      if (errorMessage.email === "") {
        setEmailError("Check email");
      }
      if (errorMessage.password === "") {
        setPasswordError("Check password");
      }
    } finally {
      setSignupButtonText("Sign up");
    }
  }
  return (
    <div
    // initial={{ opacity: 0}}
    // animate={{ opacity: 1}}
    // exit={{ opacity: 0 }}
      className="min-h-[70vh] max-w-screen p-4 flex items-center justify-center flex-col bg-black"
    >
      <div className="flex justify-center w-screen gap-20">
        <Link to="/Login">
          <h1 className="text-2xl text-gray-400 opacity-80 hover:text-white hover:opacity-100 transition-3 transition-all duration-200">
            Login
          </h1>
        </Link>
        <h1 className="text-2xl text-white">Sign up</h1>
      </div>
      <form
        onSubmit={e => handleSubmit(e)}
        className="w-fit flex flex-col justify-center items-center"
      >
        <input
          type="email"
          name="email"
          placeholder="email"
          className="rounded-md p-3 my-3"
        />
        <div className="text-red-500">{emailError}</div>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="rounded-md p-3 my-3 mt-0"
        />
        <div className="text-red-500">{passwordError}</div>
        <button
          type="submit"
          className="bg-blue-400 p-4 px-8 rounded-md text-center"
        >
          {signupButtonText}
        </button>
      </form>
      <div className="text-start ">
        <h1>Signup doesn't work? try login:</h1>
        <p>email: g@g.com</p>
        <p>password: qwertyuiop</p>
      </div>

      <div>
        <p className="text-white italic text-sm mt-3">
          *Free server by render, sometimes takes upto 15 seconds to fire up for
          the first time and Sign you up. Thanks for being patient.
        </p>
      </div>
    </div>
  );
}

export default Signup;
