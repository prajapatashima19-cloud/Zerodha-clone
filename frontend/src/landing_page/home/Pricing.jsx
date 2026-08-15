import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 mt-5">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className=" text-decoration-none">
            Explore our products <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mt-4">
          <div className="row text-center">
            <div className="col-lg-6 col-md-6 col-sm-12 border px-5 py-4">
              <h1><i className="fa-solid fa-indian-rupee-sign fs-2"></i>0</h1>
              <p className=" mt-5">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-12 border px-3 py-4">
              <h1><i class="fa-solid fa-indian-rupee-sign fs-2"></i>20</h1>
              <p className=" mt-5">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
