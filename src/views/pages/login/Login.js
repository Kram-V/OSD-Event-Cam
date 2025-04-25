import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import { CSpinner } from '@coreui/react'
import { Bounce, ToastContainer, toast } from 'react-toastify'

import { login } from '../../../http/auth'
import { useUserDetailsContext } from '../../../contexts/UserDetailsContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState(null)

  const { getUserDetails } = useUserDetailsContext()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    login({ email, password })
      .then((res) => {
        getUserDetails(res.data.user, res.data.token)

        toast.success('You have logged in your account', {
          position: 'top-right',
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        navigate('/dashboard')
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        console.log(e)

        if (
          e.response.data.message ===
          'Your account is not active currently, please contact your admin.'
        )
          return toast.error(e.response.data.message, {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          })

        if (
          e.response.data.message ===
          'Your account is not approved by an admin, please contact your admin.'
        )
          return toast.error(e.response.data.message, {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          })

        if (e.response.data.message === 'The provided credentials are incorrect.')
          return toast.error(e.response.data.message, {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          })

        setErrors(e.response.data.errors)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <CContainer className="h-100 d-flex align-items-center justify-content-center">
        <CCard style={{ width: '400px' }}>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="text-center">
                <h1>Login</h1>
                <p className="text-body-secondary">Sign In to your account</p>
              </div>

              <div className="mb-3">
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors &&
                    errors['email'] &&
                    errors['email'][0] === 'The email field is required.' &&
                    'The email field is required.'}
                </div>
              </div>

              <div className="mb-2">
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['password'] && errors['password'][0]}
                </div>
              </div>

              <CRow className="my-3">
                <CCol xs={12} className="text-right">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </CCol>
              </CRow>

              <CRow className="align-items-center">
                <CCol xs={6}>
                  <CButton disabled={isLoading} type="submit" color="primary" className="px-4">
                    {isLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Login'}
                  </CButton>
                </CCol>
                <CCol xs={6}>
                  No Account? <Link to="/register">Sign Up</Link>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CContainer>

      <ToastContainer />
    </div>
  )
}

export default Login
