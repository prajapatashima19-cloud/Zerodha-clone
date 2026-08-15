import React from "react";

function Hero() {
  return (
    <section className="bg-body-tertiary">
      <div className="container ">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1>Support Portal</h1>
            <button className="btn btn-primary btn-lg">My Ticket</button>
          </div>
          <div className="border rounded d-flex align-items-center my-5 p-3 bg-white">
            <span>
              <i class="fa-solid fa-magnifying-glass m-2 fs-5 text-muted"></i>
            </span>
            <input
              type="search"
              placeholder="Eg: How do I open my account, How do i activate F&O..."
              className="form-control border-0 shadow-none fs-5 text-muted"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
