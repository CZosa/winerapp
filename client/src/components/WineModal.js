import React from 'react';
import PropTypes from 'prop-types';
import './WineModal.css';

const WineModal = ({ wineList, show, hide }) => {
  const showHideModal = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideModal}>
      <div className="modal-main">
        <h2 className="modal-header">We Recommend:</h2>
        <ul className="winelist">
          {wineList.map((wine) => {
            return (
              <li key={wine.wine_id}>
                <img className="wine-image" src={wine.picture} />
                <h2 className="wine-name">{wine.name}</h2>
                <p className="wine-varietal">Varietal: {wine.varietal}</p>
                <p className="wine-findinfo">
                  Find more info{' '}
                  <a className="wine-link" href={wine.url} target="_blank">
                    here
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
        <button className="close-btn" onClick={hide}>
          Close
        </button>
      </div>
    </div>
  );
};

WineModal.propTypes = {
  wineList: PropTypes.array,
  show: PropTypes.bool,
  hide: PropTypes.func,
};

export default WineModal;
