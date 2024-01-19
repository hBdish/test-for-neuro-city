import {useContext} from "react";
import {UserContext} from "@/common";

function useUserContext() {
  const {auth, setAuth} = useContext(UserContext)

  const changeAuth = (flag: boolean) => {
    setAuth?.(flag)
  }

  return {
    auth,
    changeAuth
  }
}

export {useUserContext}