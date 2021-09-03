import React from 'react';
import './ImageGallery.css';
import Button from '../Button/Button';

const API_KEY = '18976162-4407e31cd80a0810b100a4c9f';


class ImageGallery extends React.Component {

    state = {
        pictures: null,
        error: null,
        page: 1,
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        const prevPicture = prevProps.searchRequest;
        const nextPicture = this.props.searchRequest;

        if (prevPicture !== nextPicture) {
            this.setState({ status: 'pending', page: 1 })

            fetch(`https://pixabay.com/api/?q=${nextPicture}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(pictures => this.setState({ pictures: pictures.hits, status: 'resolved' }))
        }
    }

    handleLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }))

        fetch(`https://pixabay.com/api/?q=${this.props.searchRequest}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then(pictures => this.setState({ pictures: pictures.hits, status: 'resolved' }))

    }







    render() {
        const { pictures, error, status } = this.state;
        const { searchRequest } = this.props;

        return (
            <>
                <ul className="ImageGallery">
                    {pictures && pictures.map(({ id, webformatURL, tag }) => {
                        return (
                            <li key={id} className="ImageGalleryItem" >
                                <img src={webformatURL} alt={tag} className="ImageGalleryItem-image" />
                            </li>
                        )
                    })}
                </ul>

                {pictures && <Button onClick={this.handleLoadMore} />}


            </>

        )
    }
}

export default ImageGallery;