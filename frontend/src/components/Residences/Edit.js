import React from "react";
import { Link } from 'react-router-dom'

const Edit = () => {
  return (
<div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold mb-3">
        <span className="text-muted fw-light"> Dashboard / @(Model.Type)s </span> / Edit @Model.Type
    </h4>

    <div className="card">
        <div className="card-header d-flex">
            <h5 className="mx-auto my-3 text-upper"><strong> Edit @Model.Type </strong></h5>

        </div>
        <div className="card-body">
            <form asp-controller="Residences" asp-action="Edit" asp-route-id="@Model.Id" id="sub" method="post" encType="multipart/form-data">
                <input type="hidden" htmlFor="Id" />

                <div className="row">
                    {/* Residence Name */}
                    <div className="col-md-6 mb-3">

                        <label className="form-label" htmlFor="Name"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-residence-name" className="input-group-text">
                                <i className='bx bx-building'></i>
                            </span>
                            <input htmlFor="Name"
                                   value="@Model.Name"
                                   className="form-control"
                                   id="basic-icon-default-fullname"
                                   placeholder="Pk Resorts"
                                   aria-label="Pk name"
                                   aria-describedby="basic-icon-default-residence-name" />
                        </div>
                        <span asp-validation-for="Name" className="text-danger"></span>

                    </div>

                    {/* Owner Name */}
                    <div className="col-md-6 mb-3">

                        <label className="form-label" htmlFor="Owner"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-residence-owner-name" className="input-group-text">
                                <i className='bx bx-user'></i>
                            </span>
                            <input htmlFor="Owner"
                                   value="@Model.Owner"
                                   className="form-control"
                                   id="basic-icon-residence-owner-name"
                                   placeholder="John doe"
                                   aria-label="John doe"
                                   aria-describedby="basic-icon-default-residence-Owner-name" />
                        </div>
                        <span asp-validation-for="Owner" className="text-danger"></span>

                    </div>

                    {/* Type */}
                    <div className="col-md-6 mb-3">

                        <label htmlFor="Type" className="form-label"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-residence-owner-name" className="input-group-text">
                                <i className='bx bx-slider'></i>
                            </span>
                            <select className="form-select" htmlFor="Type" aria-label="Select Residence Type">
                                
                                    <option selected value="Hotel">Hotel</option>
                                    <option value="Hostel">Hostel</option>
                                    <option value="House">House</option>
                                
                            </select>
                        </div>
                        <span asp-validation-for="Type" className="text-danger"></span>

                    </div>

                    {/* Shared */}
                    <div className="col-md-3 mb-3">

                        <label htmlFor="Shared" className="form-label"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-residence-owner-name" className="input-group-text">
                                <i className='bx bx-group'></i>
                            </span>
                            <select className="form-select" htmlFor="Shared" aria-label="Select Residence Type">
                               
                                    <option selected value="No">No</option>
                                    <option value="Yes">Yes</option>
                                
                            </select>
                        </div>
                        <span asp-validation-for="Shared" className="text-danger"></span>

                    </div>

                    {/* Rooms */}
                    <div className="col-md-3 mb-3">

                        <label className="form-label" htmlFor="Rooms"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-residence-rooms" className="input-group-text">
                                <i className='bx bx-minus-front'></i>
                            </span>
                            <input type="number"
                                   value="@Model.Rooms"
                                   className="form-control"
                                   id="Rooms"
                                   name="Rooms"
                                   placeholder="5"
                                   aria-label="5"
                                   aria-describedby="basic-icon-residence-rooms" />
                        </div>
                        <span asp-validation-for="Rooms" className="text-danger"></span>

                    </div>

                    {/* Location */}
                    <div className="col-lg-6 mb-3">
                        <label className="form-label" htmlFor="Location"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-map-pin" className="input-group-text">
                                <i className='bx bxs-map-pin'></i>
                            </span>
                            <input htmlFor="Location"
                                   value="@Model.Location"
                                   className="form-control"
                                   id="basic-icon-location"
                                   placeholder="Township, Lahore, Pakistan."
                                   aria-label="Pk Resorts"
                                   aria-describedby="basic-icon-location" />
                        </div>
                        <span asp-validation-for="Location" className="text-danger"></span>
                    </div>

                    {/* Price */}
                    <div className="col-md-3 mb-3">

                        <label className="form-label" htmlFor="Price"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-residence-Price" className="input-group-text">
                                <i className='bx bx-wallet'></i>
                            </span>
                            <input type="number"
                                   value="@Model.Price"
                                   className="form-control"
                                   id="Price"
                                   name="Price"
                                   placeholder="Rs. 500"
                                   aria-label="Rs. 500"
                                   aria-describedby="basic-icon-residence-Price" />
                        </div>
                        <span asp-validation-for="Price" className="text-danger"></span>

                    </div>

                    {/* Price Type */}
                    <div className="col-md-3 mb-3">

                        <label htmlFor="PriceType" className="form-label"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-residence-owner-name" className="input-group-text">
                                <i className='bx bx-time'></i>
                            </span>
                            <select className="form-select" htmlFor="PriceType" aria-label="Select Price Type">
                                
                                    <option selected value="/Month">Per Month</option>
                                    <option value="/Day">Per Day</option>
                                
                            </select>
                        </div>
                        <span asp-validation-for="PriceType" className="text-danger"></span>

                    </div>
                </div>

                {/* Facilities */}
                <div className="mb-3">
                    <div className="mb-3">
                        <label className="form-label" for="basic-icon-residence-facilities">Facilities</label>

                        <div className="row">

                                <div className="col-md-4">
                                    <div className="form-check form-switch mb-2">
                                        <input className="form-check-input check" type="checkbox" name="Facilities[@i].IsSelected" id="Facilities[@i].IsSelected" />
                                        <input type="hidden" htmlFor="@Model.Facilities[i].FacilityId" />
                                        <input type="text" htmlFor="@Model.Facilities[i].Name" hidden />
                                        <input type="text" htmlFor="@Model.Facilities[i].Icon" hidden />
                                        <label className="form-check-label btn btn-outline-primary w-100 text-start" for="Facilities[@i].IsSelected">
                                            <i className='@Model.Facilities[i].Icon'></i>
                                            &nbsp;@Model.Facilities[i].Name
                                        </label>
                                    </div>
                                </div>
                            

                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Phone No */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="Phoneno"></label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-default-phone2" className="input-group-text">
                                <i className="bx bx-phone"></i>
                            </span>
                            <input htmlFor="Phoneno"
                                   value="@Model.Phoneno"
                                   className="form-control"
                                   placeholder="0300 1234567" />
                        </div>
                        <div className="form-text">Phone no must be 11 digits.</div>
                        <span asp-validation-for="Phoneno" className="text-danger"></span>
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="Email"></label>
                        <div className="input-group input-group-merge">
                            <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                            <input htmlFor="Email"
                                   value="@Model.Email"
                                   id="basic-icon-default-email"
                                   className="form-control"
                                   placeholder="Pk.Resorts@example.com"
                                   aria-label="Pk.Resorts@example.com"
                                   aria-describedby="basic-icon-default-email" />
                            <span id="basic-icon-default-email" className="input-group-text"></span>
                        </div>
                        <div className="form-text">You can use letters, numbers & periods</div>
                        <span asp-validation-for="Email" className="text-danger"></span>
                    </div>

                </div>

                {/* Description */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="Description"></label>
                    <div className="input-group input-group-merge">
                        <span id="basic-icon-default-message2" className="input-group-text">
                            <i className='bx bxs-detail'></i>
                        </span>
                        <textarea id="Description"
                                  htmlFor="Description"
                                  value="@Model.Description"
                                  className="form-control"
                                  placeholder="Write about your Residence..."
                                  aria-label="Write about your Residence..."
                                  aria-describedby="basic-icon-default-description"></textarea>
                    </div>
                    <span asp-validation-for="Description" className="text-danger"></span>
                </div>

                <div className="row">
                    {/* Select Residence Image */}
                    <div className="col-md-9 my-2">
                        <label htmlFor="ResidenceImage" className="form-label">Select Residence Image</label>
                        <input className="form-control" type="file" htmlFor="ResidenceImage" required />
                        <span asp-validation-for="ResidenceImage" className="text-danger"></span>
                    </div>

                    {/* Residence Image Preview */}
                    <div className="col-md-3 my-2">
                        
                                <img src="/assets/img/buildings/Hotel/Hotel-1.png"
                                     alt="Residence Pic"
                                     className="d-block rounded"
                                     height="100"
                                     width="100" />
                            
                    </div>
                </div>

                {/* Buttons */}
                <div className="row justify-content-center">
                    <div className="col-md-6 btn-group my-3">
                        <button type="submit" className="btn btn-primary ">
                            <span className="tf-icons bx bx-save"></span>&nbsp;Save
                        </button>

                        <Link to='/hotel' className="btn btn-outline-secondary w-25 ">
                            <span className="tf-icons bx bx-right-arrow-alt"></span>&nbsp;Back
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  );
};

export default Edit;
