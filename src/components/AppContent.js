import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import { adminRoutes, routes } from '../routes'
import Page404 from '../views/pages/page404/Page404'
import { useUserDetailsContext } from '../contexts/UserDetailsContext'

const AppContent = () => {
  const { user } = useUserDetailsContext()

  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />

          {user.role === 'non-admin' &&
            routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              )
            })}

          {user.role === 'admin' &&
            adminRoutes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              )
            })}

          <Route exact path="/*" name="Page 404" element={<Page404 />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
