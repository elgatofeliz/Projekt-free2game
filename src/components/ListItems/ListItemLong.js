import { Link } from "react-router-dom";

const ListItemLong = (props) => {
  return (
    <article className="listItemLong">
      <img src={props.image} alt={props.alt} />
      <div className="contentBox">
        <h3>{props.title}</h3>
        <p>{props.short_description}</p>
        <Link to={`/details/${props.id}`} className="readMoreBtn">
          Read more
        </Link>
        <div className="whiteLine"></div>
        <div className="genreFlex">
          <div
            className={
              props.platform
                .split(" ")
                .join("")
                .split(",")
                .map((elt) => elt.slice(0, 2))[0]
            }
          />
          <div
            className={
              props.platform
                .split(" ")
                .join("")
                .split(",")
                .map((elt) => elt.slice(0, 2))[1]
            }
          />
          <p className="redRing">{props.genre}</p>
        </div>
      </div>
    </article>
  );
};

export default ListItemLong;
