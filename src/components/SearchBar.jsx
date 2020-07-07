import React from 'react';
import '../scss/styling.scss';

const SearchBar = (props) => {
  return (
    <form className="search-container" onSubmit={props.handleSubmit}>
      <div className="field has-addons">
        <div className="control">

          {/* If there is content in the search bar, display the refresh icon. If not, hide it */}
          <span
            className="icon"
            style={{visibility: props.inputValue.length > 0 ? "visible" : "hidden"}} onClick={props.handleCardsReload}
          >
            <i className="fas fa-lg fa-sync-alt" aria-hidden="true"></i>
          </span>

          <input className="input" type="text" value={props.inputValue} onChange={props.handleChange} name="search" autoComplete="off" />
        </div>

        <div className="control">
          <button className="button is-info" type="submit">Search</button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar;
