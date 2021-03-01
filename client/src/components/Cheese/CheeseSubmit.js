import React from 'react';
import WineModal from '../WineModal';
import PropTypes from 'prop-types';
import './CheeseSubmit.css';
const axios = require('axios');

class CheeseSubmit extends React.Component {
  state = {
    generatedWines: [],
    show: false,
  };

  fetchCheeseWine = async (e) => {
    const { cheeseId } = this.props;
    const response = await axios.get(`/wines/cheese/${cheeseId}`);
    const data = response.data;

    data.map((wine) => {
      this.setState({
        generatedWines: [...this.state.generatedWines, wine],
        show: true,
      });
    });
  };

  hideModal = () => {
    this.setState({ generatedWines: [], show: false });
  };

  renderButton = () => {
    const { cheeseId } = this.props;

    return cheeseId.length > 0 && cheeseId !== '0' ? (
      <button className="cheesewine-btn" onClick={this.fetchCheeseWine}>
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
      <div className="cheese-submit">
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

CheeseSubmit.propTypes = {
  cheeseId: PropTypes.string,
};

export default CheeseSubmit;
