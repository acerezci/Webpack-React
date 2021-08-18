import React from "react";
import { Button } from "./components/button";
import "./styles/app.scss";
import Star from "./assets/star.png";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="title">KUNDUZ TITLE</div>
      <Button />
      <div className="star">
        <img src={Star} alt="" />
      </div>
    </div>
  );
};

export default App;
