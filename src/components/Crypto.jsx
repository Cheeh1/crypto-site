import React from "react";
import btc from "../assets/icons/bitcoin-yellow.png";
import eth from "../assets/icons/ethereum.png";
import ltc from "../assets/icons/litecoin.png";
import arrow from "../assets/icons/Arrow.png";
import arrowBg from "../assets/icons/Arrow-bg.png";

function Crypto() {
  return (
    <div className="crypto-container">
      <h2 className="crypto-header">
        Trade securely and market the high growth cryptocurrencies.
      </h2>
      <div className="crypto-box">
        <div className="box-item-1">
          <img className="box-img" src={btc} alt="bitcoin" />
          <h3 className="box-header-1">
            Bitcoin<sup className="sup-1">BTC</sup>
          </h3>
          <p className="box-txt-1">
            Digital currency in which a record of transactions is maintained.
          </p>
          <div className="box-btn hide">
            <p>Start mining</p>
            <img src={arrow} alt="arrow" />
          </div>
          <img className="box-logo" src={arrowBg} alt="transparent-arrow" />
        </div>

        <div className="box-item-1">
          <img className="box-img" src={eth} alt="ethereum" />
          <h3 className="box-header-1">
            Ethereum<sup className="sup-1">ETH</sup>
          </h3>
          <p className="box-txt-1">
            Blockchain technology to create and run decentralized digital
            applications.
          </p>
          <div className="box-btn hide">
            <p>Start mining</p>
            <img src={arrow} alt="arrow" />
          </div>
          <img className="box-logo" src={arrowBg} alt="transparent-arrow" />
        </div>

        <div className="box-item-1">
          <img className="box-img" src={ltc} alt="litecoin" />
          <h3 className="box-header-1">
            Litecoin<sup className="sup-1">LTC</sup>
          </h3>
          <p className="box-txt-1">
            Cryptocurrency that enables instant payments to anyone in the world.
          </p>
          <div className="box-btn hide">
            <p>Start mining</p>
            <img src={arrow} alt="arrow" />
          </div>
          <img className="box-logo" src={arrowBg} alt="transparent-arrow" />
        </div>
      </div>
    </div>
  );
}
export default Crypto;
