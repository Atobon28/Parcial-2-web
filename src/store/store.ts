import { configureStore } from '@reduxjs/toolkit';
import itemreducer from './slices/appSlice';

export const store = configureStore({
	reducer: {
		items: itemreducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
