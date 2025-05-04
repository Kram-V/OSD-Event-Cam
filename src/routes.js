import React from 'react'
import Records from './views/records'
import RecordDetails from './views/record-details'
import ArchivedReports from './views/archived-reports'
import Departments from './views/departments'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Reports = React.lazy(() => import('./views/reports'))
const ReportDetails = React.lazy(() => import('./views/report-details'))
const ManageUsers = React.lazy(() => import('./views/manage-users'))
const UserProfile = React.lazy(() => import('./views/user-profile'))
const Help = React.lazy(() => import('./views/help'))

const adminRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/reports', name: 'Reports', element: Reports },
  { path: '/reports/:id', name: 'Report Details', element: ReportDetails },
  { path: '/archived-reports', name: 'Archived Reports', element: ArchivedReports },
  { path: '/student-records', name: 'Student Records', element: Records },
  { path: '/records/:id', name: 'Record Details', element: RecordDetails },
  { path: '/departments', name: 'Departments', element: Departments },
  { path: '/manage-users', name: 'Manage Users', element: ManageUsers },
  { path: '/user-profile', name: 'User Profile', element: UserProfile },
  { path: '/help', name: 'Help', element: Help },
]

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/reports', name: 'Reports', element: Reports },
  { path: '/reports/:id', name: 'Report Details', element: ReportDetails },
  { path: '/student-records', name: 'Student Records', element: Records },
  { path: '/records/:id', name: 'Record Details', element: RecordDetails },
  { path: '/departments', name: 'Departments', element: Departments },
  { path: '/user-profile', name: 'User Profile', element: UserProfile },
  { path: '/help', name: 'Help', element: Help },
]

export { routes, adminRoutes }
