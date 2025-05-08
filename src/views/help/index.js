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
import { getAllUserInstructions } from '../../http/user-instructions'

const Help = () => {
  const { user } = useUserDetailsContext()

  const [faqs, setFaqs] = useState([])
  const [userInstructions, setUserInstructions] = useState([])

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

  const navigateToUserInstructions = () => {
    navigate('/user-instructions')
  }

  const fetFaqs = () => {
    getAllFaqs()
      .then((res) => {
        setFaqs(res.data.faqs)
      })
      .catch((e) => console.log(e))
  }

  const getUserInstructions = () => {
    getAllUserInstructions()
      .then((res) => {
        setUserInstructions(res.data.user_instructions)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    fetFaqs()
    getUserInstructions()
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
              {userInstructions.length > 0 ? (
                <CTabs activeItemKey={1}>
                  <CTabList variant="tabs" layout="fill">
                    {userInstructions.map((instruction, i) => (
                      <CTab key={i} aria-controls="home-tab-pane" itemKey={i + 1}>
                        {instruction.instruction_name}
                      </CTab>
                    ))}
                  </CTabList>

                  <CTabContent>
                    {userInstructions.map((instruction, i) => (
                      <CTabPanel
                        key={i}
                        className="py-3"
                        aria-labelledby="home-tab-pane"
                        itemKey={i + 1}
                      >
                        {instruction.description}
                      </CTabPanel>
                    ))}
                  </CTabContent>
                </CTabs>
              ) : (
                <CCardBody style={{ textAlign: 'center', padding: '100px 0px' }}>
                  <h2>No User Instructions Yet</h2>
                  <p>To add user instructions, you may add by clicking the button below</p>
                  <CButton
                    type="submit"
                    color="primary"
                    className="px-4"
                    onClick={navigateToUserInstructions}
                  >
                    Add User Instruction
                  </CButton>
                </CCardBody>
              )}
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
