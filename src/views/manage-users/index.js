import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableRow,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableDataCell,
  CBadge,
  CTooltip,
  CButton,
  CFormSelect,
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowLeft,
  cilArrowRight,
  cilBan,
  cilCheckCircle,
  cilLockLocked,
  cilPlus,
  cilShieldAlt,
  cilThumbDown,
  cilThumbUp,
  cilUser,
} from '@coreui/icons'

import { generate } from 'generate-password-browser'
import { getAllUsers } from '../../http/auth'

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [generatedPassword, setGeneratedPassword] = useState('')

  const handleGeneratePassword = (length = 12) => {
    const password = generate({
      length,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
    })

    setGeneratedPassword(password)
  }

  const handleReset = () => {
    setFullname('')
    setUsername('')
    setEmail('')
    setGeneratedPassword('')
    setIsModalOpen(false)
  }

  const getUsers = () => {
    getAllUsers()
      .then((res) => {
        setAllUsers(res.data.data)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <CFormInput style={{ width: '230px' }} type="text" placeholder="Search" />

        <CButton
          className="d-flex align-items-center"
          color="primary"
          onClick={() => setIsModalOpen(true)}
        >
          <CIcon icon={cilPlus} className="me-1" />
          Create User
        </CButton>
      </div>

      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Username</CTableHeaderCell>
            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Approval Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Verification Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        {allUsers.map((user) => {
          return (
            <CTableBody>
              <CTableRow>
                <CTableDataCell>{user.email}</CTableDataCell>
                <CTableDataCell>{user.username}</CTableDataCell>
                <CTableDataCell>{user.role === 'admin' ? 'Admin' : 'Staff'}</CTableDataCell>
                <CTableDataCell>
                  <CBadge color={user.is_active === 1 ? 'success' : 'danger'}>
                    {user.is_active === 1 ? 'Active' : 'Inactive'}
                  </CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  <CBadge color={user.is_approved === 1 ? 'success' : 'warning'}>
                    {user.is_approved === 1 ? 'Approved' : 'Pending'}
                  </CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  <CBadge color={user.is_verified === 1 ? 'success' : 'warning'}>
                    {user.is_verified === 1 ? 'Verified' : 'Pending'}
                  </CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  {user.is_active ? (
                    <CTooltip content="Deactivate" placement="top">
                      <CIcon icon={cilBan} role="button" className="text-secondary me-2 " />
                    </CTooltip>
                  ) : (
                    <CTooltip content="Activate" placement="top">
                      <CIcon icon={cilCheckCircle} role="button" className="text-secondary me-2 " />
                    </CTooltip>
                  )}

                  {user.is_approved ? (
                    <CTooltip content="Disapprove" placement="top">
                      <CIcon icon={cilThumbDown} className="me-2 text-secondary" role="button" />
                    </CTooltip>
                  ) : (
                    <CTooltip content="Approve" placement="top">
                      <CIcon icon={cilThumbUp} className="me-2 text-secondary" role="button" />
                    </CTooltip>
                  )}

                  {user.role === 'admin' ? (
                    <CTooltip content="Make as Staff" placement="top">
                      <CIcon icon={cilUser} className="text-secondary" role="button" />
                    </CTooltip>
                  ) : (
                    <CTooltip content="Make as Admin" placement="top">
                      <CIcon icon={cilShieldAlt} className="text-secondary" role="button" />
                    </CTooltip>
                  )}
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          )
        })}
      </CTable>

      <div className="d-flex justify-content-between align-items-center">
        <CFormSelect
          style={{ width: '80px' }}
          aria-label="Default select example"
          options={[
            { label: '10', value: 10 },
            { label: '25', value: 25 },
            { label: '50', value: 50 },
          ]}
        />

        <span>Showing 1 to 10 of 20 results</span>

        <div className="d-flex gap-2">
          <CButton
            className="d-flex align-items-center"
            variant="outline"
            color="secondary"
            size="lg"
          >
            <CIcon icon={cilArrowLeft} />
          </CButton>

          <CButton
            className="d-flex align-items-center"
            variant="outline"
            color="secondary"
            size="lg"
          >
            <CIcon icon={cilArrowRight} />
          </CButton>
        </div>
      </div>

      {/* CREATE MODAL */}
      <CModal
        backdrop="static"
        alignment="center"
        scrollable
        visible={isModalOpen}
        onClose={handleReset}
        aria-labelledby="VerticallyCenteredScrollableExample2"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Create User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CInputGroup className="mb-3">
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

            <CInputGroup className="mb-3">
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
            <CInputGroup className="mb-3">
              <CInputGroupText>@</CInputGroupText>
              <CFormInput
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </CInputGroup>
            <CInputGroup className="mb-3 position-relative">
              <CInputGroupText>
                <CIcon icon={cilLockLocked} />
              </CInputGroupText>
              <CFormInput
                placeholder="Password"
                autoComplete="new-password"
                value={generatedPassword}
                onChange={(e) => setGeneratedPassword(e.target.value)}
              />

              <CTooltip content="Generate Password" placement="top">
                <CIcon
                  onClick={() => handleGeneratePassword()}
                  className="position-absolute"
                  style={{ right: '10px', top: '10px', cursor: 'pointer' }}
                  icon={cilLockLocked}
                />
              </CTooltip>
            </CInputGroup>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleReset}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* EDIT MODAL */}
      {/* <CModal
        backdrop="static"
        alignment="center"
        scrollable
        visible={isEditModalOpen}
        onClose={handleResetEditModal}
        aria-labelledby="VerticallyCenteredScrollableExample2"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Edit Role</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </CFormSelect>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleResetEditModal}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal> */}
    </div>
  )
}

export default ManageUsers
