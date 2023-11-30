import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthGoogleContext } from "../Contexts/authGoogle";

function PrivateRoutes(){
  const {signed} = useContext(AuthGoogleContext)

  return signed ? <Outlet/> :<Navigate to="/Login"/>;
 

}

export default PrivateRoutes;