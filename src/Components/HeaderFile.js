import React, { useState } from "react";
import { Typography, AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import App from "../App";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "./HeaderFile.css";
import MainContent from "./MainContent";

const HeaderFile = () => {
  const [value, setValue] = useState();
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ "&:hover": { backgroundColor: "#232D3F" } }}>
          <Typography sx={{ mr: "25%" }}>
            <div className="font">Feane</div>
          </Typography>
          <Tabs
            textColor="inherit"
            sx={{ mr: "15%" }}
            value={value}
            indicatorColor="secondary"
            onChange={(e, value) => {
              setValue(value);
            }}
          >
            <Tab label="HOME"></Tab>
            <Tab label="MENU"></Tab>
            <Tab label="ABOUT"></Tab>
            <Tab label="BOOKTABLE"></Tab>
          </Tabs>

          <Person2Icon className="iconscss" />
          <ShoppingCartIcon className="iconscss" />
          <SearchIcon className="iconscss" />

          <Button
            variant="contained"
            sx={{
              background: "#ffcd38",
              borderRadius: "20px",
              marginLeft: "auto",
            }}
          >
            Order Online
          </Button>
        </Toolbar>
      </AppBar>
      <MainContent />
    </React.Fragment>
  );
};

export default HeaderFile;
