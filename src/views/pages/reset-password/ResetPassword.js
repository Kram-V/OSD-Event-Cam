import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
import { cilEnvelopeClosed, cilLockLocked } from '@coreui/icons'

import { Bounce, ToastContainer, toast } from 'react-toastify'
import { resetPassword } from '../../../http/auth'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { token, email } = useParams()

  console.log(token, email)

  const [errors, setErrors] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    const data = {
      password,
      password_confirmation: confirmPassword,
    }

    resetPassword(data, token, email)
      .then((res) => {
        toast.success('You have changed your password successfully', {
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

        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)

        console.log(e)

        if (e.response.data?.message === 'The password field confirmation does not match.')
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
                <h1>Change Password</h1>
                <p className="text-body-secondary">
                  You can change your password by matching the password and password confirmation
                </p>
              </div>

              <div className="mb-3">
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['password'] && errors['password'][0]}
                </div>
              </div>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </CInputGroup>

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

export default ResetPassword
