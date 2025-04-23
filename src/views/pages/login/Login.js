import React from 'react'
import { Link } from 'react-router-dom'
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

const Login = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <div className="text-center">
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                  </div>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-2">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
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
                      <Link to="/dashboard">
                        <CButton color="primary" className="px-4">
                          Login
                        </CButton>
                      </Link>
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
