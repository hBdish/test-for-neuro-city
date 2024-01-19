import {ReactNode, useState} from "react";

import {UserContext} from "@/common";

interface UserProvider {
  children?: ReactNode;
}

const UserProvider = ({children}: UserProvider) => {
  const [auth, setAuth] = useState<boolean>(true)

  const defaultProps = {
    auth,
    setAuth
  }

  return (
    <UserContext.Provider value={defaultProps}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider};
