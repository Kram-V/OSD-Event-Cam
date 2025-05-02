import React from 'react'
import Records from './views/records'
import RecordDetails from './views/record-details'

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
  { path: '/records', name: 'Records', element: Records },
  { path: '/records/:id', name: 'Records', element: RecordDetails },
  { path: '/manage-users', name: 'Manage Users', element: ManageUsers },
  { path: '/user-profile', name: 'User Profile', element: UserProfile },
  { path: '/help', name: 'Help', element: Help },
]

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/reports', name: 'Reports', element: Reports },
  { path: '/reports/:id', name: 'Report Details', element: ReportDetails },
  { path: '/records', name: 'Records', element: Records },
  { path: '/records/:id', name: 'Records', element: RecordDetails },
  { path: '/user-profile', name: 'User Profile', element: UserProfile },
  { path: '/help', name: 'Help', element: Help },
]

export { routes, adminRoutes }
