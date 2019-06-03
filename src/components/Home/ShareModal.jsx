import React from 'react';

const ShareModal = ({ close, image }) => (
  <div className="modal-wrapper" onClick={close}>
    <div className="modal">
      <div className="close-modal-btn" onClick={close}><img src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/xBlack.png"/></div>
      <div className="modal-body">
        <img src={image} className="modal-share-image" />
        <div>
          <button className="rounded-button">fb</button>
          <button className="rounded-button">insta</button>
          <button className="rounded-button">twit</button>
        </div>
      </div>
    </div>
  </div>
);

export default ShareModal;
