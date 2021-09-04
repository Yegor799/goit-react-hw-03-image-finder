import React from 'react';
import './ImageGalleryItem.css'

function ImageGalleryItem({ pictures }) {

    return (
        <ul className="ImageGallery">
            {pictures.map((picture, idx) => {
                return (
                    < li key={idx} className="ImageGalleryItem" >
                        <img src={picture.webformatURL} alt={picture.tag} className="ImageGalleryItem-image" />
                    </li >
                )
            })}
        </ul>
    )

}

export default ImageGalleryItem;

