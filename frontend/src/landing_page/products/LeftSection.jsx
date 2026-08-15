import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-lg-7 col-md-12 col-sm-12 mt-5">
          <img src={imageURL} alt="img" className="img-fluid px-4" />
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 mt-5 ">
          <h3 className="mb-4 pt-3">{productName}</h3>
          <p className="fs-5 fw-normal">{productDescription}</p>

          <div className="fs-5">
            <a href={tryDemo} className=" text-decoration-none pe-4">
              Try demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} className=" text-decoration-none p-4">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="d-flex gap-5 mt-3">
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" alt="googlePlay" />
            </a>
            <a href={appStore}>
              <img src="media\images\appstoreBadge.svg" alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
