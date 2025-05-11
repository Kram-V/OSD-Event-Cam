import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilFile,
  cilSpeedometer,
  cilUser,
  cilInfo,
  cilArrowThickToRight,
  cilGroup,
  cilNotes,
  cilTrash,
  cilHistory,
  cilBuilding,
  cilEducation,
  cilDescription,
  cilSchool,
  cilChartLine,
  cilListNumbered,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const navAdmin = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/reports',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Archived Reports',
    to: '/archived-reports',
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Student Records',
    to: '/student-records',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Education Levels',
    to: '/education-levels',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Departments',
    to: '/departments',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Programs',
    to: '/programs',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'FAQs',
    to: '/faqs',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Instructions',
    to: '/user-instructions',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Manage Users',
    to: '/manage-users',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Profile',
    to: '/user-profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Help',
    to: '/help',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
]

const nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/reports',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Student Records',
    to: '/student-records',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Education Levels',
    to: '/education-levels',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Departments',
    to: '/departments',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Programs',
    to: '/programs',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'FAQs',
    to: '/faqs',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Instructions',
    to: '/user-instructions',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Profile',
    to: '/user-profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Help',
    to: '/help',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
]

export { navAdmin, nav }
