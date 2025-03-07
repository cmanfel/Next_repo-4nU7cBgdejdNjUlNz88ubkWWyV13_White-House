"use client";
import React from 'react';
import '../App.css';
import texts from '../data/texts.json';
import photos from '../data/photos.json';
import GalleryCard from './GalleryCard';

function Overview() {
  const mainIndoorPhotoUrl = `../../images/photos/${photos.mainIndoorPhotoUrl}`;
  const mainOutdoorPhotoUrl = `../../images/photos/${photos.mainOutdoorPhotoUrl}`;
  
  // Combine both indoor and outdoor into a single gallery
  const overviewGallery = {
    feature: "",
    urls: [mainIndoorPhotoUrl, mainOutdoorPhotoUrl],
    titles: ["Indoor", "Outdoor"],
    descriptions: [texts.indoor, texts.outdoor]
  };

  return (
    <section id="overview" className="overview-section">
      <div className="overview-text">
        <h2>Overview</h2>
        <p>{texts.description}</p>
      </div>
      <div className="overview-content centered-content">
        {/* Single GalleryCard with both indoor and outdoor images */}
        <GalleryCard 
          feature={overviewGallery.feature}
          urls={overviewGallery.urls}
          titles={overviewGallery.titles}
          descriptions={overviewGallery.descriptions}
        />
      </div>
    </section>
  );
}

export default Overview;