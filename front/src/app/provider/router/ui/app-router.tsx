import {Suspense, useCallback} from 'react'
import {Route, Routes} from 'react-router-dom'

import {AppRoutesProps} from "@/common";
import {routeConfig} from "../config/route-config.tsx";
import {RequireAuth} from "./require-auth.tsx";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<div>Loading</div>}>{route.element}</Suspense>

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly
            ? (<RequireAuth>{element}</RequireAuth>)
            : element
        }
      />
    )
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export {AppRouter}