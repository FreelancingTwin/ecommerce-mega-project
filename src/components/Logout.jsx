import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication state and remove tokens or credentials
    // For example, clear the JWT cookie
    console.log('logout triggered!')
    Cookies.remove("jwt");

    // Redirect to the login page
    navigate("/login");
  };

  return <button onClick={()=>handleLogout()}>Logout</button>;
};

export default LogoutButton;
