import "./_detailList.scss";

const DetailList = (props) => {
  //let gameData = blogData;
  return (
    <section className="sectionDetail">
      <img className="heroPic" src={props.image1} alt="" />
      <h1>{props.title}</h1>
      <article className="firstArticleGrid">
        <img src={props.thumbnail} alt="" />
        <h2>Plattform: {props.platform} </h2>
        <p className="redRing">{props.genre}</p>
        <a className="readMoreBtn" href={props.game_url}>
          PLAY Now
        </a>
      </article>
      <article className="secondArticleGrid">
        <h2>About</h2>
        <p>{props.description}</p>
      </article>
      <img className="imgNoDrei" src={props.image2} alt="" />
      <img className="imgNoVier" src={props.image3} alt="" />
      <article className="thirdArticleGrid">
        <h2>Additional Information</h2>
        <p>
          Please note free-to-play game many or many not offer optional in-game
          purchases.
        </p>
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
      <article className="fourArticleGrid">
        <h2>Minimum System Requirements</h2>
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
    </section>
  );
};

export default DetailList;
