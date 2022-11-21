import React from "react";
import { FaMedium,FaApple,FaPinterest,FaTwitter,FaFacebookF,FaYoutube ,FaTelegram,FaInstagram,FaLinkedin,FaGoogle} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container pt-5">
        <div className="row footer-top">
          <div className="col-lg-2 col-6">
              <h5>App</h5>
              <ul className="list-unstyled">
                <li>Buy and Sell</li>
                <li>Crypto and Earn</li>
                <li>Crypto Credit</li>
                <li>Crypto.com pay</li>

              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h5>Exchange</h5>
              <ul className="list-unstyled">
                <li>Exchange Change</li>
                <li>Margin Trading </li>
                <li>Derivatives Trading</li>
                <li>Exchange Change</li>
                <li>Exchange Change</li>
                <li>Exchange Change</li>
                <li>Exchange Change</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h5>Blockchain</h5>
              <ul className="list-unstyled">
                <li>What's Trending</li>
                <li>Product</li>
                <li>Events</li>
                <li>University</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h5> Resources</h5>
              <ul className="list-unstyled">
                <li>What's Trending</li>
                <li>Product</li>
                <li>Events</li>
                <li>University</li>
                <li>Research</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-6 col-6">
                <img src="Assists/Appstore2.png"  className="img1 "alt="no" />
                </div>
                <div className="col-lg-6 col-6">
                <img src="Assists/Group.png" className=" img2 " alt="no" />
                </div>
              </div>
              {/* <div className="d-flex">
                
                
              </div> */}
              <div className="mb-5">
                <ul className="list-unstyled d-flex justify-content-between flex-wrap">
                  <li><FaFacebookF size={25}/></li>
                  <li><FaTwitter size={25}/></li>
                  <li><FaInstagram size={25}/></li>
                  <li><FaLinkedin size={25}/></li>
                  <li><FaGoogle size={25}/></li>
                  <li><FaYoutube size={25}/></li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-between flex-wrap">
                  <li><FaApple size={25}/></li>
                  <li><FaPinterest size={25}/></li>
                  <li><FaMedium size={25}/></li>
                  <li><FaTelegram size={25}/></li>
                  <li><FaGoogle size={25}/></li>
                  <li><FaYoutube size={25}/></li>
                </ul>
              </div>
              </div>
          </div>
          <div className="row footer-mid">
          <div className="col-lg-2 col-6">
              <h5>Cards</h5>
              <ul className="list-unstyled">
                <li>What's Trending</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h5>Commerce</h5>
              <ul className="list-unstyled">
                <li>What's Trending</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h5>DeFi</h5>
              <ul className="list-unstyled">
                <li>Wallet</li>
                <li>Swap</li>
                <li>Earn</li>
                <li>Dashboard</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Careers</li>
                <li>News</li>
                <li>Security</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5>Learn</h5>
              <ul className="list-unstyled">
                <li>What's Trending</li>
                <li>Product</li>
                <li>Events</li>
                <li>University</li>
                <li>Research</li>
                <li>Market Update </li>
              </ul>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
          <div className="col-lg-12">
              <hr className="footer-line" />
            </div>
          </div>
          <div className="row">
          <div className="col-lg-12">
             <p className="footer-bottom">Copyright © 2018 - 2022 Crypto.com. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;