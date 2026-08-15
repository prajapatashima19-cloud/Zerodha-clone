import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
          <div className="border d-flex align-items-center my-5 p-3">
            <span>
              <i
                class="bi bi-plus-circle fs-5 p-3"
                style={{ color: "rgb(47, 129, 194)" }}
              ></i>
            </span>
            <h2 className="fs-4 text-muted w-100">Account Opening</h2>
            <i
              class="fa-solid fa-angle-down fs-5"
              style={{ color: "rgb(47, 129, 194)" }}
            ></i>
          </div>

          <div className="border d-flex align-items-center my-5 p-3">
            <span>
              <i
                class="bi bi-plus-circle fs-5 bg-light-blue p-3"
                style={{ color: "rgb(47, 129, 194)" }}
              ></i>
            </span>
            <h2 className="fs-4 text-muted w-100">Your Zerodha Account</h2>
            <i
              class="fa-solid fa-angle-down fs-5"
              style={{ color: "rgb(47, 129, 194)" }}
            ></i>
          </div>
          <div className="border d-flex align-items-center my-5 p-3">
            <span>
              <i
                class="bi bi-plus-circle fs-5 bg-light-blue p-3"
                style={{ color: "rgb(47, 129, 194)" }}
              ></i>
            </span>
            <h2 className="fs-4 text-muted w-100">Kite</h2>
            <i
              class="fa-solid fa-angle-down fs-5"
              style={{ color: "rgb(47, 129, 194)" }}
            ></i>
          </div>
          <div className="border d-flex align-items-center my-5 p-3">
            <span>
              <i
                class="bi bi-plus-circle fs-5 bg-light-blue p-3"
                style={{ color: "rgb(47, 129, 194)" }}
              ></i>
            </span>
            <h2 className="fs-4 text-muted w-100">Funds</h2>
            <i
              class="fa-solid fa-angle-down fs-5"
              style={{ color: "rgb(47, 129, 194)" }}
            ></i>
          </div>
          <div className="border d-flex align-items-center my-5 p-3">
            <span>
              <i
                class="bi bi-plus-circle fs-5 bg-light-blue p-3"
                style={{ color: "rgb(47, 129, 194)" }}
              ></i>
            </span>
            <h2 className="fs-4 text-muted w-100">Console</h2>
            <i
              class="fa-solid fa-angle-down fs-5"
              style={{ color: "rgb(47, 129, 194)" }}
            ></i>
          </div>

          <div className="border d-flex align-items-center mt-5 p-3">
            <span>
              <i
                class="bi bi-plus-circle fs-5 bg-light-blue p-3"
                style={{ color: "rgb(47, 129, 194)" }}
              ></i>
            </span>
            <h2 className="fs-4 text-muted w-100">Coin</h2>
            <i
              class="fa-solid fa-angle-down fs-5"
              style={{ color: "rgb(47, 129, 194)" }}
            ></i>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
          <div className="row mt-5">
            <div
              className="p-3 mt-4"
              style={{
                backgroundColor: "#f8f1e4",
                borderLeft: "8px solid orange",
              }}
            >
              <ul className="notice-list fs-5">
                <li>
                  <a href="#" className="text-decoration-underline">
                    Adjustment of F&O contracts of MPHASIS due to dividend
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#"className="text-decoration-underline">
                    Adjustment of F&O contracts of UNIONBANK due to dividend
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="border border-top p-3 fs-5">Quick links</div>
            <a href="#" className="border border-top p-3 fs-5">
              1. Track account opening
            </a>
            <a href="#" className="border border-top p-3 fs-5">
              2. Track segment activation
            </a>
            <a href="#" className="border border-top p-3 fs-5">
              3. Intraday margins
            </a>
            <a href="#" className="border border-top p-3 fs-5">
              4. Kite user manual
            </a>
            <a href="#" className="border border-top p-3 fs-5">
              5. Learn how to create a ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
