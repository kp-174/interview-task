// App.js
import React, { useState } from 'react';
import Filter from './component/Filter';

function App() {
  const [filteredURL, setFilteredURL] = useState('');

  const handleFilter = (queryURL) => {
    // Here, you can perform actions with the filtered URL, such as fetching data from the backend
    console.log("Filtered URL:", queryURL);
    setFilteredURL(queryURL); // For demonstration, setting filteredURL state
  };

  return (
    <div className="App">
      <h1>Swiggy Filter </h1>
      <Filter onFilter={handleFilter} />
      <div>
        {/* Display filtered URL for demonstration */}
        <p>Filtered URL: {filteredURL}</p>
      </div>
    </div>
  );
}

export default App;
