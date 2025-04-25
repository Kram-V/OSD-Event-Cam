import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'
import { register } from '../../../http/auth'

import { CSpinner } from '@coreui/react'
import { Bounce, ToastContainer, toast } from 'react-toastify'

const Register = () => {
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    const inputData = {
      fullname,
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }

    register(inputData)
      .then((res) => {
        toast.success(
          'You have created your account. Please verify first and approve it by admin before you login',
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

        resetAllFields()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsLoading(false))
  }

  const resetAllFields = () => {
    setFullname('')
    setUsername('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <CContainer className="h-100 d-flex align-items-center justify-content-center">
        <CCard style={{ width: '440px' }}>
          <CCardBody className="p-4">
            <CForm onSubmit={handleSubmit}>
              <div className="text-center">
                <h1>Register</h1>
                <p className="text-body-secondary">Create your account</p>
              </div>

              <div className="mb-3">
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Fullname"
                    autoComplete="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['fullname'] && errors['fullname'][0]}
                </div>
              </div>

              <div className="mb-3">
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Username"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['username'] && errors['username'][0]}
                </div>
              </div>

              <div className="mb-3">
                <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['email'] && errors['email'][0]}
                </div>
              </div>

              <div className="mb-3">
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['password'] && errors['password'][0]}
                </div>
              </div>

              <CInputGroup className="mb-4">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="confirm-password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </CInputGroup>

              <div className=" mb-2">
                <CButton
                  style={{ width: '100%' }}
                  disabled={isLoading}
                  type="submit"
                  color="primary"
                >
                  {isLoading ? (
                    <CSpinner style={{ width: '20px', height: '20px' }} />
                  ) : (
                    'Create Account'
                  )}
                </CButton>
              </div>

              <div className="text-center">
                Already have an account? <Link to="/login">Sign In</Link>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CContainer>

      <ToastContainer />
    </div>
  )
}

export default Register
