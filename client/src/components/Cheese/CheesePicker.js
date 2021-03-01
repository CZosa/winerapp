import React from 'react';
import CheeseSubmit from './CheeseSubmit';
import './CheesePicker.css';
const fetch = require('node-fetch');

class CheesePicker extends React.Component {
  state = {
    cheeses: [],
    chosenCheeseId: '',
  };

  componentDidMount() {
    fetch('/cheeses')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let cheesesFromDb = data.map((cheese) => {
          return { id: cheese.dairy_id, type: cheese.type };
        });

        this.setState({
          cheeses: [{ id: 0, type: '----' }].concat(cheesesFromDb),
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { chosenCheeseId, cheeses } = this.state;

    return (
      <div className="cheese-menu">
        <div className="charcuterie-image">
          <img
            src="images/charcuterie.png"
            alt="board"
            type="image/png"
            className="charcuterie"
          />
        </div>
        <div className="cheese-selector">
          <h4>Select Your Cheese</h4>
          <select
            value={chosenCheeseId}
            onChange={(e) => this.setState({ chosenCheeseId: e.target.value })}
            className="select"
          >
            {cheeses.map((cheese) => (
              <option key={cheese.id} value={cheese.id}>
                {cheese.type}
              </option>
            ))}
          </select>
        </div>
        <CheeseSubmit cheeseId={chosenCheeseId} />
      </div>
    );
  }
}

export default CheesePicker;
