import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Metrics from './components/Metrics';
import { fetchNavbar } from './redux/navbarSlice';
import { fetchCarousel } from './redux/carouselSlice';
import { fetchMetrics } from './redux/metricsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavbar());
    dispatch(fetchCarousel());
    dispatch(fetchMetrics());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/metrics" element={<Metrics />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
