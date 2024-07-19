// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';
import carouselReducer from './carouselSlice';
import metricsReducer from './metricsSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    carousel: carouselReducer,
    metrics: metricsReducer,
  },
});

export default store;
