import React from 'react';
import './ImageGalleryItem.css'

function ImageGalleryItem({ pictures }) {

    return (
        pictures.map((picture, idx) => {
            return (
                < li key={idx} className="ImageGalleryItem" >
                    <img src={picture.webformatURL} alt={picture.tag} className="ImageGalleryItem-image" />
                </li >
            )
        })
    )

}

export default ImageGalleryItem;

