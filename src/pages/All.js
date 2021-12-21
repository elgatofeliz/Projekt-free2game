import ListItemLong from "../components/ListItems/ListItemLong.js";
import Api from "../../src/api_key/RapidApiKey.js";
import React, { Component } from "react";

class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
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
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data }, () => {
          console.log(this.state.Data);
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="all-section">
        <header>
          <h1>All Games</h1>
        </header>
        <section className="recent-added-section">
          <h2>Recently Added</h2>
          <article className="first-grid">
            {this.state.Data.map((elt) => (
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
      </section>
    );
  }
}

export default All;
