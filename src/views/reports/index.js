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
import { getAllReports } from '../../http/reports'
import BackdropLoader from '../../components/BackdropLoader'
import { formatDate, formatTime } from '../../helper'

const Reports = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [reports, setReports] = useState([])

  const getReports = () => {
    setIsLoading(true)

    getAllReports()
      .then((res) => {
        setReports(res.data.reports)
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getReports()
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <CFormInput style={{ width: '230px' }} type="text" placeholder="Search" />

        <div className="d-flex align-items-center gap-2 ">
          <CFormSelect style={{ width: '220px' }}>
            <option>Select Violation Type</option>
            <option value="Violation Type 1">Violation Type 1</option>
            <option value="Violation Type 2">Violation Type 2</option>
            <option value="Violation Type 3">Violation Type 3</option>
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
            <CTableHeaderCell scope="col">Date Created</CTableHeaderCell>
            <CTableHeaderCell scope="col">Time</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        {reports.length > 0 &&
          !isLoading &&
          reports.map((report) => {
            return (
              <CTableBody key={report.id}>
                <CTableRow>
                  <CTableDataCell>{report.student_id}</CTableDataCell>
                  <CTableDataCell>{report.student_name}</CTableDataCell>
                  <CTableDataCell>{report.violation_name}</CTableDataCell>
                  <CTableDataCell>{formatDate(report.created_at)}</CTableDataCell>
                  <CTableDataCell>{formatTime(report.time)}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={report.status === 'pending' ? 'warning' : 'success'}>
                      {report.status === 'pending' ? 'Pending' : 'Resolved'}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CTooltip content="View Details" placement="top">
                      <Link to={`/reports/${report.id}`} className="text-secondary">
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
                    {report.status === 'pending' && (
                      <CTooltip content="Mark as Resolved" placement="top">
                        <CIcon
                          icon={cilCheckCircle}
                          role="button"
                          title="Mark as Solved"
                          className="text-secondary"
                        />
                      </CTooltip>
                    )}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            )
          })}

        {isLoading && (
          <CTableBody>
            <CTableRow>
              <CTableDataCell colSpan={8} className="text-center">
                No data available
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        )}

        {reports.length === 0 && !isLoading && (
          <CTableBody>
            <CTableRow>
              <CTableDataCell colSpan={8} className="text-center">
                No data available
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

      {isLoading && <BackdropLoader />}
    </div>
  )
}

export default Reports
