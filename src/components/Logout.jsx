import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import {useDispatch} from 'react-redux'
import {removeJwt} from '../actions/authActions'
const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let authState = Cookies.get('jwt')

  const handleLogout = () => {
    
    dispatch(removeJwt(authState));
    Cookies.remove("jwt");

    navigate("/login");
  };
    return authState && authState.length > 0 ? ( <button onClick={()=>handleLogout()} className="bg-red-400 px-4 py-1 rounded-md sm:px-1">Logout</button>) : <div></div>;
};

export default LogoutButton;
