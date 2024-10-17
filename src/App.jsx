import React, { useState } from 'react';
import DogCard from './components/DogCard';
import BanList from './components/BanList';
import './App.css';

const App = () => {
  const [bannedBreeds, setBannedBreeds] = useState([]);

  const addToBanList = (breedName) => {
    if (!bannedBreeds.includes(breedName)) {
      setBannedBreeds([...bannedBreeds, breedName]);
    }
  };

  return (
    <div>
      <h1>Doglife - Discover Random Dogs</h1>
      <div className="container">
        <div className="dog-section">
          <DogCard bannedBreeds={bannedBreeds} addToBanList={addToBanList} />
        </div>
        <div className="ban-list">
          <BanList bannedBreeds={bannedBreeds} />
        </div>
      </div>
    </div>
  );
};

export default App;
