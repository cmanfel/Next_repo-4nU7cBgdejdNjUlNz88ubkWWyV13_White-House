"use client";

import React, { useState } from 'react';
import texts from '../data/texts.json';
import photos from '../data/photos.json';
import listing from "../data/listing.json";
import { convertToFileName } from "../app/utils/strings";
import CardsList from "../components/CardsList";

function MainContent() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const slogan = texts.slogan;
  const mainPhotoUrl = `../../images/photos/${photos.mainPhotoUrl}`;
  
  // Get property categories from listing data
  const propertyCategories = listing.amentiesCategories["Property category"] || [];
  
  // Format property categories for CardsList
  const categoryCards = propertyCategories.map((category) => {
    const fileName = convertToFileName(category);
    const imageUrl = `/images/property_categories/${fileName}.jpg`;
    return {
      imageUrl,
      title: category,
      description: category,
    };
  });

  return (
    <main className="App-main" style={{ backgroundImage: `url(${mainPhotoUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Property info table at top-left */}
      <div className="property-info-container">
        <table className="property-info-table">
          <tbody>
            <tr>
              <th>You are renting: {listing.propertyType}</th>
            </tr>
            <tr>
              <th>Bedrooms {listing.counters.bedrooms}, Beds {listing.counters.beds}, Sleeps {listing.counters.guests}</th>
            </tr>
            <tr>
              <th>Bathrooms {listing.counters.bathrooms}</th>
            </tr>
          </tbody>
        </table>
      </div>
      
      <section className="image-container" style={{ backgroundColor: 'transparent' }}>
        <button className="book-button">Book It</button>
      </section>
      
      {/* Category badges at bottom left */}
      <div className="property-categories-container">
        {propertyCategories.length > 0 && (
          <CardsList cards={categoryCards} listTitle="" badgeStyle={true} />
        )}
      </div>
      
      <div className="fullwidth-content-text">
        <h2>
          {slogan.split("").map((char, index) => (
            <span
              key={index}
              className={`letter ${imageLoaded ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
    </main>
  );
}

export default MainContent;