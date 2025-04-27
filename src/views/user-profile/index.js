import {
  cilArrowLeft,
  cilBan,
  cilCheckCircle,
  cilCloudDownload,
  cilLockLocked,
  cilPencil,
  cilPrint,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import { CRow, CCol } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Bounce, toast } from 'react-toastify'
import { updateProfile } from '../../http/profile'
import { useUserDetailsContext } from '../../contexts/UserDetailsContext'

const UserProfile = () => {
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState(null)

  const { user, updateUserDetails } = useUserDetailsContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    const data = {
      fullname,
      username,
      password,
      password_confirmation: passwordConfirmation,
    }

    updateProfile(user.id, data)
      .then((res) => {
        updateUserDetails(res.data.user)

        toast.success('You have updated your account', {
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

        setPassword('')
        setPasswordConfirmation('')

        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)

        setErrors(e.response.data.errors)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    setFullname(user.fullname)
    setUsername(user.username)
  }, [user.fullname, user.username])

  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Profile Information</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="g-5">
            <CCol md={6}>
              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Fullname:
                  </div>
                  <span>{user.fullname}</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Username:
                  </div>
                  <span>{user.username}</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Email Address:
                  </div>
                  <span>{user.email}</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Current Role:
                  </div>
                  <span>{user.role === 'non-admin' ? 'Staff' : 'Admin'}</span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <strong>Settings</strong>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CRow className="g-3">
              <CCol md={6}>
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    autoComplete="fullname"
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['fullname'] && errors['fullname'][0]}
                </div>
              </CCol>

              <CCol md={6}>
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['username'] && errors['username'][0]}
                </div>
              </CCol>

              <CCol md={6}>
                <CInputGroup className="position-relative">
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="password"
                  />
                </CInputGroup>

                <div style={{ color: 'red', fontSize: '14px' }}>
                  {errors && errors['password'] && errors['password'][0]}
                </div>
              </CCol>

              <CCol md={6}>
                <CInputGroup className=" position-relative">
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Confirm Password"
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="confirm-password"
                  />
                </CInputGroup>
              </CCol>
            </CRow>

            <CButton
              disabled={isLoading}
              type="submit"
              className="d-flex align-items-center mt-3"
              color="primary"
            >
              {isLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Update'}
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <strong>Activity Logs</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action Made</CTableHeaderCell>
                <CTableHeaderCell scope="col">Performed At</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>Jhane Doe</CTableDataCell>
                <CTableDataCell>jhanedoe30</CTableDataCell>
                <CTableDataCell>jhanedoe@gmail.com</CTableDataCell>
                <CTableDataCell>Updated Profile</CTableDataCell>
                <CTableDataCell>2025-5-30 16:40:26</CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>John Doe</CTableDataCell>
                <CTableDataCell>johndoe30</CTableDataCell>
                <CTableDataCell>johndoe@gmail.com</CTableDataCell>
                <CTableDataCell>Edited Profile</CTableDataCell>
                <CTableDataCell>2024-12-25 20:45:33</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default UserProfile
