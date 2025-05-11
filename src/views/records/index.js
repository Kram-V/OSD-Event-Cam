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

const Records = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <CFormInput style={{ width: '230px' }} type="text" placeholder="Search" />

        <div className="d-flex align-items-center gap-2 ">
          <CFormSelect style={{ width: '200px' }}>
            <option>Select Year</option>
            <option value="">1st Year</option>
            <option value="">First Year</option>
            <option value="">3rd Year</option>
            <option value="">4th Year</option>
          </CFormSelect>

          <CFormSelect style={{ width: '200px' }}>
            <option>Select Course</option>
            <option value="">BS Civil Engineering</option>
            <option value="">Information Technology</option>
            <option value="">Tourism</option>
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
            <CTableHeaderCell scope="col">Year</CTableHeaderCell>
            <CTableHeaderCell scope="col">Course</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>1111111</CTableDataCell>
            <CTableDataCell>John Doe</CTableDataCell>
            <CTableDataCell>First Year</CTableDataCell>
            <CTableDataCell>BS Civil Engineering</CTableDataCell>
            <CTableDataCell>
              <CTooltip content="View Details" placement="top">
                <Link to="/records/1" className="text-secondary">
                  <CIcon icon={cilSearch} className="me-2" role="button" title="View" />
                </Link>
              </CTooltip>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>1111111</CTableDataCell>
            <CTableDataCell>John Doe</CTableDataCell>
            <CTableDataCell>First Year</CTableDataCell>
            <CTableDataCell>BS Civil Engineering</CTableDataCell>
            <CTableDataCell>
              <CTooltip content="View Details" placement="top">
                <Link to="/records/1" className="text-secondary">
                  <CIcon icon={cilSearch} className="me-2" role="button" title="View" />
                </Link>
              </CTooltip>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>1111111</CTableDataCell>
            <CTableDataCell>John Doe</CTableDataCell>
            <CTableDataCell>First Year</CTableDataCell>
            <CTableDataCell>BS Civil Engineering</CTableDataCell>
            <CTableDataCell>
              <CTooltip content="View Details" placement="top">
                <Link to="/records/1" className="text-secondary">
                  <CIcon icon={cilSearch} className="me-2" role="button" title="View" />
                </Link>
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

export default Records
