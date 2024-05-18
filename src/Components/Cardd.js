import React from "react";
import "./Cardd.css";
import burger from "../Photos/o1.jpg";
import { Button, Card, Icon } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cardd = (props) => {
  return (
    <div className="mainn">
      <div className="imgg">
        <img
          src={props.image}
          style={{
            border: "2px solid orange",
            borderRadius: "100%",
            width: "25vh",
            height: "25vh",
            margin: "25px",
          }}
        ></img>
      </div>
      <div className="contain ">
        <span>{props.title}</span>
        <p>{props.discount}</p>
        <Button
          variant="contained"
          sx={{
            background: "#ffcd38",
            borderRadius: "20px",
            marginLeft: "auto",
          }}
        >
          Order Now
          <ShoppingCartIcon sx={{ marginLeft: "3vh" }} />
        </Button>
      </div>
    </div>
  );
};

export default Cardd;
