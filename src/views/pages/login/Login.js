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

import { login } from '../../../http/auth'
import { useUserDetailsContext } from '../../../contexts/UserDetailsContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { getUserDetails } = useUserDetailsContext()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    login({ email, password })
      .then((res) => {
        getUserDetails(res.data.user, res.data.token)
        // window.location.reload('/dashboard')
        navigate('/dashboard')
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={handleSubmit}>
                  <div className="text-center">
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                  </div>
                  <CInputGroup className="mb-3">
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
                  <CInputGroup className="mb-2">
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

                  <CRow className="my-3">
                    <CCol xs={12} className="text-right">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </CCol>
                  </CRow>

                  <CRow className="align-items-center">
                    <CCol xs={6}>
                      <CButton type="submit" color="primary" className="px-4">
                        Login
                      </CButton>
                    </CCol>
                    <CCol xs={6}>
                      No Account? <Link to="/register">Sign Up</Link>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
