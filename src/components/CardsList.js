import React, { useEffect } from 'react';
import ListCard from './ListCard';

function CardsList({ cards, listTitle }) {
  // Log the received cards when the component mounts or cards change.
  useEffect(() => {
    console.log(`CardsList for category "${listTitle}" received cards:`, cards);
  }, [cards, listTitle]);

  return (
    <div className="custom-cards-list">
      {listTitle && <h2 className="cards-list-title">{listTitle}</h2>}
      <div className="custom-card-container">
        {cards.map((card, index) => (
          <ListCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsList;