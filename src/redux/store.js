import { configureStore } from '@reduxjs/toolkit';
import search from './reducer';

const store = configureStore({
	reducer: { search },
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
