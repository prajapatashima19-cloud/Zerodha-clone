import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row border-top mt-5">
        <div className="col-lg-8 col-md-12 col-sm-12 mt-5 p-5 ">
          <h3 className="text-center mb-4">
            <a href="#">Brokerage calculator</a>
          </h3>

          <ul>
            <li className="mb-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>

            <li className="mb-2">
              Digital contract notes will be sent via e-mail.
            </li>

            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>

            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>

            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-5 p-5">
          <h3 className="text-center mb-4">
            <a href="#">List of Charges</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
