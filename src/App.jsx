import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends React.Component {
  state = {
    searchRequest: '',
  }

  handleSubmit = searchRequest => {
    this.setState({ searchRequest })
  }




  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery searchRequest={this.state.searchRequest} />
      </div>
    )
  }
}

export default App;
