import React from 'react';
import './App.css';
import SearchBar from './Components/Search'


class App extends React.Component{
  
  state = {
    
  }

  handleSearch = async (e) => {
    e.preventDefault();
    if(this.refs.search.value === ''){
    } else {
      let baseUrl = `https://pokeapi.co/api/v2/pokemon/${this.refs.search.value}`;
      let response = await fetch(baseUrl);
      let json = await response.json();
      let image = json.sprites.front_default;
      let weight = json.weight;
      let height = json.height;
      console.log(height);
      console.log(weight);
      console.log(image);

    }
  }



  render(){
  return (
    <div className="App">
    <SearchBar displayData={this.handleSearch.bind(this)} />
    </div>
  );
}
}

export default App;
