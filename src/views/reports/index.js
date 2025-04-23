import React from 'react'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowLeft,
  cilArrowRight,
  cilCheckCircle,
  cilFilter,
  cilPencil,
  cilSearch,
} from '@coreui/icons'
import { Link } from 'react-router-dom'

const Reports = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <CFormInput style={{ width: '230px' }} type="text" placeholder="Search" />

        <div className="d-flex align-items-center gap-2 ">
          <CFormSelect style={{ width: '220px' }}>
            <option>Select Validation Type</option>
            <option value="Validation Type 1">Validation Type 1</option>
            <option value="Validation Type 2">Validation Type 2</option>
            <option value="Validation Type 3">Validation Type 3</option>
          </CFormSelect>

          <CFormInput style={{ width: '200px' }} type="date" />
          <CFormInput style={{ width: '200px' }} type="date" />

          <CFormSelect style={{ width: '200px' }}>
            <option>Select Status Type</option>
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
          </CFormSelect>

          <CButton
            className="d-flex align-items-center"
            color="primary"
            onClick={() => setIsOpenModal(true)}
          >
            <CIcon icon={cilFilter} className="me-1" />
            Filter
          </CButton>
        </div>
      </div>

      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Student ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
            <CTableHeaderCell scope="col"> Violation Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date/Time</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>1111111</CTableDataCell>
            <CTableDataCell>John Doe</CTableDataCell>
            <CTableDataCell>Violation Type 1</CTableDataCell>
            <CTableDataCell>2025-10-20 10:10:10</CTableDataCell>
            <CTableDataCell>
              <CBadge color="warning">Pending</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CTooltip content="View Details" placement="top">
                <Link to="/reports/1" className="text-secondary">
                  <CIcon icon={cilSearch} className="me-2" role="button" title="View" />
                </Link>
              </CTooltip>
              <CTooltip content="Edit" placement="top">
                <CIcon
                  icon={cilPencil}
                  className="me-2 text-secondary"
                  role="button"
                  title="Edit"
                />
              </CTooltip>
              <CTooltip content="Mark as Resolved" placement="top">
                <CIcon
                  icon={cilCheckCircle}
                  role="button"
                  title="Mark as Solved"
                  className="text-secondary"
                />
              </CTooltip>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableDataCell>2222222</CTableDataCell>
            <CTableDataCell>Jane Doe</CTableDataCell>
            <CTableDataCell>Violation Type 2</CTableDataCell>
            <CTableDataCell>2025-05-23 14:30:05</CTableDataCell>
            <CTableDataCell>
              <CBadge color="success">Resolved</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CTooltip content="View Details" placement="top">
                <Link to="/reports/1" className="text-secondary">
                  <CIcon icon={cilSearch} className="me-2" role="button" title="View" />
                </Link>
              </CTooltip>
              <CTooltip content="Edit" placement="top">
                <CIcon
                  icon={cilPencil}
                  className="me-2 text-secondary"
                  role="button"
                  title="Edit"
                />
              </CTooltip>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableDataCell>3333333</CTableDataCell>
            <CTableDataCell>Ryan Bang</CTableDataCell>
            <CTableDataCell>Violation Type 3</CTableDataCell>
            <CTableDataCell>2025-05-23 14:30:05</CTableDataCell>
            <CTableDataCell>
              <CBadge color="success">Resolved</CBadge>
            </CTableDataCell>

            <CTableDataCell>
              <CTooltip content="View Details" placement="top">
                <Link to="/reports/1" className="text-secondary">
                  <CIcon icon={cilSearch} className="me-2" role="button" title="View" />
                </Link>
              </CTooltip>
              <CTooltip content="Edit" placement="top">
                <CIcon
                  icon={cilPencil}
                  className="me-2 text-secondary"
                  role="button"
                  title="Edit"
                />
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
    </div>
  )
}

export default Reports
