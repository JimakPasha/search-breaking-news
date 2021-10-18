import { configureStore } from '@reduxjs/toolkit';
import search from './reducers/search';
import modal from './reducers/modal';

const store = configureStore({
	reducer: { search, modal },
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
