import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 text-center">
        <h2 className="text-dark">Charges</h2>
        <h4 className="mt-2 fs-4 text-secondary">
          List of all charges and taxes.
        </h4>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 mb-5 text-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img
              src="media/images/pricing0.svg"
              alt="Pricing Img"
              className="img-fluid mb-2 mt-3"
              style={{ height: "250px", objectFit: "contain" }}
            />
          </div>
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-4 fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

         <div className="col-lg-4 col-md-12 col-sm-12 mb-5 text-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img
              src="media\images\intradayTrades.svg"
              alt="Pricing Img"
              className="img-fluid mb-2 mt-3"
              style={{ height: "250px", objectFit: "contain" }}
            />
          </div>
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted mt-4 fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

         <div className="col-lg-4 col-md-12 col-sm-12 mb-5 text-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img
              src="media/images/pricing0.svg"
              alt="Pricing Img"
              className="img-fluid mb-2 mt-3"
              style={{ height: "250px", objectFit: "contain" }}
            />
          </div>
          <h2>Free direct MF</h2>
          <p className="text-muted mt-4 fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
