import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h3 className="mt-4 mb-5 fw-normal fs-4">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#">Zerodha.tech</a> blog.
        </h3>
      </div>
      <section className="row text-center mt-5">
        <h2 className="text-muted">The Zerodha Universe</h2>
        <p className="fs-5 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row gx-5 mt-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src="media\images\zerodhaFundhouse.png"
                alt="Zerodha Funds"
                className="img-fluid mb-3 mt-3"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </div>

            <p className="text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src="media\images\sensibullLogo.svg"
                alt="Zerodha Funds"
                className="img-fluid mb-3 mt-3"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </div>

            <p className="text-muted">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src="media\images\streakLogo.png"
                alt="Zerodha Funds"
                className="img-fluid mb-3 mt-3"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </div>

            <p className="text-muted">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src="media/images/smallcaseLogo.png"
                alt="Zerodha Funds"
                className="img-fluid mb-3 mt-3"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </div>

            <p className="text-muted">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src="media/images/goldenpiLogo.png"
                alt="Zerodha Funds"
                className="img-fluid mb-3 mt-3"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </div>

            <p className="text-muted">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src="media/images/dittoLogo.png"
                alt="Zerodha Funds"
                className="img-fluid mb-3 mt-3"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </div>

            <p className="text-muted">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      <button className="btn btn-primary fs-5 mx-auto mt-3 w-25">
        Signup now
      </button>
      </section>
    </div>
  );
}

export default Universe;
