import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { CRow, CCol } from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilHistory, cilPeople, cilShieldAlt, cilWarning } from '@coreui/icons'
import Card from '../../components/Card'

import ContentLoader from 'react-content-loader'
import { getStats } from '../../http/dashboard'

const WidgetsDropdown = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [totalAdminUsers, setTotalAdminUsers] = useState(0)
  const [totalNonAdminUsers, setTotalNonAdminUsers] = useState(0)

  const getAllStats = () => {
    setIsLoading(true)

    getStats()
      .then((res) => {
        setTotalAdminUsers(res.data.total_admin_users)
        setTotalNonAdminUsers(res.data.total_non_admin_users)
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getAllStats()
  }, [])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        {isLoading ? (
          <ContentLoader
            viewBox="0 0 100% 110"
            height="110"
            width="100%"
            style={{ position: 'relative', top: '-1px' }}
          >
            <rect x="3" y="3" rx="10" ry="10" width="100%" height="110" />
          </ContentLoader>
        ) : (
          <Card
            total={50}
            subText="Total Student Reports"
            icon={<CIcon icon={cilWarning} size="xl" />}
            bgColor="bg-danger"
          />
        )}
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        {isLoading ? (
          <ContentLoader
            viewBox="0 0 100% 110"
            height="110"
            width="100%"
            style={{ position: 'relative', top: '-1px' }}
          >
            <rect x="3" y="3" rx="10" ry="10" width="100%" height="110" />
          </ContentLoader>
        ) : (
          <Card
            total={32}
            subText="Total Pending Reports"
            icon={<CIcon icon={cilHistory} size="xl" />}
            bgColor="bg-warning"
          />
        )}
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        {isLoading ? (
          <ContentLoader
            viewBox="0 0 100% 110"
            height="110"
            width="100%"
            style={{ position: 'relative', top: '-1px' }}
          >
            <rect x="3" y="3" rx="10" ry="10" width="100%" height="110" />
          </ContentLoader>
        ) : (
          <Card
            total={32}
            subText="Total Resolved Reports"
            icon={<CIcon icon={cilCheckCircle} size="xl" />}
            bgColor="bg-success"
          />
        )}
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        {isLoading ? (
          <ContentLoader
            viewBox="0 0 100% 110"
            height="110"
            width="100%"
            style={{ position: 'relative', top: '-1px' }}
          >
            <rect x="3" y="3" rx="10" ry="10" width="100%" height="110" />
          </ContentLoader>
        ) : (
          <Card
            total={totalAdminUsers}
            subText="Total Admin Users"
            icon={<CIcon icon={cilShieldAlt} size="xl" />}
          />
        )}
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        {isLoading ? (
          <ContentLoader
            viewBox="0 0 100% 110"
            height="110"
            width="100%"
            style={{ position: 'relative', top: '-1px' }}
          >
            <rect x="3" y="3" rx="10" ry="10" width="100%" height="110" />
          </ContentLoader>
        ) : (
          <Card
            total={totalNonAdminUsers}
            subText="Total Staff Users"
            icon={<CIcon icon={cilPeople} size="xl" />}
            bgColor="bg-info"
          />
        )}
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
