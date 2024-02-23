// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import profile from './api/profile'
import post from './api/post'
import verify from './api/verify'

// Custom middleware
const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })

export const store = configureStore({
  reducer: {
    profile,
    post,
    verify,

  },
  middleware: customizedMiddleware,
})
