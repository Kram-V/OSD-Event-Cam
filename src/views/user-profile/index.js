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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import { CRow, CCol } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
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
                    Name:
                  </div>
                  <span>John Doe</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Username:
                  </div>
                  <span>john20</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Email Address:
                  </div>
                  <span>johndoe@gmail.com</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Current Role:
                  </div>
                  <span>Staff</span>
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
          <CForm>
            <CRow className="g-2">
              <CCol md={6}>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput placeholder="Name" />
                </CInputGroup>
              </CCol>

              <CCol md={6}>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput placeholder="Username" />
                </CInputGroup>
              </CCol>

              <CCol md={6}>
                <CInputGroup className="mb-3 position-relative">
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput placeholder="Password" />
                </CInputGroup>
              </CCol>

              <CCol md={6}>
                <CInputGroup className="mb-3 position-relative">
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput placeholder="Confirm Password" />
                </CInputGroup>
              </CCol>
            </CRow>

            <CButton className="d-flex align-items-center" color="primary">
              Update
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
