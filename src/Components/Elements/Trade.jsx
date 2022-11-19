import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Trade = () => {
  return (
    <div className="Trade-section bg-black">
      <div className="container text-center text-white">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-10 mt-5">
            <p className="mt-5 p1">CRYPTO.COM EXCHANGE</p>
            <h1 className="h1">
              Trade with confidence on the world’s fastest and most secure
              crypto exchange
            </h1>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-3 mt-5">
                <ul className="d-flex justify-content-center align-items-center list-unstyled">
                  <li>
                    <img src="./Assists/monitor.png" alt="" />
                  </li>
                  <li className="ms-3">
                    <p className="p3">DESKTOP</p>
                    <p className="p4">
                      Go to Exchange
                      <FiArrowUpRight />{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mt-5">
                <ul className="d-flex justify-content-center align-items-center list-unstyled">
                  <li>
                    <img src="./Assists/monitor.png" alt="" />
                  </li>
                  <li className="ms-3">
                    <p className="p3">MOBILE APP</p>
                    <img src="./Assists/Playstore.png" alt="" />
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mt-5 mb-5">
                <ul className="d-flex justify-content-center align-items-center list-unstyled">
                  <li className="mt-2">
                    <img src="./Assists/monitor.png" alt="" />
                  </li>
                  <li className="ms-3 mt-2" >
                    {/* <p className="p3">DESKTOP</p> */}
                    <img src="./Assists/Appstore1.png" className="" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
