// FilterComponent.js
import React, { useState } from 'react';
import OptionList from './OptionList'; // Import the OptionList component
import './style.css'; // Import the CSS file

function Filter({ onFilter }) {
  const [cuisine, setCuisine] = useState('all');
  const [vegChecked, setVegChecked] = useState(false);
  const [nonVegChecked, setNonVegChecked] = useState(false);
  const [offersChecked, setOffersChecked] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [showCuisineOptions, setShowCuisineOptions] = useState(false);
  const [showRatingOptions, setShowRatingOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const cuisineOptions = ['Indian', 'Chinese', 'Italian', 'Mexican']; // Example cuisine options
  const ratingOptions = [5, 4.5, 4, 3.5, 3]; // Example rating options

  const handleFilter = () => {
    // Construct the query URL
    const queryURL = `/restaurants?cuisine=${cuisine}&veg=${vegChecked}&nonVeg=${nonVegChecked}&offers=${offersChecked}&ratings=${ratings}`;

    // Pass the query URL to the parent component
    onFilter(queryURL);
  };



  return (
    <div className="filter-container custom-filter-style">
        <div className="vertical-line"></div>
      <div className="options-container">
        <div className="options-left">
          <div onClick={() => setShowCuisineOptions(!showCuisineOptions)}>
            <span className="category-name">Cuisine</span>
            </div>
            <div>
            {showCuisineOptions && <OptionList options={cuisineOptions} selectedOption={cuisine} onSelect={setCuisine} onClose={() => setShowCuisineOptions(false)} />}
          </div>
          <div className="category" onClick={() => setShowRatingOptions(!showRatingOptions)}>
            <span className="category-name">Rating</span>
            </div>
            <div>
            {showRatingOptions && <OptionList options={ratingOptions} selectedOption={ratings} onSelect={setRatings} onClose={() => setShowRatingOptions(false)} />}
          </div>
          <div className="category">
            <input type="checkbox" id="veg" checked={vegChecked} onChange={(e) => setVegChecked(e.target.checked)} />
            <label htmlFor="veg">Vegetarian</label>
          </div>
          <div className="category">
            <input type="checkbox" id="non-veg" checked={nonVegChecked} onChange={(e) => setNonVegChecked(e.target.checked)} />
            <label htmlFor="non-veg">Non-Vegetarian</label>
          </div>
          <div className="category">
            <input type="checkbox" id="offers" checked={offersChecked} onChange={(e) => setOffersChecked(e.target.checked)} />
            <label htmlFor="offers">Offers</label>
          </div>
        </div>
       
      </div>
      <div className="filter-buttons">
        <button className="filter-button" onClick={handleFilter}>Apply</button>
        <button className="filter-button" onClick={() => { setCuisine('all'); setVegChecked(false); setNonVegChecked(false); setOffersChecked(false); setRatings([]); }}>Clear Filter</button>
      </div>
    </div>
  );
}

export default Filter;
