enum AppRoutes {
  LOGIN = 'login',
  REGISTRATION = 'registration',
  USERS = 'users',
}

const getRouteLogin = () => `/${AppRoutes.LOGIN}`
const getRouteRegistrations = () => `/${AppRoutes.REGISTRATION}`
const getRouteUsers = () => `/${AppRoutes.USERS}`

export {
  getRouteLogin,
  getRouteRegistrations,
  getRouteUsers,
  AppRoutes
}