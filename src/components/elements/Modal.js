import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  image: PropTypes.object,
  imageTag: PropTypes.oneOf(['img'])
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  image: '',
  imageTag: 'img'
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  image,
  imageTag,
  ...props
}) => {

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };    
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]); 
  
  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    image && 'modal-image',
    className
  );

  return (
    <>
      {show &&
        <div
          {...props}
          className={classes}
          onClick={handleClose}
        >
          <div className="modal-inner" onClick={stopProgagation}>
            {image ?
              <div className="responsive-image">
                <img
                  src={image}
                />
              </div> :
              <>
                {!closeHidden &&
                  <button
                    className="modal-close"
                    aria-label="close"
                    onClick={handleClose}
                  ></button>
                }
                <div className="modal-content">
                  {children}
                </div>
              </>
            }
          </div>
        </div>
      }
    </>
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;