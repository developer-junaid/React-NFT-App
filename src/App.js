import React, { useState, useEffect } from "react";

// Styles
import "./App.css";

// Components
import Header from "./components/Header/Header";

// Axios
import axios from "axios";
import Punklist from "./components/Punklist/Punklist";
import Main from "./components/Main/Main";

function App() {
  // Data from OpenSea
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getNFTs = async () => {
      const options = {
        method: "GET",
        url: "https://testnets-api.opensea.io/api/v1/assets",
        params: {
          order_direction: "asc",
          offset: "0",
          limit: "20",
          asset_contract_address: "0xEb9278Ff741c67880cbD61852A31f4f5BE7B5F46",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setPunkListData(response.data.assets);
        })
        .catch(function (error) {
          console.error("err: ", error);
        });
    };

    getNFTs();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
