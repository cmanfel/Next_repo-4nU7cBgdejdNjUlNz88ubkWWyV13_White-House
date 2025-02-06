"use client";

import React from 'react';
import GalleryCard from './GalleryCard';
import '../App.css';
import photos from '../data/photos.json';

function CustomGallery() {
  return (
    <section id="gallery" className="gallery-section overview-section">
      <h2>Gallery</h2>
      <div className="card-container">
        {Object.entries(photos.indoorPhotoUrlsMap).map(([feature, urls]) => (
          <GalleryCard key={feature} feature={feature} urls={urls} />
        ))}
      </div>
      
      <h2>Outdoor Gallery</h2>
      <div className="card-container">
        <GalleryCard feature="outdoor" urls={photos.outdoorPhotoUrls} />
      </div>

      </section>
  );
}

export default CustomGallery;
