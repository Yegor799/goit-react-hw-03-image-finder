import React from 'react';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
            this.setState({ status: 'pending', page: 1, pictures: null })

            fetch(`https://pixabay.com/api/?q=${nextPicture}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    return Promise.reject(new Error("По вашему запросу нет результатов"));
                })
                .then(pictures => this.setState({ pictures: pictures.hits, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
        }


        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });




    }

    handleLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }))

        fetch(`https://pixabay.com/api/?q=${this.props.searchRequest}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then(pictures => this.setState(prevState => ({ pictures: [...prevState.pictures, ...pictures.hits], status: 'resolved' })))

    }


    render() {
        const { pictures, error, status } = this.state;



        if (status === 'idle') {
            return <></>
        }

        if (status === 'pending') {
            return (
                <Loader type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} />
            )
        }

        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        }

        if (status === 'resolved') {
            return (
                <>
                    <ImageGalleryItem pictures={pictures} />
                    {/* <Button onClick={this.handleLoadMore} /> */}
                </>
            )
        }

        if (pictures.length !== 0) {
            return (
                <Button onClick={this.handleLoadMore} />
            )
        }



        // return (
        //     <>



        //         {status === 'pending' && <Loader type="Puff"
        //             color="#00BFFF"
        //             height={100}
        //             width={100}
        //             timeout={3000} />}


        //         {pictures && <ImageGalleryItem pictures={pictures} />}



        //         {pictures && <Button onClick={this.handleLoadMore} />}



        //     </>

        // )
    }
}

export default ImageGallery;

