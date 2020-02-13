import React, { useState, useEffect } from "react";
import axios from "axios";
import noImage from "../images/noImage.png";
import "./offer.css";
import { useParams } from "react-router-dom";

function Offer() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div>
        {" "}
        {isLoading === true ? (
          <p> En cours de chargement...</p>
        ) : (
          <div className="all-page">
            <div className="top-page">
              <div className="all-content">
                <div className="top-content">
                  {data.pictures[0] ? (
                    <img
                      className="offer-picture"
                      src={data.pictures[0]}
                      alt="photo de description"
                    ></img>
                  ) : (
                    <img
                      className="offer-picture"
                      src={noImage}
                      alt="il n'y a pas image"
                    />
                  )}
                </div>
                <div className="bottom-content">
                  <div className="offer-title">
                    <h2>{data.title}</h2>
                  </div>
                  <div className="offer-price">
                    {data.price ? <p>{data.price}€</p> : "Prix Indispo"}
                  </div>
                  <div className="offer-date">{data.created}</div>
                </div>
              </div>
              <div className="block-buy">
                <div className="userName">
                  <h3>{data.creator.account.username}</h3>
                </div>
                <div className="button-buy">
                  <button>Acheter</button>
                </div>
              </div>
            </div>
            <div className="bottom-page">
              <h2>Description</h2>
              <p>{data.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Offer;
