"use client";
import React from "react";
import CardsList from "../components/CardsList";
import listing from "../data/listing.json";
import { convertToFileName } from "../app/utils/strings";
import texts from "../data/texts.json";

const categories = [
    "Basic amenities",    
    "Heating and cooling amenities",
    "Parking and facilities",
    "Outdoor amenities",
    "Kitchen amenities",
    "Entertainment amenities",
    "Family amenities",
    "Bedroom and laundry amenities",
    "Bathroom amenities",
    "Location amenities",
    "Safety amenities",    
    "Office amenities",
    "Services"
  ];

function AmenitiesPage() {
  return (
    <div 
      className="amenities-page" 
      style={{ backgroundColor: "var(--main-bg-color)" }}
    >
      <div className="overview-text">
        <h2>Amenities</h2>
        <p>{listing.texts?.amenities || "Explore our wide range of amenities."}</p>
      </div>
      <section className="amenities-cards">
        {categories.map((category) => {
          const amenities = listing.amentiesCategories[category];
          if (!amenities) return null; // Skip categories not found in the data

          const cardData = amenities.map((amenity) => {
            const fileName = convertToFileName(amenity);
            const imageUrl = `/images/amenities/${fileName}.jpg`;
            return {
              imageUrl,
              title: amenity,
              description: amenity,
            };
          });

          return (
            <CardsList key={category} cards={cardData} listTitle={category} />
          );
        })}
      </section>
    </div>
  );
}

export default AmenitiesPage;
