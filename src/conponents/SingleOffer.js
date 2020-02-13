import React from "react";
import "./SingleOffer";
import noImage from "../images/noImage.png";

function SingleOffer(props) {
  return (
    <div className="singleOffer">
      <div>
        {props.offer.pictures[0] ? (
          <img
            className="single pictureOffer"
            src={props.offer.pictures[0]}
            alt="photo de description"
          ></img>
        ) : (
          <img
            className="single pictureOffer"
            src={noImage}
            alt="pas d'image"
          />
        )}
      </div>
      <div className="gauche">
        <div className="single">
          <p>{props.offer.title}</p>
        </div>
        <div className="single">
          {props.offer.price ? <p>{props.offer.price}€</p> : ""}
        </div>
        <div className="single">{props.offer.created}</div>
      </div>
    </div>
  );
}
export default SingleOffer;
