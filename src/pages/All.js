import ListItemLong from "../components/ListItems/ListItemLong.js";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      workData: [],
      genreFilterActive: false,
      genreFilter: "",
      platformFilterActive: false,
      platformFilter: "",
      sortedFilterActive: false,
      sortedFilter: "",

      MMO: false,
      CardGame: false,
      MMORPG: false,
      Shooter: false,
      Strategy: false,
      MOBA: false,
      Racing: false,
      Sports: false,
      Social: false,
      Fighting: false,
      Browser: false,
      Windows: false,

      Relevance: false,
      Popularity: false,
      ReleaseDate: false,
      Alphabetical: false,
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
        this.setState({ workData: data }, () => {
          console.log(this.state.workData);
        });
      })
      .catch((err) => console.log(err));
  }

  // #####################################################################
  // ####################       Platform Suche       #####################
  // #####################################################################

  searchPlatform = (input) => {
    document
      .getElementById("wrapperPlatform")
      .classList.toggle("scrollbarPassive");

    switch (input) {
      case "Web Browser":
        this.setState({ Browser: true });
        this.setState({ Windows: false });
        console.log(this.state.Browser);
        break;
      case "PC (Windows)":
        this.setState({ Windows: true });
        this.setState({ Browser: false });
        console.log(this.state.Windows + "Card");
        break;
      default:
    }

    this.setState();
    if (this.state.platformFilterActive === false) {
      if (input === "PC (Windows)" || input === "Web Browser") {
        console.log(input + "works");
        let searchArrayPlatform = this.state.workData.filter((elt) => {
          return elt.platform === input;
        });

        this.setState({ workData: searchArrayPlatform });
        this.setState({ platformFilter: input });
        this.setState({ platformFilterActive: true });

        console.log(this.state.platformFilter);
        console.log(this.state.platformFilterActive);
      }
    } else if (
      this.state.platformFilterActive === true &&
      this.state.genreFilterActive === true
    ) {
      let searchArrayGenre = this.state.Data.filter((elt) => {
        return elt.genre === this.state.genreFilter;
      });
      let searchArrayPlatform = searchArrayGenre.filter((elt) => {
        return elt.platform === input;
      });

      this.setState({ workData: searchArrayPlatform });
      this.setState({ platformFilter: input });
    } else if (
      this.state.platformFilterActive === true &&
      this.state.genreFilterActive === false
    ) {
      let searchArrayPlatform = this.state.Data.filter((elt) => {
        return elt.platform === input;
      });

      this.setState({ workData: searchArrayPlatform });
      this.setState({ platformFilter: input });
      console.log("Works");
      console.log(this.state.Data);
    }
  };

  // #####################################################################
  // ####################      Platform Löschen      #####################
  // #####################################################################

  removePlatform = (input) => {
    document
      .getElementById("wrapperPlatform")
      .classList.add("scrollbarPassive");

    switch (input) {
      case "Web Browser":
        this.setState({ Browser: false });
        console.log(this.state.Browser);
        break;
      case "PC (Windows)":
        this.setState({ Windows: false });
        console.log(this.state.Windows + "Card");
        break;
      default:
    }

    console.log(this.state.platformFilterActive);
    if (
      this.state.genreFilterActive === true &&
      this.state.platformFilterActive === true
    ) {
      let searchArrayPlatform = this.state.Data.filter((elt) => {
        return elt.genre === this.state.genreFilter;
      });

      this.setState({ workData: searchArrayPlatform });
      this.setState({ platformFilterActive: false });
      this.setState({ platformFilter: "" });
    } else if (
      this.state.platformFilterActive === true &&
      this.state.genreFilterActive === false
    ) {
      this.setState({ workData: this.state.Data });
      this.setState({ platformFilterActive: false });
      this.setState({ platformFilter: "" });
    }
  };

  // #####################################################################
  // ####################         Genre Suche        #####################
  // #####################################################################

  searchGenre = (input) => {
    document
      .getElementById("scrollbarGenre")
      .classList.toggle("scrollbarActive");
    document
      .getElementById("scrollbarGenre")
      .classList.toggle("scrollbarPassive");

    switch (input) {
      case "MMO":
        this.setState({ MMO: true });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.MMO);
        break;
      case "Card Game":
        this.setState({ MMO: false });
        this.setState({ CardGame: true });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.CardGame + "Card");
        break;
      case "MMORPG":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: true });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.MMORPG);
        break;
      case "Shooter":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: true });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.Shooter);
        break;
      case "Strategy":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: true });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.Strategy);
        break;
      case "MOBA":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: true });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.MOBA);
        break;
      case "Racing":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: true });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.Racing);
        break;
      case "Sports":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: true });
        this.setState({ Social: false });
        this.setState({ Fighting: false });
        console.log(this.state.Sports);
        break;
      case "Social":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: true });
        this.setState({ Fighting: false });
        console.log(this.state.Social);
        break;
      case "Fighting":
        this.setState({ MMO: false });
        this.setState({ CardGame: false });
        this.setState({ MMORPG: false });
        this.setState({ Shooter: false });
        this.setState({ Strategy: false });
        this.setState({ MOBA: false });
        this.setState({ Racing: false });
        this.setState({ Sports: false });
        this.setState({ Social: false });
        this.setState({ Fighting: true });
        console.log(this.state.Fighting);
        break;
      default:
    }

    if (this.state.genreFilterActive === false) {
      let searchArrayGenre = this.state.workData.filter((elt) => {
        return elt.genre === input;
      });

      this.setState({ workData: searchArrayGenre });
      this.setState({ genreFilter: input });
      this.setState({ genreFilterActive: true });

      console.log(this.state.genreFilter);
      console.log(this.state.genreFilterActive);
    } else if (
      this.state.genreFilterActive === true &&
      this.state.platformFilterActive === true
    ) {
      let searchArrayPlatform = this.state.Data.filter((elt) => {
        return elt.platform === this.state.platformFilter;
      });
      let searchArrayGenre = searchArrayPlatform.filter((elt) => {
        return elt.genre === input;
      });

      this.setState({ workData: searchArrayGenre });
      this.setState({ genreFilter: input });
    } else if (
      this.state.genreFilterActive === true &&
      this.state.platformFilterActive === false
    ) {
      let searchArrayGenre = this.state.Data.filter((elt) => {
        return elt.genre === input;
      });

      this.setState({ workData: searchArrayGenre });
      this.setState({ genreFilter: input });
    }
  };

  // #####################################################################
  // ####################         Genre Löschen      #####################
  // #####################################################################

  removeGenre = (input) => {
    document
      .getElementById("scrollbarGenre")
      .classList.remove("scrollbarActive");
    document.getElementById("scrollbarGenre").classList.add("scrollbarPassive");

    switch (input) {
      case "MMO":
        this.setState({ MMO: !this.state.MMO });
        console.log(this.state.MMO);
        break;
      case "Card Game":
        this.setState({ CardGame: !this.state.CardGame });
        console.log(this.state.CardGame + "Card");
        break;
      case "MMORPG":
        this.setState({ MMORPG: !this.state.MMORPG });
        console.log(this.state.MMORPG);
        break;
      case "Shooter":
        this.setState({ Shooter: !this.state.Shooter });
        console.log(this.state.Shooter);
        break;
      case "Strategy":
        this.setState({ Strategy: !this.state.Strategy });
        console.log(this.state.Strategy);
        break;
      case "MOBA":
        this.setState({ MOBA: !this.state.MOBA });
        console.log(this.state.MOBA);
        break;
      case "Racing":
        this.setState({ Racing: !this.state.Racing });
        console.log(this.state.Racing);
        break;
      case "Sports":
        this.setState({ Sports: !this.state.Sports });
        console.log(this.state.Sports);
        break;
      case "Social":
        this.setState({ Social: !this.state.Social });
        console.log(this.state.Social);
        break;
      case "Fighting":
        this.setState({ Fighting: !this.state.Fighting });
        console.log(this.state.Fighting);
        break;
      default:
    }

    if (
      this.state.genreFilterActive === true &&
      this.state.platformFilterActive === true
    ) {
      let searchArrayGenre = this.state.Data.filter((elt) => {
        return elt.platform === this.state.platformFilter;
      });

      this.setState({ workData: searchArrayGenre });
      this.setState({ genreFilterActive: false });
      this.setState({ genreFilter: "" });
      console.log(searchArrayGenre);
    } else if (
      this.state.genreFilterActive === true &&
      this.state.platformFilterActive === false
    ) {
      this.setState({ workData: this.state.Data });
      this.setState({ genreFilterActive: false });
      this.setState({ genreFilter: "" });
      console.log("Works");
      console.log(this.state.Data);
    }
  };

  // #####################################################################
  // ####################         sort by something      #####################
  // #####################################################################

  sortGames = (input) => {
    document.getElementById("scrollbarSort").classList.add("scrollbarPassive");

    this.setState({ sortedFilterActive: true });
    this.setState({ sortedFilter: input });

    switch (input) {
      case "Relevance":
        this.setState({ Relevance: true });
        this.setState({ ReleaseDate: false });
        this.setState({ Popularity: false });
        this.setState({ Alphabetical: false });

        let sortedRelevance = this.state.workData.sort((a, b) => {
          return a.id - b.id;
        });
        this.setState({ workData: sortedRelevance });
        console.log(this.state.workData);
        break;

      case "Release Date":
        this.setState({ Relevance: false });
        this.setState({ ReleaseDate: true });
        this.setState({ Popularity: false });
        this.setState({ Alphabetical: false });

        let sortedReleaseDate = this.state.workData.sort((a, b) => {
          return (
            new Date(a.release_date.split("-").join(",")).getTime() -
            new Date(b.release_date.split("-").join(",")).getTime()
          );
        });
        this.setState({ workData: sortedReleaseDate });
        console.log(this.state.workData);
        break;

      case "Alphabetical":
        this.setState({ Relevance: false });
        this.setState({ ReleaseDate: false });
        this.setState({ Popularity: false });
        this.setState({ Alphabetical: true });

        let sortedAlphabetical = this.state.workData.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        this.setState({ workData: sortedAlphabetical });
        console.log(this.state.workData);
        break;
      default:
    }
  };

  removeSort = () => {
    document.getElementById("scrollbarSort").classList.add("scrollbarPassive");

    this.setState({ sortedFilterActive: false });
    this.setState({ Relevance: false });
    this.setState({ Alphabetical: false });
    this.setState({ ReleaseDate: false });
    this.setState({ sortedFilter: "" });
    let sortedRelevance = this.state.workData.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ workData: sortedRelevance });
  };

  // #####################################################################
  // ####################         Menü ausklappen      #####################
  // #####################################################################
  categoryExpand = () => {
    console.log("works");
    document
      .getElementById("scrollbarGenre")
      .classList.toggle("scrollbarActive");
    document
      .getElementById("scrollbarGenre")
      .classList.toggle("scrollbarPassive");
    document.getElementById("vCategory").classList.toggle("v-active");
  };

  platformExpand = () => {
    console.log("works");
    document
      .getElementById("wrapperPlatform")
      .classList.toggle("scrollbarPassive");
    document.getElementById("vPlatform").classList.toggle("v-active");
  };

  sortExpand = () => {
    document
      .getElementById("scrollbarSort")
      .classList.toggle("scrollbarPassive");
    document
      .getElementById("scrollbarGenre")
      .classList.remove("scrollbarActive");
    document.getElementById("vSort").classList.toggle("v-active");

    document.getElementById("scrollbarGenre").classList.add("scrollbarPassive");
    document
      .getElementById("wrapperPlatform")
      .classList.add("scrollbarPassive");
  };

  render() {
    return (
      <section className="all-section">
        <header>
          <h1>All Games</h1>
        </header>

        {
          // ########### Grid Section #############
        }

        <section className="items-wrap">
          {/* ###################################################### */}
          {
            // Dropdown Platform
          }
          <article className="dropDownWrapper">
            <div className="dropdownBody">
              <div
                onClick={() => this.platformExpand()}
                className="dropdownHeader"
              >
                PLATFORM
                <img id="vPlatform" src="./img/arrow.svg" alt="V" />
              </div>
              <div id="wrapperPlatform" className="scrollbar scrollbarPassive">
                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Browser
                      ? () => this.removePlatform("Web Browser")
                      : () => this.searchPlatform("Web Browser")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Browser}
                  />
                  Web Browser
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Windows
                      ? () => this.removePlatform("PC (Windows)")
                      : () => this.searchPlatform("PC (Windows)")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Windows}
                  />
                  PC (Windows)
                </div>
              </div>
            </div>
          </article>
          {
            // Dropdown Genre
          }
          <article className="dropDownWrapper">
            <div className="dropdownBody">
              <div
                className="dropdownHeader"
                onClick={() => this.categoryExpand()}
              >
                CATEGORY / TAG
                <img id="vCategory" src="./img/arrow.svg" alt="V" />
              </div>
              <div className="scrollbar scrollbarPassive" id="scrollbarGenre">
                <div
                  className="dropdownItem"
                  onClick={
                    this.state.MMO
                      ? () => this.removeGenre("MMO")
                      : () => this.searchGenre("MMO")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.MMO}
                  />
                  MMO
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.CardGame
                      ? () => this.removeGenre("Card Game")
                      : () => this.searchGenre("Card Game")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.CardGame}
                  />
                  Card Game
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.MMORPG
                      ? () => this.removeGenre("MMORPG")
                      : () => this.searchGenre("MMORPG")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.MMORPG}
                  />
                  MMORPG
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Shooter
                      ? () => this.removeGenre("Shooter")
                      : () => this.searchGenre("Shooter")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Shooter}
                  />
                  Shooter
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Strategy
                      ? () => this.removeGenre("Strategy")
                      : () => this.searchGenre("Strategy")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Strategy}
                  />
                  Strategy
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.MOBA
                      ? () => this.removeGenre("MOBA")
                      : () => this.searchGenre("MOBA")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.MOBA}
                  />
                  MOBA
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Racing
                      ? () => this.removeGenre("Racing")
                      : () => this.searchGenre("Racing")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Racing}
                  />
                  Racing
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Sports
                      ? () => this.removeGenre("Sports")
                      : () => this.searchGenre("Sports")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Sports}
                  />
                  Sports
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Social
                      ? () => this.removeGenre("Social")
                      : () => this.searchGenre("Social")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Social}
                  />
                  Social
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Fighting
                      ? () => this.removeGenre("Fighting")
                      : () => this.searchGenre("Fighting")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Fighting}
                  />
                  Fighting
                </div>
              </div>
            </div>
          </article>
          {
            // Dropdown Sort
          }
          <article className="dropDownWrapper">
            <div className="dropdownBody">
              <div className="dropdownHeader" onClick={() => this.sortExpand()}>
                SORT BY <img id="vSort" src="./img/arrow.svg" alt="V" />
              </div>
              <div className="scrollbar scrollbarPassive" id="scrollbarSort">
                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Relevance
                      ? () => this.removeSort("Relevance")
                      : () => this.sortGames("Relevance")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Relevance}
                  />
                  Relevance
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.ReleaseDate
                      ? () => this.removeSort("Release Date")
                      : () => this.sortGames("Release Date")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.ReleaseDate}
                  />
                  Release Date
                </div>

                <div
                  className="dropdownItem"
                  onClick={
                    this.state.Alphabetical
                      ? () => this.removeSort("Alphabetical")
                      : () => this.sortGames("Alphabetical")
                  }
                >
                  <input
                    className="myinput"
                    type="checkbox"
                    checked={this.state.Alphabetical}
                  />
                  Alphabetical
                </div>
              </div>
            </div>
          </article>

          <article></article>
          <article className="activeFilters">
            <h3
              className="redRing"
              style={{
                display: this.state.platformFilterActive ? "block" : "none",
              }}
            >
              <button
                onClick={() => this.removePlatform(this.state.platformFilter)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              {this.state.platformFilter}
            </h3>
            <h3
              className="redRing"
              style={{
                display: this.state.genreFilterActive ? "block" : "none",
              }}
            >
              <button onClick={() => this.removeGenre(this.state.genreFilter)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              {this.state.genreFilter}
            </h3>
            <h3
              className="redRing"
              style={{
                display: this.state.sortedFilterActive ? "block" : "none",
              }}
            >
              <button onClick={() => this.removeSort(this.state.sortedFilter)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              {this.state.sortedFilter}
            </h3>
          </article>
          {/* ###################################################### */}
          {this.state.workData.map((elt) => (
            <ListItemLong
              image={elt.thumbnail}
              alt={elt.title}
              title={elt.title}
              short_description={elt.short_description}
              id={elt.id}
              platform={elt.platform}
              genre={elt.genre}
              key={elt.id}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default All;
