import React from "react";
import "./Cardd2.css";
import burger from "../Photos/burger.png";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
const Cardd2 = (props) => {
  return (
    <div className="container1">
      <div className="upper">
        <img
          src={props.image}
          width="85vh"
          height="78vh"
          style={{
            marginTop: "5ch",
            background: "transparent",
          }}
        ></img>
      </div>
      <div className="lower">
        <h2 id="text">{props.title}</h2>
        <p id="text">
          Los locales de comida rápida ofrecen bocadillos rápidos, como
          hamburguesas y papas fritas, para atender a agendas apretadas. Son
          bulliciosos centros de conveniencia, donde el gusto se une a la
          velocidad.
        </p>
        <div className="prize">
          <h3 id="text">{props.prize}</h3>
          <ShoppingCart
            sx={{
              marginLeft: "12ch",
              backgroundColor: "orange",
              padding: "2%",
              borderRadius: "12ch",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cardd2;
