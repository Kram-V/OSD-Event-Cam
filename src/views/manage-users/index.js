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
  CSpinner,
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
  cilThumbUp,
  cilUser,
} from '@coreui/icons'

import { generate } from 'generate-password-browser'
import {
  activateAccount,
  approveUser,
  changeRole,
  createUser,
  deactivateAccount,
  getAllUsers,
} from '../../http/admin'

import { Bounce, toast } from 'react-toastify'

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([])
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [generatedPassword, setGeneratedPassword] = useState('')

  const [userId, setUserId] = useState(null)
  const [status, setStatus] = useState(null)

  const [errors, setErrors] = useState(null)

  // FOR MODAL STATE
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isActivateModal, setIsActivateModal] = useState(false)
  const [isDeactivateModal, setIsDeactivateModal] = useState(false)
  const [isApproveModal, setIsApproveModal] = useState(false)
  const [isChangeRoleModal, setIsChangeRoleModal] = useState(false)

  // FOR LOADER STATE
  const [isLoading, setIsLoading] = useState(false)
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const [isActivateLoading, setIsActivateLoading] = useState(false)
  const [isDeactivateLoading, setIsDeactivateLoading] = useState(false)
  const [isApproveLoading, setIsApproveLoading] = useState(false)
  const [isChangeRoleLoading, setIsChangeRoleLoading] = useState(false)

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
    setErrors(null)
  }

  const handleCreateUser = () => {
    setIsCreateLoading(true)

    const data = {
      fullname,
      username,
      email,
      password: generatedPassword,
    }

    createUser(data)
      .then((res) => {
        toast.success('You have created account successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        getUsers()
        handleReset()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsCreateLoading(false))
  }

  const getUsers = () => {
    setIsLoading(true)
    getAllUsers()
      .then((res) => {
        setAllUsers(res.data.data)
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }

  const handleActivateAccount = () => {
    setIsActivateLoading(true)

    activateAccount(userId)
      .then((res) => {
        toast.success('You have activated account successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        setUserId(null)
        setIsActivateModal(false)
        getUsers()
      })
      .catch((e) => console.log(e))
      .finally(() => setIsActivateLoading(false))
  }

  const handleDeactivateAccount = () => {
    setIsDeactivateLoading(true)

    deactivateAccount(userId)
      .then((res) => {
        toast.success('You have deactivated account successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        setUserId(null)
        setIsDeactivateModal(false)
        getUsers()
      })
      .catch((e) => console.log(e))
      .finally(() => setIsDeactivateLoading(false))
  }

  const handleApproveUser = () => {
    setIsApproveLoading(true)

    approveUser(userId)
      .then((res) => {
        toast.success('You have approved user successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        setUserId(null)
        setIsApproveModal(false)
        getUsers()
      })
      .catch((e) => console.log(e))
      .finally(() => setIsApproveLoading(false))
  }

  const handleChangeRole = () => {
    setIsChangeRoleLoading(true)

    changeRole(userId, status)
      .then((res) => {
        toast.success('You have changed role successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        setStatus(null)
        setUserId(null)
        setIsChangeRoleModal(false)
        getUsers()
      })
      .catch((e) => console.log(e))
      .finally(() => setIsChangeRoleLoading(false))
  }

  const openActivateModal = (id) => {
    setIsActivateModal(true)
    setUserId(id)
  }

  const openDeactivateModal = (id) => {
    setIsDeactivateModal(true)
    setUserId(id)
  }

  const openApproveModal = (id) => {
    setIsApproveModal(true)
    setUserId(id)
  }

  const openMakeAdminModal = (id, data) => {
    setIsChangeRoleModal(true)
    setStatus(data)
    setUserId(id)
  }

  const openMakeStaffModal = (id, data) => {
    setIsChangeRoleModal(true)
    setStatus(data)
    setUserId(id)
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

        {allUsers.length > 0 &&
          !isLoading &&
          allUsers.map((user) => {
            return (
              <CTableBody key={user.id}>
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
                        <CIcon
                          onClick={() => openDeactivateModal(user.id)}
                          icon={cilBan}
                          role="button"
                          className="text-secondary me-2 "
                        />
                      </CTooltip>
                    ) : (
                      <CTooltip content="Activate" placement="top">
                        <CIcon
                          onClick={() => openActivateModal(user.id)}
                          icon={cilCheckCircle}
                          role="button"
                          className="text-secondary me-2 "
                        />
                      </CTooltip>
                    )}

                    {!user.is_approved && (
                      <CTooltip content="Approve" placement="top">
                        <CIcon
                          onClick={() => openApproveModal(user.id)}
                          icon={cilThumbUp}
                          className="me-2 text-secondary"
                          role="button"
                        />
                      </CTooltip>
                    )}

                    {user.role === 'admin' ? (
                      <CTooltip content="Make as Staff" placement="top">
                        <CIcon
                          onClick={() => openMakeStaffModal(user.id, { status: 'staff' })}
                          icon={cilUser}
                          className="text-secondary"
                          role="button"
                        />
                      </CTooltip>
                    ) : (
                      <CTooltip content="Make as Admin" placement="top">
                        <CIcon
                          onClick={() => openMakeAdminModal(user.id, { status: 'admin' })}
                          icon={cilShieldAlt}
                          className="text-secondary"
                          role="button"
                        />
                      </CTooltip>
                    )}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            )
          })}

        {allUsers.length === 0 && !isLoading && (
          <CTableBody>
            <CTableRow>
              <CTableDataCell colSpan={8} className="text-center">
                No data available
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        )}

        {isLoading && (
          <CTableBody>
            <CTableRow>
              <CTableDataCell colSpan={8}>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <CSpinner style={{ width: '20px', height: '20px' }} /> Loading Data...
                </div>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        )}
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
                  placeholder="Password"
                  autoComplete="new-password"
                  value={generatedPassword}
                  onChange={(e) => setGeneratedPassword(e.target.value)}
                />
              </CInputGroup>

              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['password'] && errors['password'][0]}
              </div>

              <div
                style={{ cursor: 'pointer' }}
                className="d-flex align-items-center mt-2 text-primary"
                onClick={() => handleGeneratePassword()}
              >
                <span>Generate Password</span>

                <CIcon icon={cilLockLocked} />
              </div>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton disabled={isCreateLoading} color="secondary" onClick={handleReset}>
            Close
          </CButton>
          <CButton disabled={isCreateLoading} onClick={handleCreateUser} color="primary">
            {isCreateLoading ? (
              <CSpinner style={{ width: '20px', height: '20px' }} />
            ) : (
              'Save Changes'
            )}
          </CButton>
        </CModalFooter>
      </CModal>

      {/* ACTIVATE MODAL CONFIRMATION */}
      <CModal
        backdrop="static"
        visible={isActivateModal}
        onClose={() => setIsActivateModal(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="LiveDemoExampleLabel">Activate Account</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to activate this account?</CModalBody>
        <CModalFooter>
          <CButton
            disabled={isActivateLoading}
            color="secondary"
            onClick={() => setIsActivateModal(false)}
          >
            Close
          </CButton>
          <CButton disabled={isActivateLoading} color="primary" onClick={handleActivateAccount}>
            {isActivateLoading ? (
              <CSpinner style={{ width: '20px', height: '20px' }} />
            ) : (
              'Activate'
            )}
          </CButton>
        </CModalFooter>
      </CModal>

      {/* DEACTIVATE MODAL CONFIRMATION */}
      <CModal
        backdrop="static"
        visible={isDeactivateModal}
        onClose={() => setIsDeactivateModal(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="LiveDemoExampleLabel">Deactivate Account</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to deactivate this account?</CModalBody>
        <CModalFooter>
          <CButton
            disabled={isDeactivateLoading}
            color="secondary"
            onClick={() => setIsDeactivateModal(false)}
          >
            Close
          </CButton>
          <CButton disabled={isDeactivateLoading} color="primary" onClick={handleDeactivateAccount}>
            {isDeactivateLoading ? (
              <CSpinner style={{ width: '20px', height: '20px' }} />
            ) : (
              'Deactivate'
            )}
          </CButton>
        </CModalFooter>
      </CModal>

      {/* APPROVE MODAL CONFIRMATION */}
      <CModal
        backdrop="static"
        visible={isApproveModal}
        onClose={() => setIsApproveModal(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="LiveDemoExampleLabel">Approve Account</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to approve this account?</CModalBody>
        <CModalFooter>
          <CButton
            disabled={isApproveLoading}
            color="secondary"
            onClick={() => setIsApproveModal(false)}
          >
            Close
          </CButton>
          <CButton disabled={isApproveLoading} color="primary" onClick={handleApproveUser}>
            {isApproveLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Approve'}
          </CButton>
        </CModalFooter>
      </CModal>

      {/* CHANGE ROLE MODAL CONFIRMATION */}
      <CModal
        backdrop="static"
        visible={isChangeRoleModal}
        onClose={() => setIsChangeRoleModal(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="LiveDemoExampleLabel">Change Role Account</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to change role this account?</CModalBody>
        <CModalFooter>
          <CButton
            disabled={isChangeRoleLoading}
            color="secondary"
            onClick={() => setIsChangeRoleModal(false)}
          >
            Close
          </CButton>
          <CButton disabled={isChangeRoleLoading} color="primary" onClick={handleChangeRole}>
            {isChangeRoleLoading ? (
              <CSpinner style={{ width: '20px', height: '20px' }} />
            ) : (
              'Change Role'
            )}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default ManageUsers
