import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterTable = ({ items, isLoading }) => {
  return (
    <section className="contents">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {items.map((item) => (
            <CharacterItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CharacterTable;
