import React from "react";

function SingleOffer(props) {
  return (
    <div>
      <div>
        {props.offer.pictures[0] ? (
          <img
            className=""
            src={props.offer.pictures[0]}
            alt="photo de description"
          ></img>
        ) : (
          ""
        )}
      </div>
      <div>
        <p>{props.offer.title}</p>
      </div>
      <div>{props.offer.price ? <p>{props.offer.price}€</p> : ""}</div>
      <div>{new Date(props.offer.created).toDateString}</div>
    </div>
  );
}
export default SingleOffer;
