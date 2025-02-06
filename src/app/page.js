"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import Overview from '../components/Overview';
import CustomGallery from '../components/Gallery';
import Location from '../components/Location';
import Footer from '../components/Footer';
import AmenitiesPage from '../components/amenties';
import staticData from '../data/staticData.json';
import styleVars from '../data/style.json';
import '../App.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Convert styleVars JSON object to a string of CSS custom property declarations
  const rootStyles = Object.entries(styleVars)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');

  return (
    <>
      <style jsx global>{`
        :root {
          ${rootStyles}
        }
      `}</style>
      <div className="App">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Header />
            <Navigation />
            <MainContent />
            <Overview />            
            <CustomGallery />
            <Location />
            <AmenitiesPage />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
