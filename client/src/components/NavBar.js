import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  state = {
    isLoggedin: false,
    userID: '',
  };

  componentDidMount() {
    fetch('/login/current_user')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          isLoggedin: !this.state.isLoggedin,
          userID: data.id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderRightMenu() {
    switch (this.state.isLoggedin) {
      case false:
        return (
          <li className="gSignIn">
            <div className="signin-wrapper">
              <a href="/auth/google" className="gSignInText">
                <i className="fab fa-google"></i> Sign in
              </a>
            </div>
          </li>
        );
      default:
        return [
          <li key="1" className="menu-link">
            <a href="/menu" className="menu-text">
              Menu
            </a>
          </li>,
          <li key="2" className="logout-link">
            <a href="/logout" className="logout-text">
              Logout
            </a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <ul className="navigation">
          <li className="brand">
            <a href="/">Winer</a>
          </li>
          <ul className="flex-right">{this.renderRightMenu()}</ul>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
