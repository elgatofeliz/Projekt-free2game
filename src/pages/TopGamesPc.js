import ListItemLong from "../components/ListItems/ListItemLong.js";
import React, { Component } from "react";

class TopGamesPc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=release-date",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
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
      <section className="all-section">
        <header>
          <h1>All Games</h1>
        </header>

        <section className="items-wrap">
          <h2>Top Games for PC</h2>
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
        </section>
      </section>
    );
  }
}

export default TopGamesPc;
