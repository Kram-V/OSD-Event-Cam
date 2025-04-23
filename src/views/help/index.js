import React from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormTextarea,
  CRow,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
} from '@coreui/react'

import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilInfo } from '@coreui/icons'

const Help = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-1">
        <h4>FAQs</h4>{' '}
        <CIcon
          style={{ top: '-2px' }}
          className="position-relative"
          icon={cilInfo}
          height={25}
          width={25}
        />
      </div>

      <CRow>
        <CCol md={12}>
          <CAccordion className="mb-4">
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>
                <b>Who can create reports in the system?</b>
              </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>
                <b>Can I customize the format of a report?</b>
              </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={3}>
              <CAccordionHeader>
                <b>Can I filter or sort the data in reports?</b>
              </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={4}>
              <CAccordionHeader>
                <b>Can I filter or sort the data in reports?</b>
              </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={5}>
              <CAccordionHeader>
                <b>Can reports be exported or printed?</b>
              </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </CCol>

        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>User Instructions</strong>
            </CCardHeader>
            <CCardBody>
              <CTabs activeItemKey={1}>
                <CTabList variant="tabs" layout="fill">
                  <CTab aria-controls="home-tab-pane" itemKey={1}>
                    Instruction 1
                  </CTab>
                  <CTab aria-controls="profile-tab-pane" itemKey={2}>
                    Instruction 2
                  </CTab>
                  <CTab aria-controls="contact-tab-pane" itemKey={3}>
                    Instruction 3
                  </CTab>
                  <CTab aria-controls="contact-tab-pane" itemKey={4}>
                    Instruction 4
                  </CTab>
                </CTabList>
                <CTabContent>
                  <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
                    nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                    torquent per conubia nostra inceptos himenaeos.
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
                    nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                    torquent per conubia nostra inceptos himenaeos.
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
                    nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                    torquent per conubia nostra inceptos himenaeos.
                  </CTabPanel>
                  <CTabPanel className="py-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
                    nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                    torquent per conubia nostra inceptos himenaeos.
                  </CTabPanel>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Contact Form</strong> (For Technical Support)
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CRow className="gap-4">
                  <CCol xs={12}>
                    <CFormInput type="text" placeholder="Name" />
                  </CCol>

                  <CCol xs={12}>
                    <CFormInput type="email" placeholder="Email" />
                  </CCol>

                  <CCol xs={12}>
                    <CFormTextarea placeholder="Enter your message" rows={4} />
                  </CCol>

                  <CCol xs={6}>
                    <Link to="/dashboard">
                      <CButton color="primary" className="px-4">
                        Submit
                      </CButton>
                    </Link>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Help
