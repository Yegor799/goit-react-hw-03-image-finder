import React from 'react';

const API_KEY = '18976162-4407e31cd80a0810b100a4c9f';


class ImageGallery extends React.Component{

    state = {
        picture: null,
        error: null,
        page: 1,
        status: 'idle'
    }
    
    componentDidUpdate(prevProps, prevState) {
        const prevPicture = prevProps.searchRequest;
        const nextPicture = this.props.searchRequest;

        if (prevPicture !== nextPicture) {
            this.setState({ status: 'pending' })
            
            fetch(`https://pixabay.com/api/?q=${nextPicture}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then(picture => console.log(picture))
        }
    }

    

    render() {
        return (
<div></div>
        )
    }
}

export default ImageGallery;