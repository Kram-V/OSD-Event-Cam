import React, { useEffect, useState } from 'react'
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

import CIcon from '@coreui/icons-react'
import { cilInfo } from '@coreui/icons'

import { useUserDetailsContext } from '../../contexts/UserDetailsContext'
import { useNavigate } from 'react-router-dom'
import { getAllFaqs } from '../../http/faqs'

const Help = () => {
  const { user } = useUserDetailsContext()

  const [faqs, setFaqs] = useState([])

  const [fullname, setFullname] = useState(user.fullname)
  const [email, setEmail] = useState(user.email)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const navigateToAddingFaqs = () => {
    navigate('/faqs')
  }

  useEffect(() => {
    getAllFaqs()
      .then((res) => {
        setFaqs(res.data.faqs)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      <div className="d-flex align-items-center gap-1">
        <h4>FAQs</h4>
      </div>

      <CRow>
        {faqs.length > 0 ? (
          <CCol md={12}>
            <CAccordion className="mb-4">
              {faqs.map((faq, i) => (
                <CAccordionItem itemKey={i + 1}>
                  <CAccordionHeader>
                    <b>{faq.question}?</b>
                  </CAccordionHeader>
                  <CAccordionBody>{faq.description}</CAccordionBody>
                </CAccordionItem>
              ))}
            </CAccordion>
          </CCol>
        ) : (
          <CCol md={12}>
            <CCard className="mb-4">
              <CCardBody style={{ textAlign: 'center', padding: '100px 0px' }}>
                <h2>NO FAQs Yet</h2>
                <p>To add FAQs, you may add by clicking the button below</p>
                <CButton
                  type="submit"
                  color="primary"
                  className="px-4"
                  onClick={navigateToAddingFaqs}
                >
                  Add FAQs
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        )}

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
              <CForm onSubmit={handleSubmit}>
                <CRow className="gap-4">
                  <CCol xs={12}>
                    <CFormInput type="text" placeholder="Name" value={fullname} disabled />
                  </CCol>

                  <CCol xs={12}>
                    <CFormInput type="email" placeholder="Email" value={email} disabled />
                  </CCol>

                  <CCol xs={12}>
                    <CFormTextarea
                      placeholder="Enter your message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </CCol>

                  <CCol xs={6}>
                    <CButton type="submit" color="primary" className="px-4">
                      Submit
                    </CButton>
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
