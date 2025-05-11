import React, { useCallback, useEffect, useState } from 'react'
import { cilArrowLeft, cilBell, cilCloudDownload, cilPrint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCard, CCardHeader, CRow, CCol } from '@coreui/react'
import { Link, useParams } from 'react-router-dom'

import { formatDate, formatTime } from '../../helper'

import BackdropLoader from '../../components/BackdropLoader'

import { getReport } from '../../http/reports'

const tabStyle = {
  padding: '10px 20px',
  cursor: 'pointer',
  borderBottom: '3px solid transparent',
  marginRight: '15px',
  fontWeight: 600,
  fontSize: '16px',
  background: 'gradient(to right,rgb(23, 24, 26), #f8f9fa)',
  borderTop: '3px solid transparent',
  borderLeft: '3px solid transparent',
  borderRight: '3px solid transparent',
  borderRadius: '0',
  color: '#000',
  transition: 'border-color 0.3s ease, color 0.3s ease',
  outline: 'none',
  textDecoration: 'none',
  display: 'inline-block',
  textAlign: 'center',
}

const activeTabStyle = {
  ...tabStyle,
  color: '#0d6efd',
  borderBottom: '3px solid #0d6efd',
  fontWeight: 700,
}

const ReportDetails = () => {
  const [activeTab, setActiveTab] = useState(1)

  const [report, setReport] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()

  const getReportDetails = useCallback(() => {
    setIsLoading(true)

    getReport(id)
      .then((res) => {
        if (res.data.report.violations) {
          let violationStr = ''

          const allViolations = JSON.parse(res.data.report.violations)

          allViolations.forEach((violation, i) => {
            return (violationStr += `${violation}${i === allViolations.length - 1 ? '' : i === allViolations.length - 2 ? ' and ' : ', '}`)
          })

          setReport({ ...res.data.report, violations: violationStr })
        } else {
          setReport(res.data.report)
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, [id])

  useEffect(() => {
    getReportDetails()
  }, [getReportDetails])

  return (
    <div className="mb-4">
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Violation Details</strong>
        </CCardHeader>
        <div className="p-4">
          {/* Custom Tabs */}
          <nav aria-label="Report details tabs" style={{ marginBottom: 20 }}>
            <button
              type="button"
              style={activeTab === 1 ? activeTabStyle : tabStyle}
              onClick={() => setActiveTab(1)}
              aria-selected={activeTab === 1}
              aria-controls="student-information"
              id="tab-1"
            >
              Student Information
            </button>
            <button
              type="button"
              style={activeTab === 2 ? activeTabStyle : tabStyle}
              onClick={() => setActiveTab(2)}
              aria-selected={activeTab === 2}
              aria-controls="violation-type"
              id="tab-2"
            >
              Violation Type
            </button>
            <button
              type="button"
              style={activeTab === 3 ? activeTabStyle : tabStyle}
              onClick={() => setActiveTab(3)}
              aria-selected={activeTab === 3}
              aria-controls="attached-evidence"
              id="tab-3"
            >
              Attached Evidence
            </button>
            <button
              type="button"
              style={activeTab === 4 ? activeTabStyle : tabStyle}
              onClick={() => setActiveTab(4)}
              aria-selected={activeTab === 4}
              aria-controls="guardian-information"
              id="tab-4"
            >
              Guardian Information
            </button>
            <button
              type="button"
              style={activeTab === 5 ? activeTabStyle : tabStyle}
              onClick={() => setActiveTab(5)}
              aria-selected={activeTab === 5}
              aria-controls="remarks"
              id="tab-5"
            >
              Remarks
            </button>
          </nav>

          {/* Tab Panels */}
          <section
            id="student-information"
            role="tabpanel"
            aria-labelledby="tab-1"
            hidden={activeTab !== 1}
          >
            <CRow className="g-5">
              <CCol md={6}>
                <h5 className="mb-3 mt-3">Student Information</h5>
                <div style={{ fontSize: '15px' }}>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Name:
                    </div>
                    <span>{report?.student_name}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Student ID:
                    </div>
                    <span>{report?.student_id}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Education Level:
                    </div>
                    <span>{report?.education_level?.name}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Department:
                    </div>
                    <span>{report?.department?.name}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Year & Course:
                    </div>
                    <span>
                      {report?.year} / {report?.program?.name}
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Section:
                    </div>
                    <span>{report?.section}</span>
                  </div>
                </div>
              </CCol>

              <CCol md={6}>
                <h5 className="mb-3 mt-3">Other Information</h5>
                <div style={{ fontSize: '15px' }}>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Date:
                    </div>
                    <span>{report?.created_at && formatDate(report.created_at)}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Location:
                    </div>
                    <span>{report?.location}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Time:
                    </div>
                    <span>{report?.time && formatTime(report.time)}</span>
                  </div>
                </div>
              </CCol>
            </CRow>
          </section>

          <section
            id="violation-type"
            role="tabpanel"
            aria-labelledby="tab-2"
            hidden={activeTab !== 2}
          >
            <CRow className="g-5">
              <CCol md={6}>
                {report?.violation_name !== 'Other Violations' && (
                  <>
                    <h5 className="mb-3 mt-3">{report?.violation_name}</h5>
                    <div style={{ fontSize: '15px', maxWidth: '300px' }}>{report?.violations}</div>
                  </>
                )}

                {report?.violation_name === 'Other Violations' && (
                  <>
                    <h5 className="mb-3 mt-3">{report?.other_violation_name}</h5>
                    <div style={{ fontSize: '15px', maxWidth: '300px' }}>
                      {report?.explain_specify}
                    </div>
                  </>
                )}
              </CCol>
            </CRow>
          </section>

          <section
            id="attached-evidence"
            role="tabpanel"
            aria-labelledby="tab-3"
            hidden={activeTab !== 3}
          >
            <CRow className="g-5">
              <CCol md={6}>
                <h5 className="mb-3 mt-3">Attached Evidence</h5>
                <div className="d-flex gap-4" style={{ fontSize: '15px' }}>
                  <img
                    style={{ width: '80px' }}
                    alt="Evidence 1"
                    src="https://thumbs.dreamstime.com/b/evidence-rubber-stamp-white-print-impress-overprint-proof-criminal-violation-confirmation-scene-murder-robbery-85484548.jpg"
                  />
                  <img
                    style={{ width: '80px' }}
                    alt="Evidence 2"
                    src="https://thumbs.dreamstime.com/b/evidence-rubber-stamp-white-print-impress-overprint-proof-criminal-violation-confirmation-scene-murder-robbery-85484548.jpg"
                  />
                  <img
                    style={{ width: '80px' }}
                    alt="Evidence 3"
                    src="https://thumbs.dreamstime.com/b/evidence-rubber-stamp-white-print-impress-overprint-proof-criminal-violation-confirmation-scene-murder-robbery-85484548.jpg"
                  />
                </div>
              </CCol>

              <CCol md={6}>
                <h5 className="mb-3 mt-3">Current Status</h5>

                <div style={{ fontSize: '15px' }}>
                  <div className="d-flex align-items-center gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-3">
                      Status:
                    </div>

                    <CBadge
                      style={{ position: 'relative', top: '-6px' }}
                      color={report?.status === 'pending' ? 'warning' : 'success'}
                    >
                      {report?.status === 'pending' ? 'Pending' : 'Resolved'}
                    </CBadge>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <div style={{ fontWeight: 600 }} className="mb-2">
                      Actions:
                    </div>

                    <div className="d-flex gap-2">
                      <CButton className="d-flex align-items-center" color="primary" size="sm">
                        <CIcon icon={cilCloudDownload} className="me-1" />
                        Download
                      </CButton>

                      <CButton className="d-flex align-items-center" color="primary" size="sm">
                        <CIcon icon={cilPrint} className="me-1" />
                        Print
                      </CButton>
                    </div>
                  </div>
                </div>
              </CCol>
            </CRow>
          </section>

          <section
            id="guardian-information"
            role="tabpanel"
            aria-labelledby="tab-5"
            hidden={activeTab !== 4}
          >
            <CRow>
              <CCol md={6}>
                <h5 className="mb-3 mt-3">Guardian Name</h5>

                <div style={{ fontSize: '15px', maxWidth: '300px' }}>{report?.guardian_name}</div>
              </CCol>

              <CCol md={6}>
                <h5 className="mb-3 mt-3">Phone Number</h5>

                <div style={{ fontSize: '15px', maxWidth: '300px' }}>
                  {report?.guardian_phone_number}
                </div>
              </CCol>
            </CRow>
          </section>

          <section id="remarks" role="tabpanel" aria-labelledby="tab-6" hidden={activeTab !== 5}>
            <CRow>
              <CCol md={6}>
                <h5 className="mb-3 mt-3">Remarks</h5>

                <div>{!report?.other_remarks ? 'N/A' : report.other_remarks}</div>
              </CCol>
            </CRow>
          </section>
        </div>
      </CCard>

      <Link to="/reports" className="text-decoration-none">
        <CButton className="d-flex align-items-center" color="primary" variant="outline">
          <CIcon icon={cilArrowLeft} className="me-1" />
          Go to reports page
        </CButton>
      </Link>

      {isLoading && <BackdropLoader />}
    </div>
  )
}

export default ReportDetails
