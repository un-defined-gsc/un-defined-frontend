// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import profile from './api/profile'
import post from './api/post'

// Custom middleware
const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })

export const store = configureStore({
  reducer: {
    profile,
    post,
  },
  middleware: customizedMiddleware,
})
