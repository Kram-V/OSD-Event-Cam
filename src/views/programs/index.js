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
  cilEducation,
  cilPencil,
  cilPlus,
} from '@coreui/icons'

import { createDepartment, getAllDepartments, updateDepartment } from '../../http/departments'

import { Bounce, toast } from 'react-toastify'
import { createProgram, getAllPrograms, updateProgram } from '../../http/programs'

const Departments = () => {
  const [programs, setPrograms] = useState([])
  const [departments, setDepartments] = useState([])
  const [programId, setProgramId] = useState(null)
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [errors, setErrors] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const [isEditLoading, setIsEditLoading] = useState(false)

  const handleCreateProgram = () => {
    setIsCreateLoading(true)

    createProgram({ department, name })
      .then((res) => {
        toast.success('You have created program successfully', {
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

        getPrograms()
        handleReset()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsCreateLoading(false))
  }

  const handleEditProgram = (data) => {
    setName(data.name)
    setProgramId(data.id)
    setDepartment(data.department_id)
    setIsEditModalOpen(true)
  }

  const handleUpdateDepartment = () => {
    setIsEditLoading(true)

    updateProgram({ name, department }, programId)
      .then((res) => {
        toast.success('You have updated program successfully', {
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

        getPrograms()
        handleEditReset()
        setErrors(null)
      })
      .catch((e) => {
        setErrors(null)
        setErrors(e.response.data.errors)
      })
      .finally(() => setIsEditLoading(false))
  }

  const getPrograms = () => {
    getAllPrograms()
      .then((res) => {
        setPrograms(res.data.programs)
      })
      .catch((e) => console.log(e))
  }

  const getDepartments = () => {
    getAllDepartments()
      .then((res) => {
        setDepartments(res.data.departments)
      })
      .catch((e) => console.log(e))
  }

  const handleReset = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setDepartment('')
    setName('')
    setIsModalOpen(false)
    setErrors(null)
  }

  const handleEditReset = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setDepartment('')
    setName('')
    setIsEditModalOpen(false)
    setErrors(null)
  }

  useEffect(() => {
    getPrograms()
    getDepartments()
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
            Create Program
          </CButton>
        </div>
      </div>

      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Department Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Program</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">Code</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell> */}
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {programs.map((program, i) => (
            <CTableRow key={i}>
              <CTableDataCell>{program.department.name}</CTableDataCell>
              <CTableDataCell>{program.name}</CTableDataCell>
              {/* <CTableDataCell>{program.code ? program.code : 'N/A'}</CTableDataCell>
              <CTableDataCell>{program.description ? program.description : 'N/A'}</CTableDataCell> */}
              <CTableDataCell>
                <CTooltip content="Edit" placement="top">
                  <CIcon
                    icon={cilPencil}
                    className="me-2 text-secondary"
                    role="button"
                    title="Edit"
                    onClick={() => handleEditProgram(program)}
                  />
                </CTooltip>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
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
          <CModalTitle id="VerticallyCenteredScrollableExample2">Create Program</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilBuilding} />
                </CInputGroupText>
                <CFormSelect value={department} onChange={(e) => setDepartment(e.target.value)}>
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </CFormSelect>
              </CInputGroup>

              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['department'] && errors['department'][0]}
              </div>
            </div>

            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilEducation} />
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
          <CButton disabled={isCreateLoading} onClick={handleCreateProgram} color="primary">
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
                  <CIcon icon={cilBuilding} />
                </CInputGroupText>
                <CFormSelect value={department} onChange={(e) => setDepartment(e.target.value)}>
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </CFormSelect>
              </CInputGroup>

              <div style={{ color: 'red', fontSize: '14px' }}>
                {errors && errors['department'] && errors['department'][0]}
              </div>
            </div>

            <div className="mb-3">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilEducation} />
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
          <CButton disabled={isEditLoading} onClick={handleUpdateDepartment} color="primary">
            {isEditLoading ? <CSpinner style={{ width: '20px', height: '20px' }} /> : 'Update'}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Departments
