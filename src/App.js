import React, { useState, useEffect } from "react";

// Styles
import "./App.css";

// Components
import Header from "./components/Header/Header";

// Axios
import axios from "axios";
import Punklist from "./components/Punklist/Punklist";

function App() {
  // Data from OpenSea
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getNFTs = async () => {
      const collectionAddress = "0xEb9278Ff741c67880cbD61852A31f4f5BE7B5F46";
      const url = `https://testnets-api.opensea.io/assets?asset_contract_address=${collectionAddress}&order_direction=asc`;

      const openseaData = await axios.get(url);

      console.log("Data: ", openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };

    getNFTs();
  }, []);

  return (
    <div className="app">
      <Header />
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
