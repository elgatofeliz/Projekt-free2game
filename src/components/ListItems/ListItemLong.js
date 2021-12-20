const ListItemLong = (props) => {
    return (
        <div className="listItemLong">
            <img src={props.image} alt={props.alt} />
            <div className="contentBox">
                <h3>{props.title}</h3>
                <p>{props.short_description}</p>
                <div className="readMoreBtn">READ MORE [placeholder]</div>
                <div className='whiteLine'></div>
                <div className="genreFlex">
                    <div className={props.platform.split(" ").join("").split(",").map(elt => elt.slice(0, 2))[0]} />
                    <div className={props.platform.split(" ").join("").split(",").map(elt => elt.slice(0, 2))[1]} />
                    <h4 className='redRing'>{props.genre}</h4>
                </div>
            </div>
        </div>
    )
}

export default ListItemLong
