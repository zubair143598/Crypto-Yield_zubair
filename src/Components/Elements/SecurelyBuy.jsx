import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Table from "react-bootstrap/Table";

const SecurelyBuy = () => {
  return (
    <div className="SecurelyBuy-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h6 className="h6_1">SECURELY BUY, SELL, STORE, SEND AND TRACK</h6>
            <h1>Buy crypto at true cost</h1>
            <p className="p1">
              Buy and sell 250+ cryptocurrencies with 20+ fiat currencies <br />{" "}
              using bank transfers or your credit/debit card
            </p>
            {/* <img src="./Assists/Frame 35.png" alt="" /> */}

            <div>
              <Table responsive="md">
                <tbody>
                  <tr className="border-bottom">
                    <td className="bitcoin">
                      <p>
                        Bitcoin <span>BTA</span>
                      </p>
                    </td>
                    <td className="dollar td1">
                      <h3>$21,019.25</h3>
                    </td>
                    <td className="nev td1">
                      <p>-1.35%</p>
                    </td>
                    <td className="dollar2 td1">
                      <h6>$400,939,726,363.91</h6>
                    </td>
                    <td className=" td1">
                      <img src="./Assists/Graph1.png" alt="" />
                    </td>
                    <td className=" td1">
                      <button className="btn bg-black text-white">Trade</button>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="bitcoin">
                      <p>
                        Ethereum <span>ETH</span>
                      </p>
                    </td>
                    <td className="dollar td1">
                      <h3>$1,593.36</h3>
                    </td>
                    <td className="nev td1">
                      <p>-2.40%</p>
                    </td>
                    <td className="dollar2 td1">
                      <h6>$193,478,949,760.73</h6>
                    </td>
                    <td className=" td1">
                      <img src="./Assists/Graph2.png" alt="" />
                    </td>
                    <td className=" td1">
                      <button className="btn bg-black text-white">Trade</button>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="bitcoin">
                      <p>
                        Cardano <span>ADA</span>
                      </p>
                    </td>
                    <td className="dollar td1">
                      <h3>$0.411385</h3>
                    </td>
                    <td className="nev td1">
                      <p>-3.69%</p>
                    </td>
                    <td className="dollar2 td1">
                      <h6>$13,957,416,040.67</h6>
                    </td>
                    <td className=" td1">
                      <img src="./Assists/Graph1.png" alt="" />
                    </td>
                    <td className=" td1">
                      <button className="btn bg-black text-white">Trade</button>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="bitcoin">
                      <p>
                        Dogecoin <span>DOGE</span>
                      </p>
                    </td>
                    <td className="dollar td1">
                      <h3>$0.118427</h3>
                    </td>
                    <td className="nev td1">
                      <p>-5.00%</p>
                    </td>
                    <td className="dollar2 td1">
                      <h6>$15,551,890,509.69</h6>
                    </td>
                    <td className=" td1">
                      <img src="./Assists/Graph2.png" alt="" />
                    </td>
                    <td className=" td1">
                      <button className="btn bg-black text-white">Trade</button>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="bitcoin">
                      <p>
                        Polkadot <span>DOT</span>
                      </p>
                    </td>
                    <td className="dollar td1">
                      <h2>$6.95</h2>
                    </td>
                    <td className="nev td1">
                      <p>-1.79%</p>
                    </td>
                    <td className="dollar2 td1">
                      <h5>$7,791,830,488.81</h5>
                    </td>
                    <td className=" td1">
                      <img src="./Assists/Graph1.png" alt="" />
                    </td>
                    <td className=" td1">
                      <button className="btn bg-black text-white">Trade</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <button className="btn btn1 fs-5 mb-5">
              Learn more <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurelyBuy;
