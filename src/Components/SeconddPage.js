import { Card } from "@mui/material";
import React from "react";
import Cardd from "./Cardd";
import "./SeconddPage.css";
import burger from "../Photos/burger.png";
import o1 from "../Photos/o1.jpg";  
import o2 from "../Photos/o1.jpg";
import OurMenu from "./OurMenu";
const SeconddPage = () => {
  return (
    <div>
      <div className="first">
        <Cardd image={o1} discount="20% off" title="Tasty Thrusday" />
        <Cardd image={o2} discount="10% off" title="Pizza Days" />
      </div>
      <OurMenu />
    </div>
  );
};

export default SeconddPage;
