import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showSettings() {
    let menu = document.querySelector(".sidebar-nav");
    let burger = document.querySelector(".burger");
    let burgerActive = document.querySelector(".burger-active");
    let topNav = document.querySelector(".top-nav");
    let menuNav = document.querySelector(".menu-nav");
    menu.classList.toggle("active-menu");
    menu.classList.toggle("mobile-show-wrap");
    burger.classList.toggle("show");
    burgerActive.classList.toggle("show");
    topNav.classList.toggle("active-top");
    topNav.classList.toggle("unactive-top");
    menuNav.classList.toggle("mobile-show");
  }
  render() {
    return (
      <nav>
        <section className="sidebar-nav mobile-background-menu">
          <div onClick={this.showSettings} className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onClick={this.showSettings} className="burger-active show">
            <span></span>
            <span></span>
          </div>
          <div className="menu-nav mobile-show">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              <div className="link-wrap">
                <img src="../../img/home.svg" alt="home" />
                Home
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/all"
            >
              <div className="link-wrap">
                <img src="../../img/pad.svg" alt="pad" />
                All Games
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/recently"
            >
              <div className="link-wrap">
                <img src="../../img/plus.svg" alt="plus" />
                Recently Added
              </div>
            </NavLink>
          </div>
          <div className="placeholder"></div>
        </section>
        <section className="top-nav unactive-top">
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
