import React from "react";

const Features = () => {
  return (
    <>
        <section className="fts-container">
          <img
            className="fts-bg-effect-1"
            src="/images/features-circle-1.png"
            alt="abs-img"
          />
          <h2 className="fts-header">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
          <div className="fts-flex">
            <div className="fts-flex-item">
              <h3 className="fts-item-header">Invest Smart</h3>
              <p className="fts-item-txt">
                Get full statistic information about the behaviour of buyers and
                sellers will help you to make the decision.{" "}
              </p>
              <button className="fts-item-button">Learn More</button>
            </div>
            <img
              className="fts-item-img"
              src="/images/feature-1-img.png"
              alt="invest smart"
            />
          </div>

          <div className="fts-flex">
            <img
              className="fts-item-img"
              src="/images/feature-2-img.png"
              alt="Detailed Statistics"
            />
            <div className="fts-flex-item">
              <h3 className="fts-item-header">Detailed Statistics</h3>
              <p className="fts-item-txt">
                View all mining related information in realtime, at any point at
                any location and decide which polls you want to mine in.{" "}
              </p>
              <button className="fts-item-button">Learn More</button>
            </div>
          </div>

          <div className="fts-flex">
            <div className="fts-flex-item fts-adj">
              <h3 className="fts-item-header">
                Grow your profit and track your investment
              </h3>
              <p className="fts-item-txt">
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.
              </p>
              <button className="fts-item-button">Learn More</button>
            </div>
            <img
              className="fts-item-img fts-adj-img"
              src="/images/feature-3-img.png"
              alt="invest smart"
            />
          </div>
          <img
            className="fts-bg-effect-2"
            src="/images/features-circle-2.png"
            alt="abs-img"
          />
        </section>

        <section className="waitlist">
          <div className="waitlist-flex">
            <div className="waitlist-item">
              <img
                className="waitlist-bg-effect-1"
                src="/images/eth-vector.png"
                alt="vector-bg-effect"
              />
              <h3>Start mining now</h3>
              <p>
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </div>
            <div className="waitlist-flex-1">
              <div className="waitlist-flex-2">
                <p>Enter your email</p>
                <hr />
              </div>
              <button className="waitlist-btn">Subscribe</button>
              <img
                className="waitlist-bg-effect-2"
                src="/images/btc-vector.png"
                alt="vector-bg-effect"
              />
            </div>
          </div>
          <img
            className="ftr-effect-1"
            src="/images/footer-effect.png"
            alt="effect"
          />
          <img
            className="ftr-effect-2"
            src="/images/footer-effect-2.png"
            alt="effect"
          />
        </section>
    </>
  );
};
export default Features;
