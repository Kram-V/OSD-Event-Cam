import React from 'react'
import Records from './views/records'
import RecordDetails from './views/record-details'
import ArchivedReports from './views/archived-reports'
import Departments from './views/departments'
import Programs from './views/programs'
import Faqs from './views/faqs'
import UserInstructions from './views/user-instructions'
import EducationLevels from './views/education-levels'
import IntegratedSchoolReports from './views/is-reports'
import IntegratedReportDetails from './views/is-report-details'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Reports = React.lazy(() => import('./views/reports'))
const ReportDetails = React.lazy(() => import('./views/report-details'))
const ManageUsers = React.lazy(() => import('./views/manage-users'))
const UserProfile = React.lazy(() => import('./views/user-profile'))
const Help = React.lazy(() => import('./views/help'))

const adminRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/college-reports', name: 'Reports', element: Reports },
  { path: '/college-reports/:id', name: 'Report Details', element: ReportDetails },
  { path: '/integrated-school-reports', name: 'Reports', element: IntegratedSchoolReports },
  { path: '/integrated-school-reports/:id', name: 'Reports', element: IntegratedReportDetails },
  { path: '/archived-reports', name: 'Archived Reports', element: ArchivedReports },
  { path: '/student-records', name: 'Student Records', element: Records },
  { path: '/records/:id', name: 'Record Details', element: RecordDetails },
  { path: '/departments', name: 'Departments', element: Departments },
  { path: '/programs', name: 'Programs', element: Programs },
  { path: '/faqs', name: 'FAQs', element: Faqs },
  { path: '/user-instructions', name: 'User Instructions', element: UserInstructions },
  { path: '/manage-users', name: 'Manage Users', element: ManageUsers },
  { path: '/user-profile', name: 'User Profile', element: UserProfile },
  { path: '/help', name: 'Help', element: Help },
]

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/college-reports', name: 'Reports', element: Reports },
  { path: '/college-reports/:id', name: 'Report Details', element: ReportDetails },
  { path: '/integrated-school-reports', name: 'Reports', element: IntegratedSchoolReports },
  { path: '/integrated-school-reports/:id', name: 'Reports', element: IntegratedReportDetails },
  { path: '/student-records', name: 'Student Records', element: Records },
  { path: '/records/:id', name: 'Record Details', element: RecordDetails },
  { path: '/departments', name: 'Departments', element: Departments },
  { path: '/programs', name: 'Programs', element: Programs },
  { path: '/faqs', name: 'FAQs', element: Faqs },
  { path: '/user-instructions', name: 'User Instructions', element: UserInstructions },
  { path: '/user-profile', name: 'User Profile', element: UserProfile },
  { path: '/help', name: 'Help', element: Help },
]

export { routes, adminRoutes }
