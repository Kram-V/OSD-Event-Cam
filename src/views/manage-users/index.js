import React, { useState } from 'react'
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
  cilFilter,
  cilLockLocked,
  cilPencil,
  cilPlus,
  cilSearch,
  cilUser,
} from '@coreui/icons'

import { generate } from 'generate-password-browser'

const ManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
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

  const handleResetEditModal = () => {
    setIsEditModalOpen(false)
  }

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
            <CTableHeaderCell scope="col">Verification Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Approval Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>janedoe@gmail.com</CTableDataCell>
            <CTableDataCell>janedoe30</CTableDataCell>
            <CTableDataCell>Admin</CTableDataCell>
            <CTableDataCell>
              <CBadge color="success">Active</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CBadge color="success">Verified</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CBadge color="success">Approved</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CTooltip content="Edit Role" placement="top">
                <CIcon
                  onClick={() => setIsEditModalOpen(true)}
                  icon={cilPencil}
                  className="me-2 text-secondary"
                  role="button"
                  title="Edit"
                />
              </CTooltip>
              <CTooltip content="Deactivate" placement="top">
                <CIcon icon={cilBan} role="button" className="text-secondary" />
              </CTooltip>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableDataCell>johndoe@gmail.com</CTableDataCell>
            <CTableDataCell>johndoe12</CTableDataCell>
            <CTableDataCell>Staff</CTableDataCell>
            <CTableDataCell>
              <CBadge color="danger">Inactive</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CBadge color="warning">Pending</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CBadge color="warning">Pending</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CTooltip content="Edit Role" placement="top">
                <CIcon
                  onClick={() => setIsEditModalOpen(true)}
                  icon={cilPencil}
                  className="me-2 text-secondary"
                  role="button"
                  title="Edit"
                />
              </CTooltip>
              <CTooltip content="Activate" placement="top">
                <CIcon icon={cilCheckCircle} role="button" className="text-secondary" />
              </CTooltip>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
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
      <CModal
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
      </CModal>
    </div>
  )
}

export default ManageUsers
