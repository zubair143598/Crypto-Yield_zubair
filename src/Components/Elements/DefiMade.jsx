import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const DefiMade = () => {
  return (
    <div className="DefiMade-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <img className="img1 " src="./Assists/Frame.png" alt="" />
          </div>
          <div className="col-lg-4">
            <p className="p1">CRYPTO.COM DEFI</p>
            <h1>DeFi Made Simple</h1>
            <p className="p2">
              <span style={{ color: "#0063F7" }}> DeFi Wallet.</span> Your Keys,
              Your Crypto.
            </p>
            <p className="p2">
              <span style={{ color: "#0063F7" }}> DeFi Earn.</span> No lock-up
              period and stable returns.
            </p>
            <p className="p2">
              <span style={{ color: "#0063F7" }}> DeFi Swap.</span> Swap DeFi
              coins and earn Triple Yield.
            </p>

            <button className="btn btn1 mb-5 mt-3">
            Go to Crypto.com DeFi <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefiMade;
