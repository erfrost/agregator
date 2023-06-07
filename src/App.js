import React from "react";
import "./App.css";
import Header from "./components/header/header";
import LogoBlock from "./components/logoblock/logoBlock";
import FilterBox from "./components/filter/filter";
import PopularItems from "./components/popularItems/popularItems";

function App() {
  return (
    <div className="app">
      <div className="main-box">
        <Header />
        <LogoBlock />
        <FilterBox />
        <PopularItems />
      </div>
    </div>
  );
}

export default App;
