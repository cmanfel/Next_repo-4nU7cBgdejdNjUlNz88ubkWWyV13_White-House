"use client";

import React, { useEffect } from 'react';

function ListCard({ imageUrl, title, description }) {
  useEffect(() => {
    console.log("ListCard received data:", { imageUrl, title, description });
  }, [imageUrl, title, description]);

  return (
    <div className="custom-list-card">
      <div className="custom-list-card-image-container">
        <img src={imageUrl} alt={title} />
        <div className="custom-list-card-title-overlay">
          <h2 className="custom-list-card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default ListCard;