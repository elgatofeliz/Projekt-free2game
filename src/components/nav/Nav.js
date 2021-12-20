import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <nav>
        <section onClick={this.showSettings} className="sidebar-nav">
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Menu className="menu-nav">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              <img src="../../img/home.svg" alt="home" />
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/all"
            >
              <img src="../../img/pad.svg" alt="pad" />
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/recently"
            >
              <img src="../../img/plus.svg" alt="plus" />
            </NavLink>
          </Menu>
          <div className="placeholder"></div>
        </section>
        <section className="top-nav">
          <div>
            <NavLink to="/">
              <img src="../../img/logo.svg" alt="plus" />
            </NavLink>
            <p>FREE2GAME</p>
          </div>
          <div>
            <input type="text" name="searchInput" id="searchInput" />
          </div>
        </section>
      </nav>
    );
  }
}

export default Nav;
