import React, { useState } from "react";
import OptionList from "./OptionList";
import "./style.css";
import { useNavigate } from "react-router-dom";
function Filter({ fil, setFil }) {
  const [cuisine, setCuisine] = useState("all");
  const [vegChecked, setVegChecked] = useState(false);
  const [nonVegChecked, setNonVegChecked] = useState(false);
  const [offersChecked, setOffersChecked] = useState(false);
  const [ratings, setRatings] = useState(0);
  const [showCuisineOptions, setShowCuisineOptions] = useState(false);
  const [showRatingOptions, setShowRatingOptions] = useState(false);

  const cuisineOptions = ["Indian", "Chinese", "Italian", "Mexican"];
  const ratingOptions = [5, 4.5, 4, 3.5, 3];

  const navigate = useNavigate();
  const handleFilter = () => {
    const queryURL = `/restaurants?cuisine=${cuisine}&veg=${vegChecked}&nonVeg=${nonVegChecked}&offers=${offersChecked}&ratings=${ratings}`;

    setFil(queryURL);
    navigate(queryURL);
  };

  const handleClear = () => {
    setCuisine("all");
    setVegChecked(false);
    setNonVegChecked(false);
    setOffersChecked(false);
    setRatings(0);

    const queryURL = `/restaurants?cuisine=all&veg=false&nonVeg=false&offers=false&ratings=0`;

    // console.log("on clear:", queryURL)
    setFil(queryURL);
    navigate(queryURL);
  };
  return (
    <div className="filter-container">
      <div className="options-container">
        <div className="options-left">
          <div
            onClick={() => setShowCuisineOptions(!showCuisineOptions)}
            className="category"
          >
            <span className="category-name">Cuisine</span>
          </div>
          <div className="multichoice">
            {showCuisineOptions && (
              <OptionList
                options={cuisineOptions}
                selectedOption={cuisine}
                onSelect={setCuisine}
                onClose={() => setShowCuisineOptions(false)}
              />
            )}
          </div>
          <div
            className="category"
            onClick={() => setShowRatingOptions(!showRatingOptions)}
          >
            <span className="category-name">Rating</span>
          </div>
          <div className="multichoice">
            {showRatingOptions && (
              <OptionList
                options={ratingOptions}
                selectedOption={ratings}
                onSelect={setRatings}
                onClose={() => setShowRatingOptions(false)}
              />
            )}
          </div>
          <div className="category">
            <input
              type="checkbox"
              id="veg"
              checked={vegChecked}
              onChange={(e) => setVegChecked(e.target.checked)}
            />
            <label htmlFor="veg">Vegetarian</label>
          </div>
          <div className="category">
            <input
              type="checkbox"
              id="non-veg"
              checked={nonVegChecked}
              onChange={(e) => setNonVegChecked(e.target.checked)}
            />
            <label htmlFor="non-veg">Non-Vegetarian</label>
          </div>
          <div className="category">
            <input
              type="checkbox"
              id="offers"
              checked={offersChecked}
              onChange={(e) => setOffersChecked(e.target.checked)}
            />
            <label htmlFor="offers">Offers</label>
          </div>
        </div>
        <div className="vertical_line"></div>
      </div>
      <div className="filter-buttons">
        <button className="filter-button" onClick={handleClear}>
          Clear Filters
        </button>
        <button className="filter-button" onClick={handleFilter}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
