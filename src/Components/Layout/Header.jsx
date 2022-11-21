import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar header   navbar-expand-lg bg-black">
      <div className="container">
        <Link
          className="nav-link text-white  clr"
          saria-current="page"
          to="Home"
        >
          Crypto Yield
        </Link>

        <button
          className=" color bg-white navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link  clr2 mx-3" aria-current="page" to="Home">
                NFT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link clr2 mx-3 " to="OurTeam">
                Price
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  clr2 mx-3" to="Swap">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  clr2 mx-3" href="#">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  clr2 mx-3" href="#">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  clr3 mx-3" href="#">
                <img src="./Assists/Appstore.png" className="r"  alt="" />
              </Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link  clr3 mx-3" href="#">
                <img src="./Assists/Logo.png" className="r"  alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
