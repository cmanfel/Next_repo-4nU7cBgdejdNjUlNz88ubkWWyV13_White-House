"use client";

import React, { useEffect } from 'react';
import ListCard from './ListCard';

const CardsList = ({ cards = [], badges = true, badgeStyle, listTitle, cardsPerRow = 6 }) => {
  // Support both badges and badgeStyle props for backward compatibility
  const showBadges = badgeStyle !== undefined ? badgeStyle : badges;
  
  useEffect(() => {
    console.log(`CardsList for category "${listTitle}" received cards:`, cards);
  }, [cards, listTitle]);

  const gapSize = 5;
  const maxGridWidth = `${cardsPerRow * 150 + (cardsPerRow - 1) * gapSize}px`;
  
  // Check if this is being used in property-categories-container (MainContent)
  const isPropertyCategory = badgeStyle === true && !listTitle;

  return (
    <div className={`custom-cards-list ${isPropertyCategory ? 'property-category-list' : ''}`}>
      {listTitle && <h2 className="cards-list-title">{listTitle}</h2>}
      
      {/* For property categories in MainContent, use the traditional container */}
      {isPropertyCategory ? (
        <div className="custom-card-container">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div 
              key={card.id || index}
              className={`custom-list-card ${showBadges ? 'badge-style' : ''}`}
            >
              <div className="custom-list-card-image-container">
                <img src={card.imageUrl} alt={card.title || ''} />
                <div className="custom-list-card-title-overlay">
                  <h3 className="custom-list-card-title">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // For regular card lists (like in AmenitiesPage), use the grid layout
        <div className="cards-grid-container">
          <div 
            className="custom-cards-grid" 
            style={{ 
              gridTemplateColumns: `repeat(${cardsPerRow}, 150px)`,
              gap: `${gapSize}px`,
              maxWidth: maxGridWidth
            }}
          >
            {Array.isArray(cards) && cards.map((card, index) => (
              <ListCard
                key={card.id || index}
                {...card}
                card={card}
                showBadge={showBadges}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardsList;