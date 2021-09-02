import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <>
      <ToastContainer autoClose={3000} />
      <SearchBar onSubmit={this.handleSubmit} />
      </>
    )
  }
}

export default App;
