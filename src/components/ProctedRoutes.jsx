import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = () => {
  const auth = Cookies.get('jwt')
  console.log('PROCTEDROUTES', auth)
  return(
      auth && auth !== "" ? <Outlet/> : <Navigate to="/signup" />
  )
};

export default ProtectedRoutes;
