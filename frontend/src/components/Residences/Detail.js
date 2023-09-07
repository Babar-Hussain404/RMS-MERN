import React from "react";
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold mb-3">
        <span class="text-muted fw-light"> Dashboard / @(Model.Type)s </span> / @Model.Type Details
    </h4>

    <div class="card">
        <div class="card-header d-flex">
            <h5 class="mx-auto my-3"><strong class="fon">@Model.Type Details</strong></h5>

        </div>
        <div class="card-body">
            <form>

                <div class="row">
                    <div class="col-md-5">

                        {/* Name */}
                        <h5 class="d-flex justify-content-center">
                            <strong>@Model.Name</strong>
                        </h5>

                        {/* Photo */}
                        <div class="d-flex justify-content-center align-items-sm-center m-5">
                            <img src="/assets/img/buildings/Hotel/Hotel-1.png"
                                 alt="building-img"
                                 class="d-block rounded"
                                 height="250"
                                 width="250"
                                 id="residence-pic" />
                        </div>

                        {/* Buttons */}
                        <div class="d-flex btn-group mx-4">
                            
                                <a class="btn btn-warning" href="/Residences/Edit?Id=@Model.Id">
                                    <span class="tf-icons bx bx-edit-alt"></span>&nbsp;Edit
                                </a>
                            
                            <Link to='/hotel' class="btn btn-outline-secondary">
                                <span class="tf-icons bx bx-right-arrow-alt"></span>&nbsp;Back
                            </Link>
                        </div>

                    </div>

                    <div class="col-md-7 border border-3 border-top-0 rounded-bottom">
                        {/* About Section */}
                        <div class="text-muted fw-light">
                            About
                            <hr />
                        </div>

                        <div class="mb-3">
                            {/* Basic Information */}
                            <div class="fw-bold">Basic Information</div>
                            <div class="row">

                                <div class="col-sm-3">Owner:</div>
                                <div class="col-sm-9">@Model.Owner</div>

                                <div class="col-sm-3">Type:</div>
                                <div class="col-sm-9">@Model.Type</div>

                                <div class="col-sm-3">Rooms:</div>
                                <div class="col-sm-9">@Model.Rooms</div>

                                <div class="col-sm-3">Shared:</div>
                                <div class="col-sm-9">@Model.Shared</div>

                                <div class="col-sm-3">Price @Model.PriceType:</div>
                                <div class="col-sm-9">Rs.@Model.Price</div>

                                <div class="col-sm-3">Facilities:</div>

                                        <div class="col-sm-3"><i class='@Model.Facilities[i].Icon'></i>&nbsp;@Model.Facilities[i].Name</div>
                                    
                            </div>

                            {/* Contact Information */}
                            <div class="fw-bold mt-2">Contact Information</div>
                            <div class="row">

                                <div class="col-sm-3">Phone no:</div>
                                <div class="col-sm-9 mb-1">@Model.Phoneno</div>

                                <div class="col-sm-3">Email:</div>
                                <div class="col-sm-9 mb-1">@Model.Email</div>

                                <div class="col-sm-3">Location:</div>
                                <div class="col-sm-9 mb-1">@Model.Location</div>

                            </div>

                            <div class="row">
                                {/* Description */}
                                <div class="col-sm-4 fw-bold mt-2">Description</div>
                                <div class="col-sm-8"></div>

                                <div class="col-sm-3"></div>
                                <div class="col-sm-9">

                                        @Model.Description
                                    
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </form>
        </div>
    </div>

</div>
  );
};

export default Detail;
