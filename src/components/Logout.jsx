import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeJwt} from '../actions/authActions'
const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const authState = useSelector(state => state.auth);
  let authState = Cookies.get('jwt')

  // console.log("LOGOUT", authState)
  const handleLogout = () => {
    // Clear authentication state and remove tokens or credentials
    
    dispatch(removeJwt(authState));
    // console.log('logout triggered!')
    Cookies.remove("jwt");

    // Redirect to the login page
    navigate("/login");
  };
    return authState && authState.length > 0 ? ( <button onClick={()=>handleLogout()} className="bg-red-400 px-4 py-1 rounded-md sm:px-1">Logout</button>) : <div></div>;
};

export default LogoutButton;
