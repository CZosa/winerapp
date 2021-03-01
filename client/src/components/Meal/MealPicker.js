import React from 'react';
import MealSubmit from './MealSubmit';
import './MealPicker.css';
const fetch = require('node-fetch');

class MealPicker extends React.Component {
  state = {
    meats: [],
    chosenMeatId: '',
    preps: [],
    chosenPrepId: '',
    veggies: [],
    chosenVeggieId: '',
    seasonings: [],
    chosenSeasoningId: '',
    starches: [],
    chosenStarchId: '',
  };

  componentDidMount() {
    Promise.all([
      fetch('/meats'),
      fetch('/preps'),
      fetch('/veggies'),
      fetch('/seasonings'),
      fetch('/starches'),
    ])
      .then(([res1, res2, res3, res4, res5]) => {
        return Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json(),
          res5.json(),
        ]);
      })
      .then(([meatData, prepData, veggieData, seasoningData, starchData]) => {
        let meatsFromDb = meatData.map((meat) => {
          return { id: meat.meat_id, type: meat.type };
        });

        let prepsFromDb = prepData.map((prep) => {
          return { id: prep.prep_id, type: prep.type };
        });

        let veggiesFromDb = veggieData.map((veggie) => {
          return { id: veggie.vegetable_id, type: veggie.type };
        });

        let seasoningsFromDb = seasoningData.map((seasoning) => {
          return { id: seasoning.seasoning_id, type: seasoning.type };
        });

        let starchesFromDb = starchData.map((starch) => {
          return { id: starch.starch_id, type: starch.type };
        });

        this.setState({
          meats: [{ id: 0, type: '----' }].concat(meatsFromDb),
          preps: [{ id: 0, type: '----' }].concat(prepsFromDb),
          veggies: [{ id: 0, type: '----' }].concat(veggiesFromDb),
          seasonings: [{ id: 0, type: '----' }].concat(seasoningsFromDb),
          starches: [{ id: 0, type: '----' }].concat(starchesFromDb),
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {
      chosenMeatId,
      chosenPrepId,
      chosenVeggieId,
      chosenSeasoningId,
      chosenStarchId,
    } = this.state;

    return (
      <div className="meal-menu">
        <div className="meat selector grid">
          <h4>Meats</h4>
          <select
            value={chosenMeatId}
            onChange={(e) => this.setState({ chosenMeatId: e.target.value })}
            className="select"
          >
            {this.state.meats.map((meat) => (
              <option key={meat.id} value={meat.id}>
                {meat.type}
              </option>
            ))}
          </select>
        </div>
        <div className="prep selector grid">
          <h4>How Was The Meat Prepared?</h4>
          <select
            value={chosenPrepId}
            onChange={(e) => this.setState({ chosenPrepId: e.target.value })}
            className="select"
          >
            {this.state.preps.map((prep) => (
              <option key={prep.id} value={prep.id}>
                {prep.type}
              </option>
            ))}
          </select>
        </div>
        <div className="veggie selector grid">
          <h4>Veggies</h4>
          <select
            value={chosenVeggieId}
            onChange={(e) => this.setState({ chosenVeggieId: e.target.value })}
            className="select"
          >
            {this.state.veggies.map((veggie) => (
              <option key={veggie.id} value={veggie.id}>
                {veggie.type}
              </option>
            ))}
          </select>
        </div>
        <div className="seasoning selector grid">
          <h4>Which Seasoning Complements Your Dish?</h4>
          <select
            value={chosenSeasoningId}
            onChange={(e) =>
              this.setState({ chosenSeasoningId: e.target.value })
            }
            className="select"
          >
            {this.state.seasonings.map((seasoning) => (
              <option key={seasoning.id} value={seasoning.id}>
                {seasoning.type}
              </option>
            ))}
          </select>
        </div>
        <div className="starch selector grid">
          <h4>Starches</h4>
          <select
            value={chosenStarchId}
            onChange={(e) => this.setState({ chosenStarchId: e.target.value })}
            className="select"
          >
            {this.state.starches.map((starch) => (
              <option key={starch.id} value={starch.id}>
                {starch.type}
              </option>
            ))}
          </select>
        </div>
        <div className="plate grid">
          <img
            src="/images/whiteplate.png"
            alt="white plate"
            type="image/png"
            className="whiteplate"
          />
        </div>
        <MealSubmit
          meatId={chosenMeatId}
          prepId={chosenPrepId}
          vegId={chosenVeggieId}
          seasoningId={chosenSeasoningId}
          starchId={chosenStarchId}
        />
      </div>
    );
  }
}

export default MealPicker;
