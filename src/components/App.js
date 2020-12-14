import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div className="ui container">
      <SearchBar />
      <ImageList />
    </div>
  );
};

export default App;
