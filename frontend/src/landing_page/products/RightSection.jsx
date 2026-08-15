import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  learnMoreText,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-4 col-md-12 col-sm-12 mt-5 pt-5">
          <h3 className="mb-4 mt-5 pt-5">{productName}</h3>
          <p className="fs-5 fw-normal">{productDescription}</p>

            <a href={learnMore} className=" text-decoration-none fs-5">
              {learnMoreText} <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>

        <div className=" col-lg-8 col-md-12 col-sm-12">
          <a href="#">
            <img
              src={imageURL}
              alt="img"
              className="img-fluid ps-4"
              style={{ width: "90%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
