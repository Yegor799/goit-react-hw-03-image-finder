import React from 'react';
import SearchBar from './SearchBar/SearchBar';

class App extends React.Component{
  state = {
    searchRequest: '',
  }

  handleSubmit = searchRequest => {
      this.setState({searchRequest})
  }


  render(){
    return (
      <SearchBar onSubmit={this.handleSubmit}/>
    )
  }
}

export default App;
