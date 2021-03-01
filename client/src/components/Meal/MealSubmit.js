import React from 'react';
import WineModal from '../WineModal';
import PropTypes from 'prop-types';
import './MealSubmit.css';
const axios = require('axios');

class MealSubmit extends React.Component {
  state = {
    generatedWines: [],
    show: false,
  };

  fetchMealWine = async (e) => {
    const { meatId, prepId, vegId, seasoningId, starchId } = this.props;
    const response = await axios.get(
      `/wines/${meatId}/${prepId}/${vegId}/${seasoningId}/${starchId}`
    );
    const data = response.data;

    data.map((wine) =>
      this.setState({
        generatedWines: [...this.state.generatedWines, wine],
        show: true,
      })
    );
  };

  hideModal = () => {
    this.setState({ generatedWines: [], show: false });
  };

  renderButton = () => {
    const { meatId, prepId, vegId, seasoningId, starchId } = this.props;

    return meatId.length > 0 &&
      meatId !== '0' &&
      prepId.length > 0 &&
      prepId !== '0' &&
      vegId.length > 0 &&
      vegId !== '0' &&
      seasoningId.length > 0 &&
      seasoningId !== '0' &&
      starchId.length > 0 &&
      starchId !== '0' ? (
      <button className="mealwine-btn" onClick={this.fetchMealWine}>
        Find My Wine
      </button>
    ) : (
      <button className="disabled-btn" disabled>
        Find My Wine
      </button>
    );
  };

  render() {
    return (
      <div className="meal-submit meal cheese">
        {this.renderButton()}
        <WineModal
          wineList={this.state.generatedWines}
          show={this.state.show}
          hide={this.hideModal}
        />
      </div>
    );
  }
}

MealSubmit.propTypes = {
  meatId: PropTypes.string,
  prepId: PropTypes.string,
  vegId: PropTypes.string,
  seasoningId: PropTypes.string,
  starchId: PropTypes.string,
};

export default MealSubmit;
