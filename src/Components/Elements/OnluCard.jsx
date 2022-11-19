import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

const OnluCard = () => {
  return (
    <div className="OnluCard-section">
      <div className="container   text-white text-center">
        <div className="row">
          {/* <div className="col-md-3"></div> */}
          <div className="col-md-12 ">
            <p className="p1">CRYPTO.COM VISA CARD</p>
            <h1>The only card you need</h1>
            <p className="p2">
              Enjoy up to 5% back on all spending with your sleek, pure metal
              card. <br/> No annual fees. Top-up with fiat or crypto.
            </p>
             <button className="btn mt-3 text-white">Choose your Cards <AiOutlineArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnluCard;
