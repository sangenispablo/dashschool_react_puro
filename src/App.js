import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
