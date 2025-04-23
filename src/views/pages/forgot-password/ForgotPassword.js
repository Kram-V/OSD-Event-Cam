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
import { cilEnvelopeClosed } from '@coreui/icons'

const ForgotPassword = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <div className="text-center">
                    <h1>Reset Password</h1>
                    <p className="text-body-secondary">
                      Send your email for resetting your password
                    </p>
                  </div>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilEnvelopeClosed} />
                    </CInputGroupText>
                    <CFormInput placeholder="Email" />
                  </CInputGroup>

                  <CRow className="align-items-center">
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4">
                        Send
                      </CButton>
                    </CCol>
                    <CCol className="text-end" xs={6}>
                      <Link to="/login">Back to Login</Link>
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

export default ForgotPassword
