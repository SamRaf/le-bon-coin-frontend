import React from "react";
import Logo from "../images/logoLeBonCoin.png";
import AddAnnonce from "../images/addAnnonce.png";
import Connect from "../images/seConnecter.png";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header-logo">
        <img src={Logo} alt="le logo du bon coin" />

        <button className="addAnnonce" id="header">
          <img src={AddAnnonce} alt="Plus add" /> Déposer une annonce
        </button>
        <div className="search" id="header">
          <button>
            <img src={AddAnnonce} alt="Plus add" /> Rechercher
          </button>
        </div>
        <div className="seConnecter" id="header">
          <button>
            <img src={Connect} alt="Se connecter" />
            Se connecter
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
