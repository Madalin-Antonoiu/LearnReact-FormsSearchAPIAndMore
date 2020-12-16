import React from "react";
import axios from "axios";

import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    // Base URL of API + endpoint '/searc/photos'
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID ggHhOT9rdI3Zxj3FhCOlIR6jzXAw4Jl7FzwzOJGBeN0"
      }
    });
    // .then((response) => {
    //   console.log(response.data.results);
    // });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}

export default App;
