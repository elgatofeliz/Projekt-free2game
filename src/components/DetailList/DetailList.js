import blogData from "../../data/data";
import "./_detailList.scss";
import { Link } from "react-router-dom";

const Detail = () => {
  let gameData = blogData;
  console.log(gameData);
  return (
    <section className="sectionDetail">
      <img className="heroPic" src={gameData[0].screenshots[0].image} alt="" />
      <h1>{gameData[0].title}</h1>
      <article className="firstArticleGrid">
        <img src={gameData[0].thumbnail} alt="" />
        <h2>Plattform: {gameData[0].platform} </h2>
        <p className="redRing">{gameData[0].genre}</p>
        <Link className="readMoreBtn" to="/Detail">
          PLAY Now
        </Link>
      </article>
      <article className="secondArticleGrid">
        <h2>About</h2>
        <p>{gameData[0].description}</p>
      </article>
      <img
        className="imgNoDrei"
        src={gameData[0].screenshots[1].image}
        alt=""
      />
      <img
        className="imgNoVier"
        src={gameData[0].screenshots[2].image}
        alt=""
      />
      <article className="thirdArticleGrid">
        <h2>Additinal Information</h2>
        <p>
          Please note free-to-play game many or many not offer optional in-game
          purchases.
        </p>
        <div className="developerDiv">
          <div>
            <h3>Developer</h3>
            <p>{gameData[0].developer}</p>
          </div>
          <div>
            <h3>Publisher</h3>
            <p>{gameData[0].publisher}</p>
          </div>
          <div>
            <h3>Release Date</h3>
            <p>{gameData[0].release_date}</p>
          </div>
        </div>
      </article>
      <article className="fourArticleGrid">
        <h2>Minimum System Requirements</h2>
        <div className="grid2">
          <h3>OS</h3>
          <h3>Processor</h3>
          <p>{gameData[0].minimum_system_requirements.os}</p>
          <p>{gameData[0].minimum_system_requirements.processor}</p>
          <h3>Memory</h3>
          <h3>Graphies</h3>
          <p>{gameData[0].minimum_system_requirements.memory}</p>
          <p>{gameData[0].minimum_system_requirements.graphics}</p>
          <h3>Storage</h3>
          <h3>Additional Notes</h3>
          <p>{gameData[0].minimum_system_requirements.storage}</p>
          <p>Specifications may change during development</p>
        </div>
      </article>
    </section>
  );
};

export default Detail;
