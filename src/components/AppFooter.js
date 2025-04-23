import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <span className="ms-1">&copy; 2025 NEU Student Devs.</span>
    </CFooter>
  )
}

export default React.memo(AppFooter)
