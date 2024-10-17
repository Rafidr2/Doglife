import React from 'react';

const BanList = ({ bannedBreeds }) => {
  return (
    <div>
      <h3>Banned Breeds</h3>
      <ul>
        {bannedBreeds.length === 0 ? (
          <li>No breeds banned yet</li>
        ) : (
          bannedBreeds.map((breed, index) => <li key={index}>{breed}</li>)
        )}
      </ul>
    </div>
  );
};

export default BanList;
