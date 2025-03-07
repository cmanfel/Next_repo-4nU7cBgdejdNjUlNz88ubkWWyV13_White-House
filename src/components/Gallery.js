"use client";

import React from 'react';
import GalleryCard from './GalleryCard';
import '../App.css';
import photos from '../data/photos.json';

function CustomGallery() {
  // Helper function to find photo descriptions based on filenames
  const getDescriptionsForPhotos = (photoFilenames) => {
    return photoFilenames.map(filename => {
      const photoDetails = photos.photoList.find(photo => photo.fileName === filename);
      return photoDetails ? photoDetails.description : "";
    });
  };

  return (
    <section id="gallery" className="gallery-section overview-section">
      <h2>Gallery</h2>
      <div className="card-container">
        {Object.entries(photos.indoorPhotoUrlsMap).map(([feature, urls]) => {
          // Get descriptions for each photo in this feature
          const descriptions = getDescriptionsForPhotos(urls);
          
          return (
            <GalleryCard 
              key={feature} 
              feature={feature} 
              urls={urls} 
              descriptions={descriptions} 
            />
          );
        })}
      </div>
      
      <h2>Outdoor Gallery</h2>
      <div className="card-container">
        {/* Get descriptions for outdoor photos */}
        <GalleryCard 
          feature="outdoor" 
          urls={photos.outdoorPhotoUrls} 
          descriptions={getDescriptionsForPhotos(photos.outdoorPhotoUrls)} 
        />
      </div>
    </section>
  );
}

export default CustomGallery;
