import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  async onSearchSubmit(term: string) {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
     params: { query: term},
      headers: {
        Authorization: 'Client-ID 07K_1oHm459CpM4cjJfKsv5nxudSGUhvtHPSpC1nLdc'
      }
   })
     console.log(response.data.results);
   
  }
  render() {
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar {...this.onSearchSubmit} />
    </div>
  );
  }
}

export default App;
