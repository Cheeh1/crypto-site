import React from "react";
import { arrow, btcYellow, eth, ltc, arrowBg } from "../assets";
import { motion } from 'framer-motion'

const Crypto = () => {

    const container = {
      visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5}},
      hidden: { opacity: 0 }
    }; 

  return (
    <>
      <section className="crypto-container">
        <h2 className="crypto-header">
          Trade securely and market the high growth cryptocurrencies.
        </h2>
        <div className="crypto-box">
          <motion.div initial="hidden" animate={controls} variants={container} className="box-item-1">
            <img className="box-img" src={btcYellow} alt="bitcoin" />
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
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={container} className="box-item-1">
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
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={container} className="box-item-1">
            <img className="box-img" src={ltc} alt="litecoin" />
            <h3 className="box-header-1">
              Litecoin<sup className="sup-1">LTC</sup>
            </h3>
            <p className="box-txt-1">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
            <div className="box-btn hide">
              <p>Start mining</p>
              <img src={arrow} alt="arrow" />
            </div>
            <img className="box-logo" src={arrowBg} alt="transparent-arrow" />
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Crypto;

