import React from "react";

const Screens = () => {
  return (
    <div className="Screens-section">
      <div className="container position-relative">
        <div className="row" style={{}}>
          <div className="col-md-12 mt-5 text-center">
            <img src="./Assists/Asset1.png" className="p" style={{ width: "60%",marginTop:"-11rem" }} alt="" />
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <h1 className="h1">Liquidity</h1>
              <p>Deep order book liquidity in all market conditions</p>
            </div>
            <div className="col-md-3">
              <h1 className="h1">Speed</h1>
              <ul className="list-unstyled ">
                <li><p>2.7m TPS matching engine </p></li>
                <li><p>50 micro second core latency</p></li>
              </ul>
            </div>
            <div className="col-md-3">
                <h1>Security</h1>
                <ul className="list-unstyled">
                <li><p>SOC2 Type 1 Compliance </p></li>
                <li><p>PCI:DSS 3.2.1 Level 1 compliance </p></li>
                <li><p>ISO/IEC 27001:2013</p> </li>
                <li><p>ISO/IEC 27701:2019</p></li>
                <li><p> ISO 22301:2019</p></li>
                <li><p>Singapore Data Protection Trust Mark</p></li>
                </ul>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screens;
