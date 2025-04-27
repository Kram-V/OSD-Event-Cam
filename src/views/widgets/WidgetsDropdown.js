import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilHistory, cilPeople, cilShieldAlt, cilWarning } from '@coreui/icons'
import Card from '../../components/Card'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <Card
          total={50}
          subText="Total Student Reports"
          icon={<CIcon icon={cilWarning} size="xl" />}
          bgColor="bg-danger"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <Card
          total={32}
          subText="Total Pending Reports"
          icon={<CIcon icon={cilHistory} size="xl" />}
          bgColor="bg-warning"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <Card
          total={32}
          subText="Total Resolved Reports"
          icon={<CIcon icon={cilCheckCircle} size="xl" />}
          bgColor="bg-success"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <Card
          total={5}
          subText="Total Admin Users"
          icon={<CIcon icon={cilShieldAlt} size="xl" />}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <Card
          total={25}
          subText="Total Staff Users"
          icon={<CIcon icon={cilPeople} size="xl" />}
          bgColor="bg-info"
        />
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
