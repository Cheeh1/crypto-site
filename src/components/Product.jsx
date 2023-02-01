import {React, useState} from "react";
import Modal from "./Modal";
import { arrow, arrowDown, logo, menu, close } from "../assets";

const Product = () => {
  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(!modalState)
  }

  return (
    <>
      <main className="container">
        <nav className="desktop-nav">
          <img src={logo} alt="CRAPPO" />
          <div className="nav-list">
            <ul>
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
            <div className="nav-list-2">
              <li className="login">
                <a href="">Login</a>
              </li>
              <div className="divider"></div>
              <button className="register">Register</button>
            </div>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="mobile-nav">
          <img className="mobile-nav-img" src={logo} alt="CRAPPO" />

          <div onClick={openModal} className="menu">
           { !modalState ? (<img src={menu} alt="menu" />)
            : (<img src={close} alt="close" />)
            }
          </div>
        </nav>

        <section className="section">
          <div className="intro">
            <p className="offer">
              <span className="txt-1">70% SAVE</span>For The Black Friday
              Weekend
            </p>
            <h1>Fastest & secure platform to invest in crypto</h1>
            <p className="intro-txt">
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <div className="intro-btn">
              <p>Try for FREE</p>
              <img src={arrow} alt="logo" />
            </div>
          </div>
          <img className="intro-img" src="/images/hero-img.png" alt="" />
          <div>
            <img
              className="intro-effect-1"
              src="/images/hero-ribbon-1.png"
              alt="ribbon"
            />
            <img
              className="intro-effect-2"
              src="/images/hero-ribbon-2.png"
              alt="ribbon"
            />
          </div>
        </section>

        <section className="stats">
          <div className="stats-flex">
            <img
              className="stats-img"
              src="/images/graph.png"
              alt="graph-logo"
            />
            <div className="stats-flex-2">
              <h2>$30B</h2>
              <p>Digital Currency Exchanged</p>
            </div>
          </div>

          <div className="stats-flex">
            <img
              className="stats-img"
              src="/images/profile.png"
              alt="profile-logo"
            />
            <div className="stats-flex-2">
              <h2>10M+</h2>
              <p>Trusted Wallets Investor</p>
            </div>
          </div>

          <div className="stats-flex">
            <img className="stats-img" src="/images/web.png" alt="web-logo" />
            <div className="stats-flex-2">
              <h2>195</h2>
              <p>Countries Supported</p>
            </div>
          </div>
        </section>

        <section className="why">
          <img className="why-img" src="/images/why-img.png" alt="why-img" />
          <div className="why-flex">
            <h2>Why you should choose CRAPPO</h2>
            <p>
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="why-btn">Learn More</button>
          </div>
          <img
            className="why-effect-1"
            src="/images/why-model-1.png"
            alt="abs-logo"
          />
          <img
            className="why-effect-2"
            src="/images/why-model-2.png"
            alt="abs-logo"
          />
          <img
            className="why-effect-3"
            src="/images/why-ribbon.png"
            alt="abs-logo"
          />
        </section>

        <section className="earn">
          <div className="earn-flex-1">
            <h2>Check how much you can earn</h2>
            <p>
              Let’s check your hash rate to see how much you will earn today,
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="abs">
            <div className="abs-flex-row">
              <div className="abs-flex-1">
                <p>Enter your hash rate</p>
                <hr />
              </div>
              <div className="abs-dot">.</div>
              <div className="abs-flex-2">
                <div className="abs-flex-3">
                  <p>TH/s</p>
                  <img src={arrowDown} alt="arrow-logo" />
                </div>
                <hr />
              </div>
              <button className="abs-btn">Calculate</button>
            </div>
            <div className="abs-flex-col">
              <p className="abs-flex-col-txt-1">ESTIMATED 24 HOUR REVENUE:</p>
              <p className="abs-flex-col-txt-2">
                0.055 130 59 ETH <span className="span-txt">($1275)</span>
              </p>
              <p className="abs-flex-col-txt-3">
                Revenue will change based on mining difficulty and Ethereum
                price.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Modal toggle={modalState} action={openModal}/> 
    </>
  );
};
export default Product;
