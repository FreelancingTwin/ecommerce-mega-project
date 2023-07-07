import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = () => {
  const auth = Cookies.get('jwt')
  return(
      auth ? <Outlet/> : <Navigate to="/signup" />
  )
};

export default ProtectedRoutes;
