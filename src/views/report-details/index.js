import { cilArrowLeft, cilCloudDownload, cilPrint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCard, CCardHeader } from '@coreui/react'
import { CRow, CCol } from '@coreui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import { getReport } from '../../http/reports'
import BackdropLoader from '../../components/BackdropLoader'
import { formatDate, formatTime } from '../../helper'

const ReportDetails = () => {
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

        <CTabs activeItemKey={1} className="p-4">
          <CTabList variant="underline-border">
            <CTab aria-controls="student-information-pane" itemKey={1}>
              Student Information
            </CTab>
            <CTab aria-controls="violation-type-pane" itemKey={2}>
              Violation Type
            </CTab>

            <CTab aria-controls="attached-evidence-pane" itemKey={3}>
              Attached Evidence
            </CTab>

            <CTab aria-controls="attached-evidence-pane" itemKey={4}>
              Guardian Information
            </CTab>

            <CTab aria-controls="remarks-pane" itemKey={5}>
              Remarks
            </CTab>
          </CTabList>
          <CTabContent>
            <CTabPanel className="p-3" aria-labelledby="student-information-pane" itemKey={1}>
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
                        Department:
                      </div>
                      <span>{report?.department?.name}</span>
                    </div>
                    <div className="d-flex gap-2">
                      <div style={{ fontWeight: 600 }} className="mb-2">
                        Year & Course:
                      </div>
                      <span>N/A / {report?.program?.name}</span>
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
            </CTabPanel>
            <CTabPanel className="p-3" aria-labelledby="violation-type-pane" itemKey={2}>
              <CRow className="g-5">
                <CCol md={6}>
                  {report?.violation_name !== 'Other Violations' && (
                    <>
                      <h5 className="mb-3 mt-3">{report?.violation_name}</h5>
                      <div style={{ fontSize: '15px', maxWidth: '300px' }}>
                        {report?.violations}
                      </div>
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
            </CTabPanel>
            <CTabPanel className="p-3" aria-labelledby="other-violation-pane" itemKey={3}>
              <CRow className="g-5">
                <CCol md={6}>
                  <h5 className="mb-3 mt-3">Attached Evidence</h5>

                  <div className="d-flex gap-4" style={{ fontSize: '15px' }}>
                    <img
                      style={{ width: '80px' }}
                      src="https://thumbs.dreamstime.com/b/evidence-rubber-stamp-white-print-impress-overprint-proof-criminal-violation-confirmation-scene-murder-robbery-85484548.jpg"
                    />
                    <img
                      style={{ width: '80px' }}
                      src="https://thumbs.dreamstime.com/b/evidence-rubber-stamp-white-print-impress-overprint-proof-criminal-violation-confirmation-scene-murder-robbery-85484548.jpg"
                    />
                    <img
                      style={{ width: '80px' }}
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
            </CTabPanel>
            <CTabPanel className="p-3" aria-labelledby="violation-type-pane" itemKey={4}>
              <CRow className="g-5">
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
            </CTabPanel>
            <CTabPanel className="p-3" aria-labelledby="current-status-pane" itemKey={5}>
              <CRow md={6}>
                <CCol md={6}>
                  <h5 className="mb-3 mt-3">Remarks</h5>

                  <div>{!report?.other_remarks ? 'N/A' : report.other_remarks}</div>
                </CCol>
              </CRow>
            </CTabPanel>
          </CTabContent>
        </CTabs>
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
