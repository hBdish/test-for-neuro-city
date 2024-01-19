import {createContext} from "react";

interface UserContextProps {
  auth?: boolean
  setAuth?: (flag: boolean) => void
}

const UserContext = createContext<UserContextProps>({});

export {UserContext}
export type {UserContextProps}