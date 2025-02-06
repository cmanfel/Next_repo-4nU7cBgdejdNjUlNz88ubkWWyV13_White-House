"use client";

import React from 'react';
import '../App.css';
import locationData from '../data/location.json';
import GalleryCard from './GalleryCard';
import { convertToFileName } from '../app/utils/strings';

function generatePhotoUrls(categories) {
  return categories.map(categoryData => {
    const fileName = convertToFileName(categoryData.category);
    return `/images/location/${fileName}.jpg`;
  });
}

function generateTitles(categories) {
  return categories.map(categoryData => categoryData.category);
}

function generateDescriptions(categories) {
  return categories.map(categoryData => categoryData.description);
}

function Location() {
  return (
    <section id="location" className="overview-section">
      <h2>Location</h2>
      <div className="map-container">
        <img src={`/images/location/map.png`} alt="Map" className="main-image" />
      </div>
      <div className="location-details">
        <a href={`https://www.google.com/maps?q=${locationData.geoCode.lat},${locationData.geoCode.lng}`} target="_blank" rel="noopener noreferrer" className="App-link">
          View on Google Maps
        </a>
      </div>
      <GalleryCard 
        feature="Nearby places" 
        urls={generatePhotoUrls(locationData.nearbyCategories)} 
        titles={generateTitles(locationData.nearbyCategories)} 
        descriptions={generateDescriptions(locationData.nearbyCategories)} 
      />
    </section>
  );
}

export default Location;