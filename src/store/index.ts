import { configureStore } from '@reduxjs/toolkit'
import projectSlice from '@store/slices/project'
import { projectInitialState } from '@constants/project'

export const store = configureStore({
  reducer: {
    project: projectSlice,
  },
  preloadedState: {
    project: projectInitialState,
  },
  devTools: {
    name: 'The real McCoy',
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
