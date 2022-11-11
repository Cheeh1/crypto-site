import React from "react";
import {
  logo,
  visa,
  mastercard,
  btc,
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
} from "../assets";

const Footer = () => {
  return (
    <>
      <main className="ftr-container">
        <section className="ftr">
          <img src={logo} alt="crappo" />

          <div className="ftr-flex-1">
            <h3 className="ftr-header">Quick Link</h3>
            <ul className="ftr-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="ftr-flex-1">
            <h3 className="ftr-header">Resources</h3>
            <ul className="ftr-list">
              <li>
                <a href="#whitepaper">Download Whitepaper</a>
              </li>
              <li>
                <a href="">Smart Token</a>
              </li>
              <li>
                <a href="#blockchain">BlockChain Explorer</a>
              </li>
              <li>
                <a href="#cryptoapi">Crypto API</a>
              </li>
              <li>
                <a href="#interest">Interest</a>
              </li>
            </ul>
          </div>

          <div className="ftr-flex-2">
            <h2 className="ftr-header-2">
              We accept following payments systems
            </h2>
            <div className="ftr-flex-item">
              <img className="ftr-logo" src={visa} alt="visa" />
              <img className="ftr-logo" src={mastercard} alt="mastercard" />
              <img className="ftr-logo" src={btc} alt="bitcoin" />
            </div>
          </div>
        </section>

        <section className="ftr-2">
          <p className="ftr-2-txt">©2021 CRAPPO. All rights reserved</p>
          <div className="ftr-2-list">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instgram" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedln" />
          </div>
        </section>
      </main>
    </>
  );
};
export default Footer;
