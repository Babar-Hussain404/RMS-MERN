import React from "react";
import { Link } from 'react-router-dom'

const Delete = () => {
  return (
<div className="container-xxl flex-grow-1 container-p-y">

<h4 className="fw-bold mb-3">
    <span className="text-muted fw-light"> Dashboard / @(Model.Type)s </span> / Delete @Model.Type
</h4>

<div className="card">
    <div className="card-header d-flex">
        <h5 className="mx-auto my-3"><strong className="text-danger">Are you Sure You want to Delete this @Model.Type?</strong></h5>

    </div>
    <div className="card-body">
        <form>

            <div className="row">
                <div className="col-md-5">

                    {/* Name */}
                    <h5 className="d-flex justify-content-center">
                        <strong>@Model.Name</strong>
                    </h5>

                    {/* Photo */}
                    <div className="d-flex justify-content-center align-items-sm-center m-5">
                        <img src="/assets/img/buildings/Hotel/Hotel-1.png"
                             alt="building-img"
                             className="d-block rounded"
                             height="250"
                             width="250"
                             id="residence-pic" />
                    </div>

                    {/* Buttons */}
                    <div className="d-flex btn-group mx-4">
                        
                            <a className="btn btn-danger" href="/Residences/DeleteConfirm?Id=@Model.Id">
                                <span className="tf-icons bx bx-trash"></span>&nbsp;Delete
                            </a>
                        
                        <Link to='/hotel' className="btn btn-outline-secondary">
                            <span className="tf-icons bx bx-right-arrow-alt"></span>&nbsp;Back
                        </Link>
                    </div>

                </div>

                <div className="col-md-7 border border-3 border-top-0 rounded-bottom">
                    {/* About Section */}
                    <div className="text-muted fw-light">
                        About
                        <hr />
                    </div>

                    <div className="mb-3">
                        {/* Basic Information */}
                        <div className="fw-bold">Basic Information</div>
                        <div className="row">

                            <div className="col-sm-3">Owner:</div>
                            <div className="col-sm-9">@Model.Owner</div>

                            <div className="col-sm-3">Type:</div>
                            <div className="col-sm-9">@Model.Type</div>

                            <div className="col-sm-3">Rooms:</div>
                            <div className="col-sm-9">@Model.Rooms</div>

                            <div className="col-sm-3">Shared:</div>
                            <div className="col-sm-9">@Model.Shared</div>

                            <div className="col-sm-3">Price/Day:</div>
                            <div className="col-sm-9">Rs.@Model.Price</div>

                            <div className="col-sm-3">Facilities:</div>

                                    <div className="col-sm-3"><i className='@Model.Facilities[i].Icon'></i>&nbsp;@Model.Facilities[i].Name</div>
                               
                        </div>

                        {/* Contact Information */}
                        <div className="fw-bold mt-2">Contact Information</div>
                        <div className="row">

                            <div className="col-sm-3">Phone no:</div>
                            <div className="col-sm-9 mb-1">@Model.Phoneno</div>

                            <div className="col-sm-3">Email:</div>
                            <div className="col-sm-9 mb-1">@Model.Email</div>

                            <div className="col-sm-3">Location:</div>
                            <div className="col-sm-9 mb-1">@Model.Location</div>

                        </div>

                        <div className="row">
                            {/* Description */}
                            <div className="col-sm-4 fw-bold mt-2">Description</div>
                            <div className="col-sm-8"></div>

                            <div className="col-sm-3"></div>
                            <div className="col-sm-9">

                                    @Model.Description
                                
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </form>
    </div>
</div>

</div>  );
};

export default Delete;
