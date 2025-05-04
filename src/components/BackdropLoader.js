import { CSpinner } from '@coreui/react'
import React from 'react'

const BackdropLoader = () => {
  return (
    <div style={styles.backdrop}>
      <CSpinner style={{ width: '38px', height: '38px' }} />
      <span style={{ fontSize: '22px' }}>Loading Data...</span>
    </div>
  )
}

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    gap: '10px',
  },
}

export default BackdropLoader
