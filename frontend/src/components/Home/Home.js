import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row d-flex justify-content-center flex-coloum">
          {/*  Bootstrap carousel  */}
          <div className="col-md-5">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
              </ol>

              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/assets/img/buildings/home/5x5-1.png"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3
                      className="rounded-top p-1"
                      style={{ "backgroundColor": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Find Residence
                    </h3>
                    <p
                      className="rounded-bottom p-1"
                      style={{ "backgroundColor": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Need a place to live we have got you covered.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/assets/img/buildings/home/5x5-6.png"
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3
                      className="rounded-top p-1"
                      style={{ "backgroundColor": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Book Residence
                    </h3>
                    <p
                      className="rounded-bottom p-1"
                      style={{ "backgroundColor": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Book a suitable residence from anywhere at any time.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/assets/img/buildings/home/5x5-7.png"
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3
                      className="rounded-top p-1"
                      style={{ "backgroundColor": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Advertise your Residence
                    </h3>
                    <p
                      className="rounded-bottom p-1"
                      style={{ "backgroundColor": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Effortlessly advertise your residence to attract renters.
                      Convenient, online, and effective.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExample"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExample"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>

          {/* Dashboard message for Owner */}
          <div className="col-md-5 mb-4">
            <div className="card bg-primary">
              <div className="card-header d-flex justify-content-center">
                <h3 className="m-0 me-2 text-white">Why Advertize Online?</h3>
              </div>
              <div className="m-2">
                {/* 1st box */}
                <div className="bg-white p-2 mx-2 my-3 rounded">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h4 className="text-primary">Track Bookings 📃</h4>
                    <div>Track all of your residencs's bookings.</div>
                  </div>
                </div>

                {/* 2nd box */}
                <div className="bg-white p-2 mx-2 my-3 rounded">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h4 className="text-primary">Easy Advertising 📰</h4>
                    <div>We Make Online Advertising Simple and Easy.</div>
                  </div>
                </div>

                {/* 3rd box */}
                <div className="bg-white p-2 mx-2 my-3 rounded">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h4 className="text-primary">Safe & Secure 🔒</h4>
                    <div>
                      We ensure your personal information is kept safe and
                      secure.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
