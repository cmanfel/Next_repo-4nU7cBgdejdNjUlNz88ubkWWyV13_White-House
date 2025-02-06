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

function GalleryCard({ feature, urls, titles = [], descriptions = [] }) {
  const [open, setOpen] = useState(false);

  const slides = urls.map((url, index) => ({
    src: buildImageUrl(url),
    width: 800,  //Adjust width and height if necessary for display
    height: 600,
    alt: titles[index] || '', //Consider using alt for accessibility
    description: descriptions[index] || '',  // Add the description
    title: titles[index] || '',  // Add the title
  }));

  return (
    <div className="gallery-card">
      <h3>{feature}</h3>
      <div className="gallery-thumbnails">
        {urls.map((url, index) => (
          <div key={index} className="thumbnail-container">
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
                <div style={{ position: 'relative' }}>
                    <img
                        src={slide.src}
                        alt={slide.alt || ''}
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '800px',
                            maxHeight: '600px',
                            display: 'block',
                        }}
                    />
                    {slide.title && slide.description && (
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            padding: '10px',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}>
                            <h3 style={{ margin: '0 0 5px 0' }}>{slide.title}</h3>
                            <p style={{ margin: '0' }}>{slide.description}</p>
                        </div>
                    )}
                </div>
            ),
          }}
            plugins={[/* any plugins you wish to include*/]}

        />
      )}
    </div>
  );
}

export default GalleryCard;