import React from "react";
import "./BookTable.css";
import { TextField, Button } from "@mui/material";

const BookTable = () => {
  return (
    <div className="table-body">
      <div className="table-first">
        <h4 className="font">Book a Table</h4>
      </div>
      <div className="table-container">
        <div className="table-form">
          <TextField
            label="Your Name"
            type="text"
            sx={{ width: "80%", mb: "5vh", mt: "1vh" }}
          ></TextField>
          <TextField
            label="Phone Number"
            type="number"
            sx={{ width: "80%", mb: "5vh" }}
          ></TextField>
          <TextField
            label="Your Email"
            type="email"
            sx={{ width: "80%", mb: "5vh" }}
          ></TextField>
          <TextField
            label="How many persons ?"
            type="number"
            sx={{ width: "80%", mb: "5vh" }}
          ></TextField>
          <TextField type="date" sx={{ width: "80%", mb: "5vh" }}></TextField>
        </div>
        <div className="loc"></div>
      </div>
      <div className="table-btn">
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
      </div>
    </div>
  );
};

export default BookTable;
