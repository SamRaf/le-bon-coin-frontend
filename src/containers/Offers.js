import React, { useState, useEffect } from "react";
import Search from "../conponents/Search";
import SingleOffer from "../conponents/SingleOffer";
import axios from "axios";
import "../conponents/SingleOffer.css";

function Offers() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data.offers);

  return (
    <>
      <div>
        {isLoading === true ? (
          <p>En cours de chargement ...</p>
        ) : (
          <div>
            <div>
              <Search />
            </div>
            <div>
              {data.offers.map((offer, index) => {
                return (
                  <div key={index}>
                    <SingleOffer offer={offer} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Offers;
