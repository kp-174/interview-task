// App.js
import "./App.css";
import React, { useState } from "react";
import Filter from "./component/Filter";

function App() {
  const [filteredURL, setFilteredURL] = useState("");
  return (
    <div className="App">
      <h1>Filter </h1>
      <Filter fil={filteredURL} setFil={setFilteredURL} />
      <div>
        <h4>Filtered URL: </h4>
        <p>{filteredURL}</p>
      </div>
    </div>
  );
}
export default App;
