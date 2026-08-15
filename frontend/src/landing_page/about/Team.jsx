import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
        <div className="row p-3 mt-5 border-top">
      <h2 className="text-center text-muted my-5 ">People</h2>
      </div>

      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12 text-center mt-3">
            <img
              src="media\images\nithinKamath.jpg"
              alt="Nithin Kumar"
              className="img-fluid rounded-circle   w-50"
            ></img>
            <h4 className="mt-4 text-muted">Nithin Kamath</h4>
            <p className="fs-6 text-muted">Founder,CEO</p>

        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 fs-6 mt-4 " style={{ lineHeight: "1.8" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <Link to="/">Homepage</Link> /
            <Link to="/"> TradingQnA </Link> /<Link to="/"> Twitter </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
