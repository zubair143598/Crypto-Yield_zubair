import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const DepositCrypto = () => {
  return (
    <div className="DepositCrypto-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <p className="p1">RYPTO EARN</p>
            <h1 className="h1">Deposit crypto, earn rewards</h1>
            <p>Choose from 40+ cryptocurrencies and stablecoins.</p>
            <button className="btn btn1 mb-5 mt-3">
              Calculate Rewards <AiOutlineArrowRight />
            </button>
            <ul className="d-flex list-unstyled">
              <li >
                <p className="py-0 my-0">Up to</p>
                <h1 className="py-0 my-0">14.5%</h1>
                <p className="py-0 my-0">p.a. on cryptos</p>
              </li>

              <li className="ms-5">
                <p className="py-0 my-0">Up to</p>
                <h1 className="py-0 my-0">8.5%</h1>
                <p className="py-0 my-0">p.a. on StableCoins</p>
              </li>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img src="./Assists/Frame.png" className="img1" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositCrypto;
