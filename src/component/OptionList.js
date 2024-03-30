// OptionList.js
import React from 'react';
import './list.css'; // Import the CSS file

function OptionList({ options, selectedOption, onSelect, onClose }) {
  const handleOptionClick = (option) => {
    // Call onSelect to handle the selection logic
    onSelect(option);
    // Prevent event propagation to parent when clicking on options
    // This prevents the list from closing when clicking on options
    return false;
  };

  const handleCloseButtonClick = (e) => {
    // Prevent event propagation to parent when clicking on the close button
    e.stopPropagation();
    // Call the onClose function to close the list
    onClose();
  };
  return (
    <div className="option-list">
     
      <button className="close-btn" onClick={onClose}>Close</button>
      <div className="filter-by">Filter By</div>
      {options.map((option) => (
        <div key={option} onClick={() => handleOptionClick(option)}>
          <input
            type="checkbox"
            id={`option-${option}`}
            checked={selectedOption === option}
            onChange={() => {}}
          />
          <label htmlFor={`option-${option}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default OptionList;
