import React from "react";

const Home = () => {
  return (
    <>
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row d-flex justify-content-center flex-coloum">
          {/*  Bootstrap carousel  */}
          <div class="col-md-5">
            <div
              id="carouselExample"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="0"
                  class="active"
                ></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
              </ol>

              <div class="carousel-inner rounded">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="/assets/img/buildings/home/5x5-1.png"
                    alt="First slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h3
                      class="rounded-top p-1"
                      style={{ "background-color": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Find Residence
                    </h3>
                    <p
                      class="rounded-bottom p-1"
                      style={{ "background-color": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Need a place to live we have got you covered.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/assets/img/buildings/home/5x5-6.png"
                    alt="Second slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h3
                      class="rounded-top p-1"
                      style={{ "background-color": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Book Residence
                    </h3>
                    <p
                      class="rounded-bottom p-1"
                      style={{ "background-color": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Book a suitable residence from anywhere at any time.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/assets/img/buildings/home/5x5-7.png"
                    alt="Third slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h3
                      class="rounded-top p-1"
                      style={{ "background-color": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Advertise your Residence
                    </h3>
                    <p
                      class="rounded-bottom p-1"
                      style={{ "background-color": "rgba(105, 108, 255, 0.8)" }}
                    >
                      Effortlessly advertise your residence to attract renters.
                      Convenient, online, and effective.
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExample"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExample"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
          </div>

          {/* Dashboard message for Owner */}
          <div class="col-md-5 mb-4">
            <div class="card bg-primary">
              <div class="card-header d-flex justify-content-center">
                <h3 class="m-0 me-2 text-white">Why Advertize Online?</h3>
              </div>
              <div class="m-2">
                {/* 1st box */}
                <div class="bg-white p-2 mx-2 my-3 rounded">
                  <div class="d-flex justify-content-center align-items-center flex-column">
                    <h4 class="text-primary">Track Bookings 📃</h4>
                    <div>Track all of your residencs's bookings.</div>
                  </div>
                </div>

                {/* 2nd box */}
                <div class="bg-white p-2 mx-2 my-3 rounded">
                  <div class="d-flex justify-content-center align-items-center flex-column">
                    <h4 class="text-primary">Easy Advertising 📰</h4>
                    <div>We Make Online Advertising Simple and Easy.</div>
                  </div>
                </div>

                {/* 3rd box */}
                <div class="bg-white p-2 mx-2 my-3 rounded">
                  <div class="d-flex justify-content-center align-items-center flex-column">
                    <h4 class="text-primary">Safe & Secure 🔒</h4>
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
