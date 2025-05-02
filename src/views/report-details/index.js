import { cilArrowLeft, cilBell, cilCloudDownload, cilPrint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CRow, CCol } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

const ReportDetails = () => {
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
            <CTab aria-controls="remarks-pane" itemKey={4}>
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
                      <span>John Doe</span>
                    </div>
                    <div className="d-flex gap-2">
                      <div style={{ fontWeight: 600 }} className="mb-2">
                        Student ID:
                      </div>
                      <span>111111111</span>
                    </div>
                    <div className="d-flex gap-2">
                      <div style={{ fontWeight: 600 }} className="mb-2">
                        Grade & Section:
                      </div>
                      <span>N/A</span>
                    </div>
                    <div className="d-flex gap-2">
                      <div style={{ fontWeight: 600 }} className="mb-2">
                        Year & Course:
                      </div>
                      <span>N/A</span>
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
                      <span>2025-01-10</span>
                    </div>
                    <div className="d-flex gap-2">
                      <div style={{ fontWeight: 600 }} className="mb-2">
                        Location:
                      </div>
                      <span>N/A</span>
                    </div>
                    <div className="d-flex gap-2">
                      <div style={{ fontWeight: 600 }} className="mb-2">
                        Time:
                      </div>
                      <span>N/A</span>
                    </div>
                  </div>
                </CCol>
              </CRow>
            </CTabPanel>
            <CTabPanel className="p-3" aria-labelledby="violation-type-pane" itemKey={2}>
              <CRow className="g-5">
                <CCol md={6}>
                  <h5 className="mb-3 mt-3">Inappropriate Civilian Attire</h5>

                  <div style={{ fontSize: '15px', maxWidth: '300px' }}>
                    Croptop, Shorts, Leggings, Mini-skirt, Sandals/Slippers and Tattered Jeans
                  </div>
                </CCol>

                <CCol md={6}>
                  <h5 className="mb-3 mt-3">Other Violation</h5>

                  <div style={{ fontSize: '15px', maxWidth: '300px' }}>N/A</div>
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

                      <CBadge style={{ position: 'relative', top: '-6px' }} color="warning">
                        Pending
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

                        <CButton className="d-flex align-items-center" color="primary" size="sm">
                          <CIcon icon={cilBell} className="me-1" />
                          Notify Parent
                        </CButton>
                      </div>
                    </div>
                  </div>
                </CCol>
              </CRow>
            </CTabPanel>
            <CTabPanel className="p-3" aria-labelledby="current-status-pane" itemKey={4}>
              <CRow md={6}>
                <CCol md={6}>
                  <h5 className="mb-3 mt-3">Remarks</h5>

                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </div>
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
    </div>
  )
}

export default ReportDetails
