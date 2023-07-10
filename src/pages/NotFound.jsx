import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="h-screen bg-black text-white "
    >
      <h1 className="mb-4 text-center"> 404 Bro, you're lost</h1>
      <ul className="flex gap-4 items-center flex-wrap h-auto justify-center">
        <li className="bg-blue-400 p-2 rounded-md">
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="bg-blue-400 p-2 rounded-md">
          <Link to="/cart">
            <h1>Cart</h1>
          </Link>
        </li>
        <li className="bg-blue-400 p-2 rounded-md">
          <Link to="/signup">
            <h1>Sign up</h1>
          </Link>
        </li>
        <li className="bg-blue-400 p-2 rounded-md">
          <Link to="/login">
            <h1>Login</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NotFound;
