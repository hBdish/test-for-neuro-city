import {ReactNode, useState} from "react";

import {UserContext} from "@/common";

interface UserProvider {
  children?: ReactNode;
}

const UserProvider = ({children}: UserProvider) => {
  const [auth, setAuth] = useState<boolean>(false)
  const [authSuccessFirst, setAuthSuccessFirst] = useState<boolean>(false)

  const defaultProps = {
    auth,
    authSuccessFirst,
    setAuth,
    setAuthSuccessFirst
  }

  return (
    <UserContext.Provider value={defaultProps}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider};
