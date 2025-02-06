"use client";
import React from 'react';
import '../App.css';
import texts from '../data/texts.json';
import photos from '../data/photos.json';
import listing from '../data/listing.json';
import CardsList from './CardsList';
import { convertToFileName } from '../app/utils/strings';

function Overview() {
  const mainIndoorPhotoUrl = `../../images/photos/${photos.mainIndoorPhotoUrl}`;
  const mainOutdoorPhotoUrl = `../../images/photos/${photos.mainOutdoorPhotoUrl}`;
  return (
    <section id="overview" className="overview-section">
      <div className="overview-text">
        <h2>Overview</h2>
        <p>{texts.description}</p>
      </div>
      <div className="overview-content">
        <div className="image-text">
          <img src={mainIndoorPhotoUrl} alt="First Overview" className="overview-image" />
          <div className="overview-description">
            <p>{texts.indoor}</p>
          </div>
        </div>
        <div className="image-text reverse">
          <img src={mainOutdoorPhotoUrl} alt="Second Overview" className="overview-image" />
          <div className="overview-description">
            <p>{texts.outdoor}</p>
          </div>
        </div>
      </div>
      <div className="amenities-text">
        <p>{texts.amenities}</p>
      </div>
      <div className="counters-table">
        <table>
          <thead>
            <tr>
              <th>You are renting: {listing.propertyType}</th>
              <th>Bedrooms {listing.counters.bedrooms}, Beds {listing.counters.beds}, Sleeps {listing.counters.guests}</th>
              <th>Bathrooms {listing.counters.bathrooms}</th>
            </tr>
          </thead>
        </table>
      </div>      
    </section>
  );
}

export default Overview;