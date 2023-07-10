import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoutButton from "./Logout";
import Cookies from "js-cookie";
import {useDispatch, useSelector} from 'react-redux'
function Header() {
  const dispatch = useDispatch()
  const authState = Cookies.get('jwt')
  return (
    <nav className="bg-black w-screen flex justify-between items-center p-4 ">
      <Link to="/">

      <div className="flex justify-center">

      <img src="/vite.svg" alt="logo" className="max-h-fill"/>
      <h1 className="ml-1 italic flex items-center font-black text-xl text-white rounded-md">ThunderTech</h1>
      </div>
      </Link>
     {authState.length > 0 ? (<ul className="flex justify-between items-center gap-4 py-4">
        <li className="py-1 rounded-md flex align-center text-3xl text-white">
          
          <Link to="/cart">
            <AiOutlineShoppingCart className="rounded-md hover:bg-orange-300 hover:text-black hover:p-1 transition-all duration-300"/>
          </Link>
        </li>

          <li >
       
            <LogoutButton/>
            
          </li>
     </ul>) : <></>}
    </nav>
  );
}

export default Header;
