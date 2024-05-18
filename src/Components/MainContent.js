import React from "react";
import { Typography, Button } from "@mui/material";
import "./MainContent.css";
const MainContent = () => {
  return (
    <React.Fragment>
      <div className="main ">
        <Typography variant="h3" color="white" className="mar ">
          <div className="fontt">Fast Food Restaurant</div>
        </Typography>
        <Typography component="h6" className="mar1">
          Fast food joints offer quick bites, like burgers and fries, catering
          to busy schedules. They're bustling hubs of convenience, where taste
          meets speed. Whether a drive-thru or dine-in, they serve up instant
          satisfaction in every bite.
        </Typography>
        <Button
          className="mar"
          variant="contained"
          sx={{
            background: "#ffcd38",
            borderRadius: "20px",
            marginLeft: "auto",
            width: "25vh",
            height: "7vh",
          }}
        >
          Order Now
        </Button>
      </div>
    </React.Fragment>
  );
};

export default MainContent;
