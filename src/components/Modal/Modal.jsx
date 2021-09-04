import React from 'react';
import './Modal.css';



class Modal extends React.Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };


    render() {

        return (
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    <img src={this.props.largeImage} alt="123" />
                </div>
            </div>

        )
    }
}

export default Modal;
