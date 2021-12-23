import { NavLink, Link } from "react-router-dom";
import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      workData: [],
      searchActive: false,
    };
  }

  componentDidMount() {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data }, () => {
          console.log(this.state.Data);
        });
      })
      .catch((err) => console.log(err));
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

  searchKeyword = () => {
    let input = document.getElementById("searchInput").value;
    let searchArray = [];
    this.state.Data.map((elt) => {
      let x = elt.title.toLowerCase().search(input.toLowerCase());

      if (x !== -1) {
        searchArray.push(elt);
      }
    });
    if (searchArray.length === 366) {
      this.setState({ searchActive: false });
      this.setState({ workData: [] });
    } else {
      this.setState({ searchActive: true });
      this.setState({ workData: searchArray });
    }

    console.log(searchArray);
    return null;
  };

  searchKeywordClear = () => {
    this.setState({ searchActive: false });
    this.setState({ workdata: [] });
    document.getElementById("searchInput").value = "";
    window.location.reload();
  };

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
          <div id="searchPosition">
            <input
              type="text"
              name="searchInput"
              id="searchInput"
              onChange={() => this.searchKeyword()}
            />
            <article className="dropdownWrapper">
              <article className="dropdownBody">
                <article
                  id="scrollbarSearch"
                  style={{
                    height: this.state.searchActive ? "300px" : "0",
                  }}
                >
                  {this.state.workData.map((elt) => (
                    <article className="dropdownItemSearch">
                      <article id="searchFlex">
                        <Link
                          to={`/details/${elt.id}`}
                          onClick={
                            (() => this.searchKeywordClear(),
                            () => this.refreshPage())
                          }
                        >
                          <h3>{elt.title}</h3>
                          <div id="imageWrapper">
                            <img src={elt.thumbnail} alt={elt.title} />
                          </div>
                        </Link>
                      </article>
                    </article>
                  ))}
                </article>
              </article>
            </article>
          </div>
        </section>
      </nav>
    );
  }
}

export default Nav;
