import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'
import { UserDetailsProvider } from './contexts/UserDetailsContext'

createRoot(document.getElementById('root')).render(
  <UserDetailsProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserDetailsProvider>,
)
