import React from 'react';
import NavBar from '../NavBar';
import MealPicker from '../Meal/MealPicker';
import CheesePicker from '../Cheese/CheesePicker';
import Footer from '../Footer';
import './Menu.css';

const Menu = () => {
  return (
    <div>
      <NavBar />
      <div className="menu-wrapper">
        <h2 className="meal-menu-header">-MENU-</h2>
        <div className="meal-menu-container">
          <MealPicker />
        </div>
        <i className="fas fa-hand-point-down"></i>
        <h2 className="cheese-menu-header">Wine+Cheese Party??</h2>
        <div className="cheese-menu-container">
          <CheesePicker />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
