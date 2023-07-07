import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoutButton from "./Logout";
import Cookies from "js-cookie";

function Header() {
  const auth = Cookies.get("jwt");
  return (
    <nav className="bg-gray-500 w-screen flex justify-between items-center px-2 pl-4">
      <Link to="/">

      <h1 className="text-2xl">Header</h1>
      </Link>
      <ul className="flex justify-between items-center gap-4 p-4">
        {/* <li className="bg-blue-500 py-1 px-2 rounded-md"> <Link to="/">Home</Link></li> */}
        <li className="bg-blue-500 py-1 px-4 rounded-md flex align-center text-3xl">
          {" "}
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </li>

        {auth && (
          <li className="bg-red-400 px-4 py-1 rounded-md">
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
