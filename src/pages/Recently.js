import ListItemLong from "../components/ListItems/ListItemLong.js";
import Api from "../../src/api_key/RapidApiKey.js";
import React, { Component } from "react";

class Recently extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": Api,
        },
      }
    )
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
      <section className="recently-section">
        <header>
          <h1>Recently Added</h1>
        </header>

        <section className="items-wrap">
          {this.state.Data.map((elt) => (
            <ListItemLong
              image={elt.thumbnail}
              alt={elt.title}
              title={elt.title}
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

export default Recently;
