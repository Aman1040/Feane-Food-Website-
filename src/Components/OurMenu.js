import React from "react";
import "./OurMenu.css";
import { AppBar, Button, Stack, Typography } from "@mui/material";
import Cardd2 from "./Cardd2";
import f1 from "../Photos/f1.png";
import f2 from "../Photos/f2.png";
import BookTable from "./BookTable";
import Footer from "./Footer";
const OurMenu = () => {
  return (
    <div className="container">
      <div className="head">Our Menu</div>
      <div className="nav">
        <Stack
          sx={{
            m: "10vh",
            justifyContent: "center",
          }}
          spacing={3}
          direction="row"
        >
          <Button
            sx={{
              color: "Black",
              "&:hover": {
                color: "white",
                background: "black",
                borderRadius: "4vh",
                width: "15vh",
              },
            }}
          >
            All
          </Button>
          <Button
            sx={{
              color: "Black",
              "&:hover": {
                color: "white",
                background: "black",
                borderRadius: "4vh",
                width: "15vh",
              },
            }}
          >
            Burger
          </Button>
          <Button
            sx={{
              color: "Black",
              "&:hover": {
                color: "white",
                background: "black",
                borderRadius: "4vh",
                width: "15vh",
              },
            }}
          >
            Pizza
          </Button>
          <Button
            sx={{
              color: "Black",
              "&:hover": {
                color: "white",
                background: "black",
                borderRadius: "4vh",
                width: "15vh",
              },
            }}
          >
            Pasta
          </Button>
          <Button
            sx={{
              color: "Black",

              "&:hover": {
                color: "white",
                background: "black",
                borderRadius: "4vh",
              },
            }}
          >
            Fries
          </Button>
        </Stack>
      </div>
      <div className="cardd">
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
      </div>
      <div className="cardd">
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
      </div>
      <div className="cardd">
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
      </div>
      <div className="cardd">
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
        <Cardd2 image={f1} title="Delicious Pizza" prize="$15" />
        <Cardd2 image={f2} title="Delicious Burger" prize="$50" />
      </div>
      <div className="btn">
        <Button
          variant="contained"
          sx={{
            background: "#ffcd38",
            borderRadius: "20px",
            marginLeft: "auto",
          }}
        >
          View More
        </Button>
      </div>
      <div className="weare">
        <div className="part1"></div>
        <div className="part2">
          <Typography
            variant="h6"
            sx={{ marginLeft: "auto", marginBottom: "4vh" }}
          >
            <div className="font">We Are Feane</div>
          </Typography>
          <Typography sx={{ marginBottom: "8vh" }}>
            They serve up instant satisfaction in every bite. Los locales de
            comida rápida ofrecen bocadillos rápidos, como hamburguesas y papas
            fritas, para atender a agendas apretadas. Son bulliciosos centros de
            conveniencia, donde el gusto se une a la velocidad. Ya sea para
            autoservicio o para cenar, brindan satisfacción instantánea en cada
            bocado.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#ffcd38",
              borderRadius: "20px",
              marginLeft: "auto",
            }}
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="table">
        <BookTable />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OurMenu;
