import React from 'react';

class SearchBar extends React.Component {  
  render(){
    return(
      <div>
        <div className="searchBar">
          <form onChange={this.props.displayData}>
            <div>
              <label>Pokemon Search</label> <br/>
              <input type="text" ref='search'/> <br/>
              <input type="submit" value="submit"></input> 
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default SearchBar;