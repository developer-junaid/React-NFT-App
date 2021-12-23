import React from "react";

// Styles
import "./punklist.css";

// Components
import CollectionCard from "./CollectionCard/CollectionCard";

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punklist">
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
