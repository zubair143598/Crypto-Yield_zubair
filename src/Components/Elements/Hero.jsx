import React from "react";

const Hero = () => {
  return (
    <div className="Hero-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-5">
            <img
              src="./Assists/Frame.png"
              style={{ width: "338.23px", height: "665.53px", marginBottom:"-7rem" }}
              alt=""
            />
          </div>
          <div className="col-md-7">
            <h1 className="h1">The World’s Fastest Growing Crypto App</h1>
            <ul className="text-white mt-4 d-flex list-unstyled">
              <li>
                <img
                  src="./Assists/Vector.png"
                  style={{ width: "24px", height: "24px" }}
                  alt=""
                />
              </li>
              <li className="ms-3">
                <p>
                  Join <span style={{ color: "#D895FF" }}> 50m+</span> users
                  buying and selling{" "}
                  <span style={{ color: "#D895FF" }}>
                    250+ cryptocurrencies at true cost.
                  </span>
                </p>
              </li>
            </ul>
            <ul className="text-white ulP d-flex list-unstyled">
              <li>
                <img
                  src="./Assists/Vector.png"
                  style={{ width: "24px", height: "24px" }}
                  alt=""
                />
              </li>
              <li className="ms-3 p-0 m-0 ">
                <p className="">
                  Spend with the Crypto Yeild Visa Card and
                  <span style={{ color: "#D895FF" }}>get up to 5%</span> back
                </p>
              </li>
            </ul>
            <ul className="text-white ulP  d-flex list-unstyled">
              <li>
                <img
                  src="./Assists/Vector.png"
                  style={{ width: "24px", height: "24px" }}
                  alt=""
                />
              </li>
              <li className="ms-3  ">
                <p className="">
                  Grow your portfolio by 
                   <span style={{ color: "#D895FF" }}>
                    receiving rewards up to 14.5%
                  </span>{" "}
                  on your crypto assets
                </p>
              </li>
              </ul>
              <div className="row mb-2">
                <div className="col-md-3">
                <img src="./Assists/googleplay.png" className="googleplay mt-4 " alt="" />
                </div>
                <div className="col-md-3"><img src="./Assists/applestore.png" className="googleplay mt-4 " alt="" /></div>
                <div className="col-md-4"><img src="./Assists/Rectangle.png" className="Rectangle mt-2 mb-2" alt="" /></div>
              </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
