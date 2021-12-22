// import blogData from '../../data/data'
import '../../scss/_detailList.scss';
import { Link } from "react-router-dom";
// import Api from "../../api_key/RapidApiKey"
// import React, { Component } from "react";

const DetailList = (props) => {

    return (

        <section className="sectionDetail">
            {/* =========Header Pic + H1========= */}

            <img className="heroPic" src={props.image1} alt="" />
            <h1>{props.title}</h1>

            {/* =========Article mit Grid========= */}
            <article className="grid1">
                {/* =========Article 1========= */}
                <article>
                    <img src={props.thumbnail} alt="" />
                    <h2>Plattform: {props.platform} (Clint)</h2>
                    <p>{props.genre}</p>
                    <Link to="/details">PLAY Now</Link>
                </article>
                {/* =========Article 2========= */}
                <article>
                    <h2>About</h2>
                    <p>
                        {props.description}
                    </p>
                </article>
                {/* =========Article 3-4 Pics========= */}
                <img className="img3-4" src={props.image2} alt="" />
                <img className="img3-4" src={props.image3} alt="" />
                {/* =========Article 5========= */}
                <article>
                    <h2>Additinal Information</h2>
                    <p>Please note free-to-play game many or many not offer optional in-game purchases.</p>
                    <div className="developerDiv">
                        <div>
                            <h3>Developer</h3>
                            <p>{props.developer}</p>
                        </div>
                        <div>
                            <h3>Publisher</h3>
                            <p>{props.publisher}</p>
                        </div>
                        <div>
                            <h3>Release Date</h3>
                            <p>{props.release_date}</p>
                        </div>

                    </div>
                </article>
                {/* =========Article 5========= */}
                <article>
                    <h2>Minimum System Requirements</h2>
                    <h2>(Windows)</h2>
                    <div className="grid2">
                        <h3>OS</h3>
                        <h3>Processor</h3>
                        <p>{props.os}</p>
                        <p>{props.processor}</p>
                        <h3>Memory</h3>
                        <h3>Graphies</h3>
                        <p>{props.memory}</p>
                        <p>{props.graphics}</p>
                        <h3>Storage</h3>
                        <h3>Additional Notes</h3>
                        <p>{props.storage}</p>
                        <p>Specifications may change during development</p>
                    </div>
                </article>
            </article>
        </section>
    );
}

export default DetailList;