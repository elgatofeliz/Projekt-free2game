import ListItemLong from "../components/ListItems/ListItemLong.js";
import Api from "../../src/api_key/RapidApiKey.js";
import React, { Component } from "react";

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
    };
  }



  componentDidMount() {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": Api,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ Data: data }, () => { console.log(this.state.Data) })
        this.setState({ workData: data }, () => { console.log(this.state.workData) })
      })
      .catch((err) => console.log(err));
  }

  // #####################################################################
  // ####################       Platform Suche       #####################
  // #####################################################################

  searchPlatform = (input) => {
    if (this.state.platformFilterActive === false) {
      if (input === "PC (Windows)" || input === "Web Browser") {
        console.log(input + "works")
        let searchArrayPlatform = this.state.workData.filter((elt) => {
          return elt.platform == input
        })

        this.setState({ workData: searchArrayPlatform })
        this.setState({ platformFilter: input })
        this.setState({ platformFilterActive: true })

        console.log(this.state.platformFilter)
        console.log(this.state.platformFilterActive)

      }
    }
    else if (this.state.platformFilterActive == true && this.state.genreFilterActive == true) {
      let searchArrayGenre = this.state.Data.filter((elt) => {
        return elt.genre == this.state.genreFilter
      })
      let searchArrayPlatform = searchArrayGenre.filter((elt) => {
        return elt.platform == input
      })

      this.setState({ workData: searchArrayPlatform })
      this.setState({ platformFilter: input })

    } else if (this.state.platformFilterActive == true && this.state.genreFilterActive == false) {
      let searchArrayPlatform = this.state.Data.filter((elt) => {
        return elt.platform == input
      })

      this.setState({ workData: searchArrayPlatform })
      this.setState({ platformFilter: input })
      console.log("Works")
      console.log(this.state.Data)
    }
  }

  removePlatform = () => {
    console.log(this.state.platformFilterActive)
    if (this.state.genreFilterActive == true && this.state.platformFilterActive == true) {
      let searchArrayPlatform = this.state.Data.filter((elt) => {
        return elt.genre == this.state.genreFilter
      })

      this.setState({ workData: searchArrayPlatform })
      this.setState({ platformFilterActive: false })
      this.setState({ platformFilter: "" })

    } else if (this.state.platformFilterActive == true && this.state.genreFilterActive == false) {
      this.setState({ workData: this.state.Data })
      this.setState({ platformFilterActive: false })
      this.setState({ platformFilter: "" })
    }
  }

  // #####################################################################
  // ####################         Genre Suche        #####################
  // #####################################################################

  searchGenre = (input) => {
    if (this.state.genreFilterActive == false) {
      let searchArrayGenre = this.state.workData.filter((elt) => {
        return elt.genre == input
      })

      this.setState({ workData: searchArrayGenre })
      this.setState({ genreFilter: input })
      this.setState({ genreFilterActive: true })

      console.log(this.state.genreFilter)
      console.log(this.state.genreFilterActive)

    } else if (this.state.genreFilterActive == true && this.state.platformFilterActive == true) {
      let searchArrayPlatform = this.state.Data.filter((elt => {
        return elt.platform == this.state.platformFilter
      }))
      let searchArrayGenre = searchArrayPlatform.filter((elt) => {
        return elt.genre == input
      })

      this.setState({ workData: searchArrayGenre })
      this.setState({ genreFilter: input })

    } else if (this.state.genreFilterActive == true && this.state.platformFilterActive == false) {
      let searchArrayGenre = this.state.Data.filter((elt) => {
        return elt.genre == input
      })

      this.setState({ workData: searchArrayGenre })
      this.setState({ genreFilter: input })
    }
  }

  removeGenre = () => {
    if (this.state.genreFilterActive == true && this.state.platformFilterActive == true) {
      let searchArrayGenre = this.state.Data.filter((elt) => {
        return elt.platform == this.state.platformFilter
      })

      this.setState({ workData: searchArrayGenre })
      this.setState({ genreFilterActive: false })
      this.setState({ genreFilter: "" })
      console.log(searchArrayGenre)
    } else if (this.state.genreFilterActive == true && this.state.platformFilterActive == false) {
      this.setState({ workData: this.state.Data })
      this.setState({ genreFilterActive: false })
      this.setState({ genreFilter: "" })
      console.log("Works")
      console.log(this.state.Data)
    }
  }

  render() {
    return (
      <section className="all-section">
        <header>
          <h1>All Games</h1>
        </header>
        <section className="recent-added-section">
          <h2>Recently Added</h2>

          <button onClick={() => this.searchGenre("MMO")}>MMO</button>
          <button onClick={() => this.searchGenre("Card Game")}>Card Game</button>
          <button onClick={() => this.searchGenre("MMORPG")}>MMORPG</button>
          <button onClick={() => this.searchGenre("Shooter")}>Shooter</button>
          <button onClick={() => this.searchGenre("Strategy")}>Strategy</button>
          <button onClick={() => this.searchGenre("MOBA")}>MOBA</button>
          <button onClick={() => this.searchGenre("Racing")}>Racing</button>
          <button onClick={() => this.searchGenre("Sports")}>Sports</button>
          <button onClick={() => this.searchGenre("Social")}>Social</button>
          <button onClick={() => this.searchGenre("Fighting")}>Fighting</button>


          <button onClick={() => this.searchPlatform("Web Browser")}>Web Browser</button>
          <button onClick={() => this.searchPlatform("PC (Windows)")}>PC (Windows)</button>


          <h2 style={{
            display: this.state.platformFilterActive ? "block" : "none"
          }}><button onClick={() => this.removePlatform()}>X</button>{this.state.platformFilter}</h2>
          <h2 style={{
            display: this.state.genreFilterActive ? "block" : "none"
          }}><button onClick={() => this.removeGenre()}>X</button>{this.state.genreFilter}</h2>
          <article className="first-grid">
            {this.state.workData.map(elt => (
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
          </article>
        </section>
      </section >
    );
  }
}

export default All;
