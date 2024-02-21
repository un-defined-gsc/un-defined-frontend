// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import profile from './api/profile'

// Custom middleware
const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })

export const store = configureStore({
  reducer: {
    profile,
  },
  middleware: customizedMiddleware,
})
