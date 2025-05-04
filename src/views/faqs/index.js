import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableRow,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableDataCell,
  CTooltip,
  CButton,
  CFormSelect,
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CInputGroup,
  CInputGroupText,
  CModalFooter,
  CSpinner,
  CFormTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowLeft,
  cilArrowRight,
  cilBuilding,
  cilEducation,
  cilInfo,
  cilNotes,
  cilPencil,
  cilPlus,
  cilText,
  cilTrash,
} from '@coreui/icons'

import { Bounce, toast } from 'react-toastify'
import BackdropLoader from '../../components/BackdropLoader'
import { createFaq, deleteFaq, getAllFaqs, updateFaq } from '../../http/faqs'

const Faqs = () => {
  const [faqs, setFaqs] = useState([])
  const [faqId, setFaqId] = useState(null)
  const [question, setQuestion] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const [isEditLoading, setIsEditLoading] = useState(false)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false)

  const handleCreateFaq = () => {
    setIsCreateLoading(true)

    createFaq({ question, description })
      .then((res) => {
        toast.success('You have created faq successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        getFaqs()
        handleReset()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsCreateLoading(false))
  }

  const handleEditFaq = (data) => {
    setQuestion(data.question)
    setDescription(data.description)
    setFaqId(data.id)
    setIsEditModalOpen(true)
  }

  const handleUpdateFaq = () => {
    setIsEditLoading(true)

    updateFaq({ question, description }, faqId)
      .then((res) => {
        toast.success('You have updated faq successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })

        getFaqs()
        handleEditReset()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsEditLoading(false))
  }

  const handleDeleteFaq = (id) => {
    setFaqId(id)
    setIsDeleteModal(true)
  }

  const handleDelete = () => {
    setIsDeleteLoading(true)

    deleteFaq(faqId)
      .then((res) => {
        toast.success('You have deleted faq successfully', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
        handleDeleteReset()
        getFaqs()
      })
      .catch((e) => console.log(e))
      .finally(() => setIsDeleteLoading(false))
  }

  const getFaqs = () => {
    setIsLoading(true)

    getAllFaqs()
      .then((res) => {
        setFaqs(res.data.faqs)
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }

  const handleReset = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setQuestion('')
    setDescription('')
    setIsModalOpen(false)
    setErrors(null)
  }

  const handleEditReset = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setQuestion('')
    setDescription('')
    setIsEditModalOpen(false)
    setErrors(null)
  }

  const handleDeleteReset = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setIsDeleteModal(false)
  }

  useEffect(() => {
    getFaqs()
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <CFormInput style={{ width: '230px' }} type="text" placeholder="Search" />

        <div className="d-flex align-items-center gap-2 ">
          <CButton
            className="d-flex align-items-center"
            color="primary"
            onClick={() => setIsModalOpen(true)}
          >
            <CIcon icon={cilPlus} className="me-1" />
            Create FAQ
          </CButton>
        </div>
      </div>

      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Question</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {faqs.length > 0 &&
            !isLoading &&
            faqs.map((faq, i) => (
              <CTableRow key={i}>
                <CTableDataCell>{faq.question}</CTableDataCell>
                <CTableDataCell>{faq.description}</CTableDataCell>
                <CTableDataCell>
                  <CTooltip content="Edit" placement="top">
                    <CIcon
                      icon={cilPencil}
                      className="me-2 text-secondary"
                      role="button"
                      title="Edit"
                      onClick={() => handleEditFaq(faq)}
                    />
                  </CTooltip>

                  <CTooltip content="Delete" placement="top">
                    <CIcon
                      icon={cilTrash}
                      className="me-2 text-secondary"
                      role="button"
                      title="Delete"
                      onClick={() => handleDeleteFaq(faq.id)}
                    />
                  </CTooltip>
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>

        {isLoading && (
          <CTableBody>
            <CTableRow>
              <CTableDataCell colSpan={8} className="text-center">
                No data available
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        )}

        {faqs.length === 0 && !isLoading && (
          <CTableBody>
            <CTableRow>
              <CTableDataCell colSpan={8} className="text-center">
                No data available
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        )}

        {isLoading && <BackdropLoader />}
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

      {/* CREATE MODAL */}
      <CModal
        backdrop="static"
        alignment="center"
        scrollable
        visible={isModalOpen}
        onClose={handleReset}
        aria-labelledby="VerticallyCenteredScrollableExample2"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Create Faq</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilInfo} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Question"
                  autoComplete="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </CInputGroup>
              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['question'] && errors['question'][0]}
              </div>
            </div>

            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilNotes} />
                </CInputGroupText>
                <CFormTextarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </CInputGroup>
              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['description'] && errors['description'][0]}
              </div>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton disabled={isCreateLoading} color="secondary" onClick={handleReset}>
            Close
          </CButton>
          <CButton disabled={isCreateLoading} onClick={handleCreateFaq} color="primary">
            {isCreateLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Create'}
          </CButton>
        </CModalFooter>
      </CModal>

      {/* EDIT MODAL */}
      <CModal
        backdrop="static"
        alignment="center"
        scrollable
        visible={isEditModalOpen}
        onClose={handleEditReset}
        aria-labelledby="VerticallyCenteredScrollableExample2"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Edit Program</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilInfo} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Question"
                  autoComplete="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </CInputGroup>
              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['question'] && errors['question'][0]}
              </div>
            </div>

            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilNotes} />
                </CInputGroupText>
                <CFormTextarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </CInputGroup>
              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['description'] && errors['description'][0]}
              </div>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton disabled={isEditLoading} color="secondary" onClick={handleEditReset}>
            Close
          </CButton>
          <CButton disabled={isEditLoading} onClick={handleUpdateFaq} color="primary">
            {isEditLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Update'}
          </CButton>
        </CModalFooter>
      </CModal>

      {/* DELETE MODAL CONFIRMATION */}
      <CModal
        backdrop="static"
        visible={isDeleteModal}
        onClose={handleDeleteReset}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="LiveDemoExampleLabel">Delete FAQ</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete this faq?</CModalBody>
        <CModalFooter>
          <CButton disabled={isDeleteLoading} color="secondary" onClick={handleDeleteReset}>
            Close
          </CButton>
          <CButton disabled={isDeleteLoading} color="primary" onClick={handleDelete}>
            {isDeleteLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Delete'}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Faqs
