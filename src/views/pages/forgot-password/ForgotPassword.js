import React, { useState } from 'react'
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
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed } from '@coreui/icons'

import { Bounce, ToastContainer, toast } from 'react-toastify'
import { forgotPassword } from '../../../http/auth'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    forgotPassword({ email })
      .then((res) => {
        toast.success(
          'You have submitted, please check the link from your email for resetting the password',
          {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          },
        )

        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)

        if (
          e.response.data?.message ===
          'Your account is not active currently, please contact your admin before you reset the password.'
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
          'Please make sure your email is verified and approved by admin'
        )
          return toast.error(e.response.data?.message, {
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
          e.response.data?.message ===
          'Your account is not approved by an admin, please contact your admin before you reset the password.'
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

        if (e.response.data?.message === 'The email you provided is not existing')
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
                <h1>Reset Password</h1>
                <p className="text-body-secondary">Send your email for resetting your password</p>
              </div>

              <div className="mb-3">
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilEnvelopeClosed} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['email'] && errors['email'][0]}
                </div>
              </div>

              <CRow className="align-items-center">
                <CCol xs={6}>
                  <CButton disabled={isLoading} type="submit" color="primary" className="px-4">
                    {isLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Send'}
                  </CButton>
                </CCol>
                <CCol className="text-end" xs={6}>
                  <Link to="/login">Back to Login</Link>
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

export default ForgotPassword
