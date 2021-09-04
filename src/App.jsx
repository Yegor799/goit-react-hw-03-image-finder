import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    searchRequest: '',
    showModal: false,
    largeImage: '',
  }

  componentDidMount() {

    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {

    window.addEventListener('click', this.handleClick);
  }

  handleSubmit = searchRequest => {
    this.setState({ searchRequest })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    if (this.state.showModal === false) {
      this.setState({ largeImage: '' })
    }
  };

  handleClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }

    this.toggleModal();
    this.setState({ largeImage: e.target.getAttribute('data-source') })
  }


  render() {

    const { searchRequest, showModal, largeImage } = this.state;
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery searchRequest={searchRequest} />
        {showModal && <Modal largeImage={largeImage} onClose={this.toggleModal} />}

      </div>
    )
  }
}

export default App;
