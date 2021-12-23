import React from "react";

// Styles
import "./collection-card.css";

// Image
import weth from "../../../assets/weth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collection-card">
      <img src={image} alt={name} />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
        <div className="price-container">
          <img src={weth} className="wethImage" alt="eth icon" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
