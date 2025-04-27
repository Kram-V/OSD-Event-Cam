import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilArrowThickToRight, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatarDefault from './../../assets/images/avatars/default.png'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../http/auth'
import { useUserDetailsContext } from '../../contexts/UserDetailsContext'

const AppHeaderDropdown = () => {
  const { removeUserDetails } = useUserDetailsContext()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
      .then((res) => {
        removeUserDetails()

        navigate('/login')
      })
      .catch((e) => console.log(e))
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatarDefault} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>

        <Link to="/user-profile" className="dropdown-item d-flex align-items-center">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </Link>

        <Link onClick={handleLogout} className="dropdown-item d-flex align-items-center">
          <CIcon icon={cilArrowThickToRight} className="me-2" />
          Logout
        </Link>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
