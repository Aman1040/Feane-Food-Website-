import React from "react";
import "./Footer.css";
import { Card, CardContent } from "@mui/material";
import client1 from "../Photos/client1.jpg";
import client2 from "../Photos/client2.jpg";
import { orange } from "@mui/material/colors";
import Contact from "./Contact";
const Footer = () => {
  return (
    <div className="foot-container">
      <div className="foot-first font">What Say Ours Customers</div>
      <div className="foot-card">
        <div className="foot-card-1">
          <Card
            sx={{
              height: "23vh",
              width: "80%",
              fontSize: "x-small",
              m: "10ch",
              backgroundColor: "#232D3F",
              color: "white",
            }}
          >
            <CardContent sx={{ m: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum!
              <CardContent>
                <b>Moana Michell</b>
              </CardContent>
            </CardContent>
          </Card>
          <div className="foot-img">
            <img
              src={client1}
              height="100ch"
              style={{
                borderRadius: "80px",
                border: "6px solid orange",
              }}
            ></img>
          </div>
        </div>
        <div className="foot-card-2">
          <Card
            sx={{
              height: "23vh",
              width: "80%",
              fontSize: "x-small",
              m: "10ch",
              backgroundColor: "#232D3F",
              color: "white",
            }}
          >
            <CardContent sx={{ m: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum!
              <CardContent>
                <b>Mike hamel</b>
              </CardContent>
            </CardContent>
          </Card>
          <div className="foot-img">
            <img
              src={client2}
              height="100ch"
              style={{
                borderRadius: "80px",
                border: "6px solid orange",
              }}
            ></img>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Footer;
