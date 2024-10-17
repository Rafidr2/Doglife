import React, { useState, useEffect } from 'react';

const DogCard = ({ bannedBreeds, addToBanList }) => {
  const [dog, setDog] = useState(null);

  const fetchRandomDog = async () => {
    const response = await fetch(
      'https://api.thedogapi.com/v1/images/search',
      {
        headers: {
          'x-api-key': 'live_zbXPHKnzJ1kHuZK7IJl1Y3a3DpTNm0ugVa9x82KBVzzjIKCn9XxtR8jdUhngHSWP'
        }
      }
    );
    const data = await response.json();
    
    // Filter based on banned breeds
    const breedName = data[0]?.breeds[0]?.name || 'Unknown';
    if (bannedBreeds.includes(breedName)) {
      fetchRandomDog(); // Fetch again if breed is banned
    } else {
      setDog(data[0]); // Set the dog if it's not banned
    }
  };

  useEffect(() => {
    fetchRandomDog(); // Fetch a random dog on mount
  }, [bannedBreeds]);

  if (!dog) return <div>Loading...</div>;

  const breedName = dog?.breeds[0]?.name || 'Unknown';
  const imageUrl = dog?.url;

  return (
    <div>
      <h2>Breed: {breedName}</h2>
      <img src={imageUrl} alt={breedName} style={{ width: '300px', height: '300px' }} />
      <button onClick={fetchRandomDog}>Get Another Dog</button>
      <button onClick={() => addToBanList(breedName)}>Ban This Breed</button>
    </div>
  );
};

export default DogCard;
