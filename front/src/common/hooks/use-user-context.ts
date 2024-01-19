import {useContext} from "react";
import {UserContext} from "@/common";

function useUserContext() {
  const {authSuccessFirst, setAuthSuccessFirst, auth, setAuth} = useContext(UserContext)

  const changeAuth = (flag: boolean) => {
    setAuth?.(flag)
  }

  const changeAuthSuccessFirst = (flag: boolean) => {
    setAuthSuccessFirst?.(flag)
  }

  return {
    auth,
    authSuccessFirst,
    changeAuth,
    changeAuthSuccessFirst
  }
}

export {useUserContext}