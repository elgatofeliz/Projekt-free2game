import DetailList from '../components/DetailList/DetailList'
import { Link } from "react-router-dom";
import Api from "../api_key/RapidApiKey"
import React, { Component } from "react";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            gameData: [],
            systemReq: [],
            screenshots: [],
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=452", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": Api,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ gameData: data, isLoading: false }, () => {
                    console.log(this.state.gameData.screenshots);
                    console.log(this.state.gameData);
                });
                this.setState({ systemReq: data.minimum_system_requirements }, () => {
                    console.log(this.state.systemReq)
                });
                this.setState({ screenshots: data.screenshots }, () => {
                    console.log(this.state.screenshots)
                });
            })
            .catch((err) => console.log(err));
    }
    render() {
        if (this.state.isLoading == true) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <DetailList
                    title={this.state.gameData.title}
                    game_url={this.state.gameData.game_url}
                    thumbnail={this.state.gameData.thumbnail}
                    platform={this.state.gameData.platform}
                    genre={this.state.gameData.genre}
                    description={this.state.gameData.description}
                    //image1={this.state.screenshots[0].image}
                    //image2={this.state.screenshots[1].image}
                    //image3={this.state.screenshots[2].image}
                    developer={this.state.gameData.developer}
                    publisher={this.state.gameData.publisher}
                    release_date={this.state.gameData.release_date}
                    os={this.state.systemReq.os}
                    processor={this.state.systemReq.processor}
                    memory={this.state.systemReq.memory}
                    graphics={this.state.systemReq.graphics}
                    storage={this.state.systemReq.storage}
                />
            </div>
        );
    }

}

export default Detail;