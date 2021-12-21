import React, { Component } from "react";
import Api from "../../src/api_key/RapidApiKey.js";
import ListItemLong from "../components/ListItems/ListItemLong.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Home extends Component {
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
      <section className="home-section">
        <header>
          <h1>Find & track the best free-to-play games!</h1>
        </header>
        <section className="recent-added-section">
          <h2>Recently Added</h2>
          <article className="items-wrap">
            {this.state.Data.slice(0, 4).map((elt) => (
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
            <Link className="readMoreBtn" to="/recently">
              Show More
            </Link>
          </article>
        </section>
      </section>
    );
  }
}

export default Home;
