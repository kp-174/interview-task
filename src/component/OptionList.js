// OptionList.js
import React from "react";
import "./list.css";

function OptionList({ options, selectedOption, onSelect, onClose }) {
  const handleOptionClick = (option) => {
    onSelect(option);

    return false;
  };
  return (
    <div className="option-list">
      <button className="close-btn" onClick={onClose}>
        &#10006;
      </button>
      <div className="filter-by">FilterBy</div>
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleOptionClick(option)}
          className="select_box"
        >
          <input
            type="checkbox"
            id={`option-${option}`}
            checked={selectedOption === option}
            onChange={() => {}}
            className="input_box"
          />
          <label htmlFor={`option-${option}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default OptionList;
