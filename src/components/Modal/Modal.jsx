import { Component } from 'react';
// import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalDiv } from './Modal.styled';

// Объект модального окна в DOM-дереве
// const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <Overlay onClick={this.handleBackdrop}>
        <ModalDiv>
          <img src={largeImageURL} alt={tags} />
        </ModalDiv>
      </Overlay>
    );
  }
}

//   render() {
//     const { largeImageURL, tags } = this.props;

//     return createPortal(
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalWindow>
//           <img src={largeImageURL} alt={tags} />
//         </ModalWindow>
//       </Overlay>,
//       modalRoot // Рендерим модальное окно в объект modalRoot в DOM-дереве
//     );
//   }
// }

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
