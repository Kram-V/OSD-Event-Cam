import { CBadge, CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CRow, CCol } from '@coreui/react'
import React from 'react'

const RecordDetails = () => {
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student Information</strong>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              padding: '4px 20px',
              borderRadius: '100px',
              color: 'darkred',
              fontWeight: 600,
            }}
          >
            <div style={{ fontWeight: 600 }}>Total Violations:</div>
            <span style={{ fontWeight: 600 }}>4</span>
          </div>
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
                    Student ID:
                  </div>
                  <span>11111111</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Educational Level:
                  </div>
                  <span>College</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Department:
                  </div>
                  <span>Engineering Department</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Year & Course:
                  </div>
                  <span>First Year / BS Civil Engineering</span>
                </div>

                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Section:
                  </div>
                  <span>BSCE12</span>
                </div>
              </div>
            </CCol>

            <CCol md={6}>
              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Date:
                  </div>
                  <span>10-20-2025</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Location:
                  </div>
                  <span>Outside</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Time:
                  </div>
                  <span>10:10:10</span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <strong>Inappropriate Civilian Attire</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="g-5">
            <CCol md={6}>
              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Violation:
                  </div>
                  <span>
                    Croptop, Shorts, Leggings, Mini-skirt, Sandals/Slippers and Tattered Jeans
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Other Violation:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Attached Evidence:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Status:
                  </div>
                  <span>
                    <CBadge color="warning">Pending</CBadge>
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Remarks:
                  </div>
                  <span>N/A</span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <strong>Hair Violation</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="g-5">
            <CCol md={6}>
              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Violation:
                  </div>
                  <span>Long Hair and Colored Hair</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Other Violation:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Attached Evidence:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Status:
                  </div>
                  <span>
                    <CBadge color="success">Resolved</CBadge>
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Remarks:
                  </div>
                  <span>N/A</span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <strong>Incomplete Uniform for Criminology</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="g-5">
            <CCol md={6}>
              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Violation:
                  </div>
                  <span>Lanyard, Whistle and Nameplate</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Other Violation:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Attached Evidence:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Status:
                  </div>
                  <span>
                    <CBadge color="success">Resolved</CBadge>
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Remarks:
                  </div>
                  <span>N/A</span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <strong>Not Wearing Prescribed Uniform</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="g-5">
            <CCol md={6}>
              <div style={{ fontSize: '15px' }}>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Violation:
                  </div>
                  <span>No Patch and No Necktie</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Other Violation:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Attached Evidence:
                  </div>
                  <span>N/A</span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Status:
                  </div>
                  <span>
                    <CBadge color="warning">Pending</CBadge>
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <div style={{ fontWeight: 600 }} className="mb-2">
                    Remarks:
                  </div>
                  <span>N/A</span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default RecordDetails
