import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmailError("");
    setPasswordError("");

    try {
      const response = await axios.post(
        // "http://localhost:3000/login-post",
        "https://ecommerce-jwt-api.onrender.com/login-post",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const jwtToken = response.data.jwt;
      Cookies.set("jwt", jwtToken, { expires: 7, secure: true });

      // console.log("JWT:", jwtToken);
      console.log("Cookies set");

      // Redirect or perform any necessary actions
      window.location.href = "/";
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data && error.response.data.errors) {
        const { email, password } = error.response.data.errors;
        setEmailError(email);
        setPasswordError(password);
      }
    }
  };

  return (
    <div className="min-h-[82vh] max-w-screen p-4 flex items-center justify-center flex-col">
      <div className="flex justify-center w-screen gap-20">
        <h1 className="text-2xl">Login</h1>

        <Link to="/signup">
          <h1 className="text-2xl text-gray-500 opacity-80 hover:text-white hover:opacity-100 transition-3 transition-all duration-200">
            Sign up
          </h1>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="shadow w-fit flex flex-col justify-center items-center"
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
          className="bg-teal-200 p-4 px-8 rounded-md text-center"
        >
          Login
        </button>
      </form>

      <div className="text-start ">
        <h1>Signup doesn't work? try login:</h1>
        <p>email: g@g.com</p>
        <p>password: qwertuiop</p>
      </div>
    </div>
  );
}

export default Login;
