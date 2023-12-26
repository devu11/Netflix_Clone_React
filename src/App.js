import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import RowCards from "./RowCards/RowCards";
import Constants from "./constants/constants";
import {originals,action} from "./Urls"

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <RowCards Urls={originals} title='Netflix Originals' />
      <RowCards Urls={action} title='Action Movies' isSmall/>
      
    </div>
  );
}
export default App;



