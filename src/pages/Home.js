import React, { Component } from "react";
import ListItemLong from "../components/ListItems/ListItemLong.js";
import { Link } from "react-router-dom";
let fetchUrlRelease =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date";
let fetchUrlPc =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=release-date";
let fetchUrlBrowser =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=release-date";

console.log("test");
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      DataPc: [],
      DataBrowser: [],
    };
  }
  componentDidMount() {
    Promise.all([
      fetch(fetchUrlRelease, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }).then((response) => response.json()),
      fetch(fetchUrlPc, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }).then((response) => response.json()),
      fetch(fetchUrlBrowser, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }).then((response) => response.json()),
    ])
      .then(([data1, data2, data3]) => {
        this.setState({ Data: data1 }, () => {});
        this.setState({ DataPc: data2 }, () => {
          console.log(this.state.DataPc);
        });
        this.setState({ DataBrowser: data3 }, () => {
          console.log(this.state.DataBrowser);
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
          <article className="items-wrap">
            <h2>Recently Added</h2>
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
          <article className="items-wrap-grid">
            <h2>Top 4 Games for PC in June 2021</h2>
            {this.state.DataPc.slice(0, 4).map((elt) => (
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
            <Link className="readMoreBtn" to="/topGamesPc">
              Show More
            </Link>
          </article>
          <article className="items-wrap">
            <h2>Top 4 Games for Browser in June 2021</h2>
            {this.state.DataBrowser.slice(0, 4).map((elt) => (
              <ListItemLong
                image={elt.thumbnail}
                alt={elt.title}
                title={elt.title}
                id={elt.id}
                short_description={elt.short_description}
                platform={elt.platform}
                genre={elt.genre}
                key={elt.id}
              />
            ))}
            <Link className="readMoreBtn" to="/topGamesBrowser">
              Show More
            </Link>
          </article>
        </section>
      </section>
    );
  }
}

export default Home;
