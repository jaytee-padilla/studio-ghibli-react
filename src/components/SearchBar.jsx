import React from 'react';
import '../scss/styling.scss';

const SearchBar = (props) => {
  return (
    <form className="search-container" onSubmit={props.handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Search By Title" name="search" />
        </div>
        <div className="control">
          <button className="button is-info" type="submit">Search</button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar;
