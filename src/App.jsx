import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends React.Component{
  state = {
    searchRequest: '',
  }

  handleSubmit = searchRequest => {
      this.setState({searchRequest})
  }




  render(){
    return (
      <>
      <ToastContainer autoClose={3000} />
      <SearchBar onSubmit={this.handleSubmit} />
      <ImageGallery searchRequest={this.state.searchRequest}/>
      </>
    )
  }
}

export default App;
