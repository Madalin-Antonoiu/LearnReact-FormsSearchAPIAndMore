/* STATEMENT OF PURPOSE
- SearchBar Component exists only to provide that search input and 
keep track of the keyword typed in.
- Any other actions like on search will be passed to the App component
*/

import React from "react";

//Class-based component
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    //this.props.onSubmit refers to the function i passed to <SearchBar /> from App
    // Passing back the term to it, esentially passing data from child to parent
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={
                (e) => this.setState({ term: e.target.value }) //.toUpperCase()
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
