import { cilArrowLeft, cilCloudDownload, cilPrint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CRow, CCol } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ReportDetails = () => {
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Report Details</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="g-5">
            <CCol md={6}>
              <h5 className="mb-3">Student Information</h5>

              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Name:
                  </div>
                  <span>John Doe</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    ID:
                  </div>
                  <span>111111111</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Course:
                  </div>
                  <span>Computer Science</span>
                </div>
              </div>
            </CCol>

            <CCol md={6}>
              <h5 className="mb-3">Violation Information</h5>

              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Type:
                  </div>
                  <span>Validation Type 1</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Date:
                  </div>
                  <span>2025-01-10</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Description:
                  </div>
                  <span>This is my sample description for this violation </span>
                </div>
              </div>
            </CCol>

            <CCol md={6}>
              <h5 className="mb-3">Attached Evidence</h5>

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
              <h5 className="mb-3">Current Status</h5>

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
                  </div>
                </div>
              </div>
            </CCol>

            <CCol md={6}>
              <h5 className="mb-3">Remarks</h5>

              <div>------------</div>
            </CCol>
          </CRow>
        </CCardBody>
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
