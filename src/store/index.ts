import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import projectsSlice from './slices/projectsSlice';

export const store = configureStore({
  reducer: {
    projectsSlice: projectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
