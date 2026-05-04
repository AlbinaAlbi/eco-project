import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice/authSlice';
import projectsReducer from './slices/ProjectsSlice/projectsSlice';
import errorReducer from './slices/ErrorSlise/errorSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
