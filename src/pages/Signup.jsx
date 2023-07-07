import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmailError("");
    setPasswordError("");
    try {
      const resp = await axios.post(
        // "http://localhost:3000/signup-post",
        "https://ecommerce-jwt-api.onrender.com/signup-post",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      // const data = await JSON.stringify({...resp})
      console.log("data", resp.data);
      console.log("jwt", resp.data.jwt);
      const jwtToken = resp.data.jwt;
      console.log("trying to set cookie...");
      Cookies.set("bond", "james bond");
      await Cookies.set("jwt", jwtToken, {secure: true, expires: 7});
      console.log("Cookies set!, navigating you to homepage");

      // window.location.href = "/";
      // const navigate = useNavigate()
      return navigate("/");
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data.errors;
      setEmailError(errorMessage.email);
      setPasswordError(errorMessage.password);
    }
  }
  return (
    <div className="min-h-[82vh] max-w-screen p-4 flex items-center justify-center flex-col">
      <div className="flex justify-center w-screen gap-20">
        <Link to="/Login">
          <h1 className="text-2xl text-gray-400 opacity-80 hover:text-white hover:opacity-100 transition-3 transition-all duration-200">
            Login
          </h1>
        </Link>
        <h1 className="text-2xl">Sign up</h1>
      </div>
      <form
        onSubmit={e => handleSubmit(e)}
        className="shadow w-fit flex flex-col justify-center items-center"
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
          Sign up
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

export default Signup;
