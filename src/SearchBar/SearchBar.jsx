import './SearchBar.css';
import React from 'react';
import { toast } from 'react-toastify';

class SearchBar extends React.Component {
    state = {
        searchRequest: '',
    }

    handleRequestChange = e => {
        this.setState({
        searchRequest: e.currentTarget.value.toLowerCase()
    })
    }
    
    handleRequestSubmit = e => {
        e.preventDefault();

        if (this.state.searchRequest.trim() === '') {
        toast.error('Введите запрос.');
        return;
    }

    this.props.onSubmit(this.state.searchRequest);
    this.setState({ searchRequest: '' });
    }

    render(){
    return (
<header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleRequestSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleRequestChange}
    />
  </form>
</header>
    )
        }
}

export default SearchBar;