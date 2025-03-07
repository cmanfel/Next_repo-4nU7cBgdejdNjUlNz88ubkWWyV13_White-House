"use client";

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function buildImageUrl(url) {
  if (url.startsWith('/')) {
    return url;
  }
  return `/images/photos/${url}`;
}

function GalleryCard({ feature, urls, titles = [], descriptions = [], cardsPerRow = 2 }) {
  const [open, setOpen] = useState(false);

  const slides = urls.map((url, index) => ({
    src: buildImageUrl(url),
    title: titles[index] || '',
    description: descriptions[index] || '',
    caption: `${titles[index] || ''} - ${descriptions[index] || ''}`
  }));

  // Calculate the appropriate grid template columns based on cardsPerRow
  const gridStyle = {
    gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`,
  };

  return (
    <div className="gallery-card">
      <h3>{feature}</h3>
      <div className="gallery-grid" style={gridStyle}>
        {urls.map((url, index) => (
          <div key={index} className="grid-item" style={{ height: cardsPerRow <= 2 ? '400px' : '200px' }}>
            <img
              src={buildImageUrl(url)}
              alt={`${feature} ${index + 1}`}
              className="thumbnail"
              onClick={() => setOpen(true)}
            />
            {(titles[index] || descriptions[index]) && (
              <div className="overlay">
                {titles[index] && <h4 className="overlay-title">{titles[index]}</h4>}
                {descriptions[index] && <p className="overlay-description">{descriptions[index]}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          render={{
            slide: ({ slide }) => (
              <div className="lightbox-slide">
                <img src={slide.src} alt={slide.title} className="lightbox-image" />
                <div className="lightbox-overlay">
                  {slide.caption && <p className="lightbox-description">{slide.caption}</p>}
                </div>
              </div>
            )
          }}
        />
      )}
    </div>
  );
}

export default GalleryCard;