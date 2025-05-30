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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowLeft,
  cilArrowRight,
  cilBuilding,
  cilListNumbered,
  cilPencil,
  cilPlus,
} from '@coreui/icons'

import { createDepartment, getAllDepartments, updateDepartment } from '../../http/departments'

import { Bounce, toast } from 'react-toastify'
import BackdropLoader from '../../components/BackdropLoader'
import {
  createEducationLevel,
  getAllEducationLevels,
  updateEducationLevel,
} from '../../http/education-levels'

const EducationLevels = () => {
  const [educationLevels, setEducationLevels] = useState([])
  const [educationLevelId, setEducationLevelId] = useState(null)
  const [name, setName] = useState('')
  const [errors, setErrors] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const [isEditLoading, setIsEditLoading] = useState(false)

  const handleCreateEducationLevel = () => {
    setIsCreateLoading(true)

    createEducationLevel({ name })
      .then((res) => {
        toast.success('You have created education level successfully', {
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

        getEducationLevels()
        handleReset()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsCreateLoading(false))
  }

  const handleEditEducationLevel = (data) => {
    setName(data.name)
    setEducationLevelId(data.id)
    setIsEditModalOpen(true)
  }

  const handleUpdateEducationLevel = () => {
    setIsEditLoading(true)

    updateEducationLevel({ name }, educationLevelId)
      .then((res) => {
        toast.success('You have updated education level successfully', {
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

        getEducationLevels()
        handleEditReset()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsEditLoading(false))
  }

  const getEducationLevels = () => {
    setIsLoading(true)

    getAllEducationLevels()
      .then((res) => {
        setEducationLevels(res.data.education_levels)
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }

  const handleReset = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setName('')
    setIsModalOpen(false)
    setErrors(null)
  }

  const handleEditReset = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setEducationLevelId(null)
    setName('')
    setIsEditModalOpen(false)
    setErrors(null)
  }

  useEffect(() => {
    getEducationLevels()
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
            Create Education Level
          </CButton>
        </div>
      </div>

      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" style={{ width: '35%' }}>
              #
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ width: '50%' }}>
              Education Level
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {educationLevels.length > 0 &&
            !isLoading &&
            educationLevels.map((educationLevel, i) => (
              <CTableRow key={i}>
                <CTableDataCell>{i + 1}</CTableDataCell>
                <CTableDataCell>{educationLevel.name}</CTableDataCell>
                <CTableDataCell>
                  <CTooltip content="Edit" placement="top">
                    <CIcon
                      icon={cilPencil}
                      className="me-2 text-secondary"
                      role="button"
                      title="Edit"
                      onClick={() => handleEditEducationLevel(educationLevel)}
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

        {educationLevels.length === 0 && !isLoading && (
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
          <CModalTitle id="VerticallyCenteredScrollableExample2">
            Create Education Level
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilListNumbered} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </CInputGroup>
              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['name'] && errors['name'][0]}
              </div>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton disabled={isCreateLoading} color="secondary" onClick={handleReset}>
            Close
          </CButton>
          <CButton disabled={isCreateLoading} onClick={handleCreateEducationLevel} color="primary">
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
          <CModalTitle id="VerticallyCenteredScrollableExample2">Edit Education Level</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilBuilding} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </CInputGroup>
              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['name'] && errors['name'][0]}
              </div>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton disabled={isEditLoading} color="secondary" onClick={handleEditReset}>
            Close
          </CButton>
          <CButton disabled={isEditLoading} onClick={handleUpdateEducationLevel} color="primary">
            {isEditLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Update'}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default EducationLevels
