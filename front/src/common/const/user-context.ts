import {createContext} from "react";

interface UserContextProps {
  auth?: boolean
  authSuccessFirst?: boolean
  setAuth?: (flag: boolean) => void
  setAuthSuccessFirst?: (flag: boolean) => void
}

const UserContext = createContext<UserContextProps>({});

export {UserContext}
export type {UserContextProps}