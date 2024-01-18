import {AppRoutes, AppRoutesProps, getRouteLogin, getRouteRegistrations, getRouteUsers} from "@/common";
import {LoginPage, RegistrationPage, UsersPage} from "@/features";


const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage/>,
  },
  [AppRoutes.REGISTRATION]: {
    path: getRouteRegistrations(),
    element: <RegistrationPage/>,
  },
  [AppRoutes.USERS]: {
    path: getRouteUsers(),
    element: <UsersPage/>,
    authOnly: true
  },
}

export {
  routeConfig
}