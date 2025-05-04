import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'
import ForgotPassword from './views/pages/forgot-password/ForgotPassword'
import ResetPassword from './views/pages/reset-password/ResetPassword'
import { GuestRoute, ProtectedRoute } from './components'
import { useUserDetailsContext } from './contexts/UserDetailsContext'
import { ToastContainer } from 'react-toastify'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    // if (theme) {
    //   setColorMode(theme)
    // }
    // if (isColorModeSet()) {
    //   return
    // }
    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="pt-3 text-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          }
        >
          <Routes>
            <Route element={<GuestRoute />}>
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
              <Route
                exact
                path="/forgot-password"
                name="Forgot Password Page"
                element={<ForgotPassword />}
              />
              <Route
                exact
                path="/reset-password/:token/:email"
                name="Reset Password Page"
                element={<ResetPassword />}
              />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="*" element={<DefaultLayout />} />
            </Route>

            {/* <Route exact path="*" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
