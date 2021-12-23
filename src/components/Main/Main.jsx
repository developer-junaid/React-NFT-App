import React, { useEffect, useState } from "react";

// Styles
import "./main.css";

// Icons
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="main-content">
        <div className="punk-highlight">
          <div className="punk-container">
            <img
              className="selected-punk"
              src={activePunk.image_original_url}
              alt="bandana punk"
            />
          </div>
        </div>

        <div className="punk-details">
          <div className="title">
            {activePunk.name}{" "}
            <span className="item-number">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="owner-image-container">
              <img src={activePunk.owner.profile_img_url} alt="owner" />
            </div>
            <div className="owner-details">
              <div className="owner-name-and-handle">
                <div>{activePunk.owner.address}</div>
                <div className="owner-handle">
                  @{activePunk.creator.user.username}
                </div>
              </div>
              <div className="owner-link">
                <img src={instagramLogo} alt="instagram" />
              </div>
              <div className="owner-link">
                <img src={twitterLogo} alt="twitter" />
              </div>
              <div className="owner-link">
                <img src={moreIcon} alt="more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
