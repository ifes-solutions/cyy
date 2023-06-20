import React from 'react'
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import AccommodationPage from './pages/AccommodationPage';
import Footer from './components/Footer';
import JoinUsPage from './pages/JoinUsPage';
import { dataLocation } from './data'

function App() {

  /* Location Page */
  const locationPage = dataLocation.map(function (data) {
    return <LocationPage
      key={data.id}
      item={data} />
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/location" element={ locationPage } />
          <Route path="/accommodations" element={<AccommodationPage />} />
          <Route path="/joinUs" element={<JoinUsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
