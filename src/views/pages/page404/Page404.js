import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'

import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div
      style={{ padding: '100px 0px' }}
      className="bg-body-tertiary d-flex flex-row align-items-center"
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="d-flex flex-column justify-content-center align-items-center  text-center">
              <h1 className="display-3 me-4">404</h1>

              <div>
                <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
                <p className="text-body-secondary">The page you are looking for was not found.</p>
              </div>

              <div>
                <Link to="/dashboard">Go Back to Dashboard</Link>
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
