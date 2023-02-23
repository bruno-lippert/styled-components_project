import React from "react";
import { StyledTimeline } from "./styledTimeline";
import productImage from "../../images/productImage.png";

export default function timeline() {
  return (
    <StyledTimeline>
      <img src={productImage} alt="productImage" className="productImage" />
      <div className="prductDescription">
        <h2>Apple Watch nova geração</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          incidunt, repellendus, expedita quas dolore a assumenda libero
          praesentium eum voluptates nostrum modi provident error temporibus
          fugiat placeat recusandae esse nemo?
        </p>
        <div className="shopButton">
          <h4>Comprar agora!</h4>
        </div>
      </div>
    </StyledTimeline>
  );
}
