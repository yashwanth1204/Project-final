import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';

export const store = configureStore({
    reducer: {
        projects: projectReducer
    },
});