import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom my-5 p-5 text-center">
        <h2 className="text-dark text-muted">Zerodha Products</h2>
        <h3 className="mt-2 fs-4 fw-normal">Sleek, modern and intuitive trading platforms.</h3>
        <p className="mt-3 fs-5">
          Check out our{" "}
          <a href="#" className=" text-decoration-none">
            investing offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
