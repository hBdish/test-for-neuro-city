import {getRouteLogin, useUserContext} from "@/common";
import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth = ({children}: RequireAuthProps) => {
  const {auth} = useUserContext();

  if (!auth) {
    return <Navigate to={getRouteLogin()}/>;
  }

  return children
};

export {RequireAuth};